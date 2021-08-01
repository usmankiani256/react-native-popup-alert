//
//  PopupAlertModule.swift
//  PopupAlertModule
//
//  Copyright © 2021 Muhammad Usman Kiani. All rights reserved.
//

import Foundation

@objc(PopupAlertModule)
class PopupAlertModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
