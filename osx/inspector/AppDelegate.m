#import "AppDelegate.h"

#import "RCTBridge.h"
#import "RCTJavaScriptLoader.h"
#import "RCTRootView.h"

#import <Cocoa/Cocoa.h>


//NBB
#import <CoreInspectorOSX/CoreInspectorOSX.h>
#import "RCTBridgeModule.h"
#import "RCTLog.h"

@interface AppDelegate() <RCTBridgeDelegate>

@end

@implementation AppDelegate

-(id)init
{
  
  
  
  
    if(self = [super init]) {
        NSRect contentSize = NSMakeRect(200, 500, 1000, 500); // initial size of main NSWindow

        self.window = [[NSWindow alloc] initWithContentRect:contentSize
                                                  styleMask:NSTitledWindowMask | NSResizableWindowMask | NSFullSizeContentViewWindowMask | NSMiniaturizableWindowMask | NSClosableWindowMask
                                                    backing:NSBackingStoreBuffered
                                                      defer:NO];
        NSWindowController *windowController = [[NSWindowController alloc] initWithWindow:self.window];

        [[self window] setTitleVisibility:NSWindowTitleHidden];
        [[self window] setTitlebarAppearsTransparent:YES];
        [[self window] setAppearance:[NSAppearance appearanceNamed:NSAppearanceNameAqua]];

        [windowController setShouldCascadeWindows:NO];
        [windowController setWindowFrameAutosaveName:@"inspector"];

        [windowController showWindow:self.window];

        [self setUpApplicationMenu];
    }
    return self;
}

- (void)applicationDidFinishLaunching:(__unused NSNotification *)aNotification
{

    _bridge = [[RCTBridge alloc] initWithDelegate:self
                                              launchOptions:nil];

    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:_bridge
                                                     moduleName:@"inspector"
                                              initialProperties:nil];



    [self.window setContentView:rootView];
}


- (NSURL *)sourceURLForBridge:(__unused RCTBridge *)bridge
{
    NSURL *sourceURL;

#if DEBUG
    sourceURL = [NSURL URLWithString:@"http://localhost:8081/index.osx.bundle?platform=osx&dev=true"];
#else
    sourceURL = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif

    return sourceURL;
}

- (void)loadSourceForBridge:(RCTBridge *)bridge
                  withBlock:(RCTSourceLoadBlock)loadCallback
{
    [RCTJavaScriptLoader loadBundleAtURL:[self sourceURLForBridge:bridge]
                              onComplete:loadCallback];
}


- (void)setUpApplicationMenu
{
    NSMenuItem *containerItem = [[NSMenuItem alloc] init];
    NSMenu *rootMenu = [[NSMenu alloc] initWithTitle:@"" ];
    [containerItem setSubmenu:rootMenu];
    [rootMenu addItemWithTitle:@"Quit inspector" action:@selector(terminate:) keyEquivalent:@"q"];
    [[NSApp mainMenu] addItem:containerItem];
}

- (id)firstResponder
{
    return [self.window firstResponder];
}


@end


@implementation CallCoreInspector

RCT_EXPORT_MODULE();


//  RCT_EXPORT_METHOD(getSerial)
//  {
//    
//    RCTLogInfo(@"Getting Serial...");
//    
//  }


RCT_REMAP_METHOD(getSerial,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
  {
    
    NSDictionary *data = [CoreInspectorOSX getSerial];
    
    if (data) {
      resolve(data);
    } else {
      NSString *error = @"not found!...";
      reject(@"no_serial", @"There were no serial", error);
    }
  }

RCT_REMAP_METHOD(getAllData,
                 resolver_2:(RCTPromiseResolveBlock)resolve
                 rejecter_2:(RCTPromiseRejectBlock)reject)
{
  
  NSDictionary *data = [CoreInspectorOSX getAllData];
  
  if (data) {
    resolve(data);
  } else {
    NSString *error = @"not found!...";
    reject(@"no_serial", @"There were no serial", error);
  }
}


@end

