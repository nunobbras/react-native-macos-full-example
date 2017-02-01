//
//  CoreInspectorOSX.m
//  CoreInspectorOSX
//
//  Created by re_nbb on 18/07/16.
//  Copyright © 2016 re_nbb. All rights reserved.
//

#import "CoreInspectorOSX.h"
#import <IOKit/IOKitLib.h>
#import <sys/sysctl.h>



@interface VarSystemInfo:NSObject
@property (readwrite, strong, nonatomic) NSString *sysName;
@property (readwrite, strong, nonatomic) NSString *sysUserName;
@property (readwrite, strong, nonatomic) NSString *sysFullUserName;
@property (readwrite, strong, nonatomic) NSString *sysOSName;
@property (readwrite, strong, nonatomic) NSString *sysOSVersion;
@property (readwrite, strong, nonatomic) NSString *sysPhysicalMemory;
@property (readwrite, strong, nonatomic) NSString *sysSerialNumber;
@property (readwrite, strong, nonatomic) NSString *sysUUID;
@property (readwrite, strong, nonatomic) NSString *sysModelID;
@property (readwrite, strong, nonatomic) NSString *sysModelName;
@property (readwrite, strong, nonatomic) NSString *sysProcessorName;
@property (readwrite, strong, nonatomic) NSString *sysProcessorSpeed;
@property (readwrite, strong, nonatomic) NSNumber *sysProcessorCount;
@property (readonly,  strong, nonatomic) NSString *getOSVersionInfo;

- (NSString *) _strIORegistryEntry:(NSString *)registryKey;
- (NSString *) _strControlEntry:(NSString *)ctlKey;
- (NSNumber *) _numControlEntry:(NSString *)ctlKey;
- (NSString *) _modelNameFromID:(NSString *)modelID;
- (NSString *) _parseBrandName:(NSString *)brandName;
@end

static NSString* const kVarSysInfoVersionFormat  = @"%@.%@.%@ (%@)";
static NSString* const kVarSysInfoPlatformExpert = @"IOPlatformExpertDevice";

static NSString* const kVarSysInfoKeyOSVersion = @"kern.osrelease";
static NSString* const kVarSysInfoKeyOSBuild   = @"kern.osversion";
static NSString* const kVarSysInfoKeyModel     = @"hw.model";
static NSString* const kVarSysInfoKeyCPUCount  = @"hw.physicalcpu";
static NSString* const kVarSysInfoKeyCPUFreq   = @"hw.cpufrequency";
static NSString* const kVarSysInfoKeyCPUBrand  = @"machdep.cpu.brand_string";

static NSString* const kVarSysInfoMachineNames       = @"MachineNames";
static NSString* const kVarSysInfoMachineiMac        = @"iMac";
static NSString* const kVarSysInfoMachineMacmini     = @"Mac mini";
static NSString* const kVarSysInfoMachineMacBookAir  = @"MacBook Air";
static NSString* const kVarSysInfoMachineMacBookPro  = @"MacBook Pro";
static NSString* const kVarSysInfoMachineMacPro      = @"Mac Pro";

#pragma mark - Implementation:
#pragma mark -

@implementation VarSystemInfo
@synthesize sysName;//, sysUserName, sysFullUserName;
@synthesize sysOSName, sysOSVersion;
@synthesize sysPhysicalMemory;
@synthesize sysSerialNumber, sysUUID;
@synthesize sysModelID, sysModelName;
@synthesize sysProcessorName, sysProcessorSpeed, sysProcessorCount;

#pragma mark - Helper Methods:

- (NSString *) _strIORegistryEntry:(NSString *)registryKey {
    
    NSString *retString;
    
    io_service_t service =
    IOServiceGetMatchingService( kIOMasterPortDefault,
                                IOServiceMatching([kVarSysInfoPlatformExpert UTF8String]) );
    if ( service ) {
        
        CFTypeRef cfRefString =
        IORegistryEntryCreateCFProperty( service,
                                        (__bridge CFStringRef)registryKey,
                                        kCFAllocatorDefault, kNilOptions );
        if ( cfRefString ) {
            
            retString = [NSString stringWithString:(__bridge NSString *)cfRefString];
            CFRelease(cfRefString);
            
        } IOObjectRelease( service );
        
    } return retString;
}

- (NSString *) _strControlEntry:(NSString *)ctlKey {
    
    size_t size = 0;
    if ( sysctlbyname([ctlKey UTF8String], NULL, &size, NULL, 0) == -1 ) return nil;
    
    char *machine = calloc( 1, size );
    
    sysctlbyname([ctlKey UTF8String], machine, &size, NULL, 0);
    NSString *ctlValue = [NSString stringWithCString:machine encoding:[NSString defaultCStringEncoding]];
    
    free(machine); return ctlValue;
}

- (NSNumber *) _numControlEntry:(NSString *)ctlKey {
    
    size_t size = sizeof( uint64_t ); uint64_t ctlValue = 0;
    if ( sysctlbyname([ctlKey UTF8String], &ctlValue, &size, NULL, 0) == -1 ) return nil;
    return [NSNumber numberWithUnsignedLongLong:ctlValue];
}

- (NSString *) _modelNameFromID:(NSString *)modelID {
    
    /*!
     * @discussion Maintain Machine Names plist from the following site
     * @abstract ref: http://www.everymac.com/systems/by_capability/mac-specs-by-machine-model-machine-id.html
     *
     * @discussion Also info found in SPMachineTypes.plist @ /System/Library/PrivateFrameworks/...
     *             ...AppleSystemInfo.framework/Versions/A/Resources
     *             Information here is private and can not be linked into the code.
     */
    
    NSDictionary *modelDict = [[NSBundle mainBundle] URLForResource:kVarSysInfoMachineNames withExtension:@"plist"];
    NSString *modelName = [modelDict objectForKey:modelID];
    
    if ( !modelName ) {
        
        if ( [modelID.lowercaseString hasPrefix:kVarSysInfoMachineiMac.lowercaseString] ) return kVarSysInfoMachineiMac;
        else if ( [modelID.lowercaseString hasPrefix:kVarSysInfoMachineMacmini] )    return kVarSysInfoMachineMacmini;
        else if ( [modelID.lowercaseString hasPrefix:kVarSysInfoMachineMacBookAir] ) return kVarSysInfoMachineMacBookAir;
        else if ( [modelID.lowercaseString hasPrefix:kVarSysInfoMachineMacBookPro] ) return kVarSysInfoMachineMacBookPro;
        else if ( [modelID.lowercaseString hasPrefix:kVarSysInfoMachineMacPro] )     return kVarSysInfoMachineMacPro;
        else return modelID;
        
    } return modelName;
}

- (NSString *) _parseBrandName:(NSString *)brandName {
    
    if ( !brandName ) return nil;
    
    NSMutableArray *newWords = [NSMutableArray array];
    NSString *strCopyRight = @"r", *strTradeMark = @"tm", *strCPU = @"CPU";
    
    NSArray *words = [brandName componentsSeparatedByCharactersInSet:[[NSCharacterSet alphanumericCharacterSet] invertedSet]];
    
    for ( NSString *word in words ) {
        
        if ( [word isEqualToString:strCPU] )       break;
        if ( [word isEqualToString:@""] )          continue;
        if ( [word.lowercaseString isEqualToString:strCopyRight] ) continue;
        if ( [word.lowercaseString isEqualToString:strTradeMark] ) continue;
        
        if ( [word length] > 0 ) {
            
            NSString *firstChar = [word substringToIndex:1];
            if ( NSNotFound != [firstChar rangeOfCharacterFromSet:[NSCharacterSet decimalDigitCharacterSet]].location ) continue;
            
            [newWords addObject:word];
            
        } } return [newWords componentsJoinedByString:@" "];
}

- (NSString *) getOSVersionInfo {
    
    NSString *darwinVer = [self _strControlEntry:kVarSysInfoKeyOSVersion];
    NSString *buildNo = [self _strControlEntry:kVarSysInfoKeyOSBuild];
    if ( !darwinVer || !buildNo ) return nil;
    
    NSString *majorVer = @"10", *minorVer = @"x", *bugFix = @"x";
    NSArray *darwinChunks = [darwinVer componentsSeparatedByCharactersInSet:[NSCharacterSet punctuationCharacterSet]];
    
    if ( [darwinChunks count] > 0 ) {
        
        NSInteger firstChunk = [(NSString *)[darwinChunks objectAtIndex:0] integerValue];
        minorVer = [NSString stringWithFormat:@"%ld", (firstChunk - 4)];
        bugFix = [darwinChunks objectAtIndex:1];
        return [NSString stringWithFormat:kVarSysInfoVersionFormat, majorVer, minorVer, bugFix, buildNo];
        
    } return nil;
}

#pragma mark - Initalization:

- (void) setupSystemInformation {
    
    NSProcessInfo *pi = [NSProcessInfo processInfo];
    
    self.sysName = [[NSHost currentHost] localizedName];
    self.sysOSName = pi.operatingSystemVersionString;
    self.sysOSVersion = self.getOSVersionInfo;
    self.sysPhysicalMemory = [NSNumber numberWithUnsignedLongLong: pi.physicalMemory];
    self.sysSerialNumber = [self _strIORegistryEntry:(__bridge NSString *)CFSTR(kIOPlatformSerialNumberKey)];
    self.sysUUID = [self _strIORegistryEntry:(__bridge NSString *)CFSTR(kIOPlatformUUIDKey)];
    self.sysModelID = [self _strControlEntry:kVarSysInfoKeyModel];
    self.sysModelName = [self _modelNameFromID:self.sysModelID];
    self.sysProcessorName = [self _parseBrandName:[self _strControlEntry:kVarSysInfoKeyCPUBrand]];
    self.sysProcessorSpeed = [self _numControlEntry:kVarSysInfoKeyCPUFreq];
    self.sysProcessorCount = [self _numControlEntry:kVarSysInfoKeyCPUCount];
    
    int name[] = {CTL_KERN, CTL_HW};
    int namelen = 2;
    int oldval[8];  /* 4 would suffice */
    NSInteger len = sizeof(oldval);
    
    int i, error;
    
    
    error = sysctl (name, namelen, (void *)oldval, &len,
                    NULL /* newval */, 0 /* newlen */);
    if (error) {
        NSLog(@"ERROR");
    }
    else{
        //NSLog(@"len is %@ bytes\n", (NSString *) len);
        for (i = 0; i < len/(sizeof(int)); i++)
            NSLog(@"%i\t", oldval[i]);
        NSLog(@"\n");
    }
    
    
}

- (id) init {
    
    if ( (self = [super init]) ) {
        
        [self setupSystemInformation];
        
    } return self;
}

@end






@implementation CoreInspectorOSX

+(NSDictionary *) getSerial{
    
    NSLog(@"getting serial...");
    
    VarSystemInfo *VarSystemInfo1 = [[VarSystemInfo alloc]init];
    VarSystemInfo1 = [VarSystemInfo1 init];
    
    NSString *serial = VarSystemInfo1.sysSerialNumber;
    
    NSDictionary *data = @{
        @"data" :serial,
        @"ok":@true,
        };
    
    return data;
}

+(NSDictionary *) getData{
    NSLog(@"getting all data...");
    
    VarSystemInfo *VarSystemInfo1 = [[VarSystemInfo alloc]init];
    VarSystemInfo1 = [VarSystemInfo1 init];
    
    NSDictionary *data = @{
                @"sysName": VarSystemInfo1.sysName,
                @"sysOSName": VarSystemInfo1.sysOSName,
                @"sysOSVersion": VarSystemInfo1.sysOSVersion,
                @"sysPhysicalMemory": VarSystemInfo1.sysPhysicalMemory,
                @"sysSerialNumber": VarSystemInfo1.sysSerialNumber,
                @"sysUUID": VarSystemInfo1.sysUUID,
                @"sysModelID": VarSystemInfo1.sysModelID,
                @"sysModelName": VarSystemInfo1.sysModelName,
                @"sysProcessorName": VarSystemInfo1.sysProcessorName,
                @"sysProcessorSpeed": VarSystemInfo1.sysProcessorSpeed, 
                @"sysProcessorCount": VarSystemInfo1.sysProcessorCount,
    };
    
    return data;
}


+(NSDictionary *) getAllData {
    NSLog(@"getting All Data ...");
    
    
    
    NSDictionary *data = @{
        @"direct_data": [self getData],
        @"profiler_memory": [self queryProfilerData: @"SPMemoryDataType -xml"],
        @"profiler_disk": [self queryProfilerData: @"SPStorageDataType -xml"],
        @"profiler_screen": [self queryProfilerData: @"SPDisplaysDataType -xml"],
        @"profiler_network": [self queryProfilerData: @"SPNetworkDataType -xml"],
        @"profiler_battery": [self queryProfilerData: @"SPPowerDataType -xml"],
        @"profiler_usb": [self queryProfilerData: @"SPUSBDataType -xml"],
        };
    
    return data;
}


+(NSString *) queryProfilerData: (NSString *)queryType  {
    NSLog(@"getting profile ...");
    
    //NSTask * task = [NSTask new];
    NSTask *task = [[NSTask alloc] init];
    NSPipe * out = [NSPipe pipe];
    
    [task setLaunchPath:@"/bin/bash"];
    NSString *query = [NSString stringWithFormat:@"system_profiler %@", queryType];
    [task setArguments:@[@"-c", query]];
    [task setCurrentDirectoryPath:@"/"];
    [task setStandardOutput:out];
    [task setStandardInput:[NSPipe pipe]];
    
    [task launch];
    [task waitUntilExit];
    
    NSData *outputData = [[out fileHandleForReading] readDataToEndOfFile];
    NSString *outputString = [[NSString alloc] initWithData:outputData encoding:NSUTF8StringEncoding];
    
    
    
    //    NSString *path = @"";
    //    NSArray *args = [NSArray arrayWithObjects:[@"system_profiler", @"listDataTypes"], nil];
    //    [[NSTask launchedTaskWithLaunchPath:path arguments:args] waitUntilExit];
    
    
    
    
    return outputString;
}



@end
