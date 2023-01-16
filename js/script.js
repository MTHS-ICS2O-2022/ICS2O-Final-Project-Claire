// Copyright (c) 2023 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Jan 2023
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

/**
 * This function generates a horoscope and an image coordinating with the zodiac sign.
 */
function myButtonClicked() {
var zodiac = document.getElementById("zodiac").value
var topic = document.getElementById("horoscope-topic").value
  console.log(zodiac)
  console.log(topic)

if (zodiac == "Aries" && topic == "Work") {
  document.getElementById("horoscope").innerHTML = "<p>Your tendency is to take the lead on something that needs immediate attention. Be careful. You are not the best one suited for the job - so let someone else do it.</p>"
}
  else if (zodiac == "Aries" && topic == "Money") {
    document.getElementById("horoscope").innerHTML = "<p>It may seem like money is all around you now. If you're trying to attract cash, put together a solid business plan. Enumerate your skills, passion, and - most of all - the figures to show your real worth.</p>"
}
  else if (zodiac == "Aries" && topic == "Health") 
        document.getElementById("horoscope").innerHTML = "<p>Open yourself up to change and release your grip on things that you know should go. This pertains to unhealthy eating habits, and laziness. Your body governs how you feel to a large extent: give it the respect it deserves.</p>"

  else if  (zodiac == "Taurus" && topic == "Work") {
  document.getElementById("horoscope").innerHTML = "At a time in which you were hoping to celebrate tremendous success on something you have been working on, you may become quite distraught as you realize that you have forgotten one very important detail."
}
  else if (zodiac == "Taurus" && topic == "Money") {
    document.getElementById("horoscope").innerHTML = " It may seem like you're going backward with the aspects in your house of cash and values. You may have money on your mind, but things keep getting delayed or in the way. It's maddening and, fortunately, temporary. ."
}
  else if (zodiac == "Taurus" && topic == "Health") {
        document.getElementById("horoscope").innerHTML = "When sleep is good, so is the rest of life, generally speaking! Every now and then we need to adjust our sleeping habits consciously so that we are insured of good rest. You may need a new bed!"

  }
  else if  (zodiac == "Taurus" && topic == "Work") {
  document.getElementById("horoscope").innerHTML = "At a time in which you were hoping to celebrate tremendous success on something you have been working on, you may become quite distraught as you realize that you have forgotten one very important detail."
}
  else if (zodiac == "Taurus" && topic == "Money") {
    document.getElementById("horoscope").innerHTML = " It may seem like you're going backward with the aspects in your house of cash and values. You may have money on your mind, but things keep getting delayed or in the way. It's maddening and, fortunately, temporary. ."
}
  else if (zodiac == "Taurus" && topic == "Health") {
        document.getElementById("horoscope").innerHTML = "When sleep is good, so is the rest of life, generally speaking! Every now and then we need to adjust our sleeping habits consciously so that we are insured of good rest. You may need a new bed!"

  }
  else {
    document.getElementById("horoscope").innerHTML = "<p>You did not select anything?</p>"

  }
}
