// Copyright (c) 2023 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Jan 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Final-Project-Claire/sw.js", {
    scope: "/ICS2O-Final-Project-Claire/",
  })
}
