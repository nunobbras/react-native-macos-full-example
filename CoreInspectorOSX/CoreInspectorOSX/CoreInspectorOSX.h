//
//  CoreInspectorOSX.h
//  CoreInspectorOSX
//
//  Created by re_nbb on 18/07/16.
//  Copyright © 2016 re_nbb. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface CoreInspectorOSX : NSObject

    //This is a class method - we only use this here;
    +(NSDictionary *)getSerial;
    +(NSDictionary *)getData;
    +(NSDictionary *)getAllData;
    +(NSDictionary *)queryProfilerData:(NSString *)queryType ;

@end
