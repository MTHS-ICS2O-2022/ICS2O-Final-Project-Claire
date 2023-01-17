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

  if (zodiac == "Aries" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>Your tendency is to take the lead on something that needs immediate attention. Be careful. You are not the best one suited for the job - so let someone else do it.</p>"
  } else if (zodiac == "Aries" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>It may seem like money is all around you now. If you're trying to attract cash, put together a solid business plan. Enumerate your skills, passion, and - most of all - the figures to show your real worth.</p>"
  } else if (zodiac == "Aries" && topic == "Health")
    document.getElementById("horoscope").innerHTML =
      "<p>Open yourself up to change and release your grip on things that you know should go. This pertains to unhealthy eating habits, and laziness. Your body governs how you feel to a large extent: give it the respect it deserves.</p>"
  else if (zodiac == "Taurus" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>At a time in which you were hoping to celebrate tremendous success on something you have been working on, you may become quite distraught as you realize that you have forgotten one very important detail.</p>"
  } else if (zodiac == "Taurus" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      " <p>It may seem like you're going backward with the aspects in your house of cash and values. You may have money on your mind, but things keep getting delayed or in the way. It's maddening and, fortunately, temporary.</p>"
  } else if (zodiac == "Taurus" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>When sleep is good, so is the rest of life, generally speaking! Every now and then we need to adjust our sleeping habits consciously so that we are insured of good rest. You may need a new bed!</p>"
  } else if (zodiac == "Taurus" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>At a time in which you were hoping to celebrate tremendous success on something you have been working on, you may become quite distraught as you realize that you have forgotten one very important detail.</p>"
  } else if (zodiac == "Gemini" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>You want to feel in control, and money is seldom controllable. The good news is that there's a lot of positive energy concentrated in your money sector. With action and luck, it should be easier to earn money at this time.</p>"
  } else if (zodiac == "Gemini" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>This is a time to follow your instincts. That still, small voice within can take you a long way if you tune into it! Ever think of doing yoga during the day but then not feel like it when you get off work? Call a friend and plan to hold each other accountable so that you can't get out of it so easily.</p>"
  } else if (zodiac == "Gemini" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>People may seem to be your friend but be careful. It could be that they are just using you to get what they want. It may be hard to understand people's motives on a day like this. Be cautious and don't give any secrets away to an unreliable source.</p>"
  } else if (zodiac == "Cancer" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>Now you're in a period of redefining who you are and how you project yourself into the world. The Universe is asking you to pay close attention to your career. If it isn't the one you want, this is the time to change it.</p>"
  } else if (zodiac == "Cancer" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>You may have to put the shine on hold for a little while and that's OK! You don't really want to be in the spotlight as much as people say you do. In fact, you need to focus on yourself in a way that takes the pressure off your outside self and puts it on your inner self.</p>"
  } else if (zodiac == "Cancer" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>Sometimes the universe asks us to go over something again if it feels that we haven't done it right the first time. Today is one of those days in which you feel this backward trend. Instead of moving forward, you are asked to go back and review.</p>"
  } else if (zodiac == "Leo" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>This period is about the new opportunities coming to your working life. The sky's the limit in terms of what you can expect, but the Universe won't do it for you. You must be on the lookout for ways to increase your income, either by adding a new side business or accepting freelance assignments. </p>"
  } else if (zodiac == "Leo" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>You may feel a rush of exuberance under today's aspect, and the best way to act that out is physically! If you are accustomed to having an exercise schedule, this is a great time to augment it in some way. </p>"
  } else if (zodiac == "Leo" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>The pace of your work has been so fast and furious lately that you may have skipped over a very important detail or opportunity. Just because yesterday is over doesn't mean that you can't benefit from revisiting some of its valuable ideas and people.</p>"
  } else if (zodiac == "Virgo" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>You now have activity in your house of earning that over time will radically change the way you earn money. Although it may feel that some sources of income are being pared away from your life, it's for the better in the end. </p>"
  } else if (zodiac == "Virgo" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>Drop some of your bigger concerns and focus on what you can do today to improve your health (lots of drinking water, daily exercise, rest). A personal sense of well-being is the priority here. </p>"
  } else if (zodiac == "Virgo" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>Don't be too quick to judge an idea and put it away in a file that you might never open again. Although it may be useful to compartmentalize in this manner, doing so may do you a great deal of harm in the long run.</p>"
  } else if (zodiac == "Libra" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>You have a lot of intractable activity now. You're being pushed in a not-so-subtle way to deal with others. Forming new relationships and cultivating existing ones will provide the answers you seek. </p>"
  } else if (zodiac == "Libra" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>Commitment is the key to success, and you must commit to a healthy physical life in order to have balance and harmony in the bigger picture. </p>"
  } else if (zodiac == "Libra" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>Your freethinking personality will receive a great deal of support today. Tackle any work that allows you independence. Search for opportunities in which you can be your own person instead of having to stick yourself into someone else's box.</p>"
  } else if (zodiac == "Scorpio" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>You have something to think about concerning your employment. Since aspects affect your job, working environment, boss, and co-workers, it's time to pay attention to each of these areas. Ask yourself if you're happy here. Do you want to stay or change jobs? </p>"
  } else if (zodiac == "Scorpio" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>Give away a little of your high-powered energy working out or doing yoga. Skim the cream off the top, as it were, and enjoy a more deeply centered feeling.</p>"
  } else if (zodiac == "Scorpio" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>Unless you know your history, you are doomed to repeat it. With that said, consider taking a step backward. Doing so may actually end up being the giant step forward that you had been hoping for. You can achieve wonderful success in this manner.</p>"
  } else if (zodiac == "Sagittarius" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>A balanced and peace-loving Universe brings a lot of courage to face an existing debt problem, as well as the negotiating skills to get the kind of payment plan you can afford. Part of you may be worried that you'll never get it done, but aspects show that you will if you apply your inner wisdom.</p>"
  } else if (zodiac == "Sagittarius" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>You need to take your physical well-being quite seriously or your energy will run amuck. Broaden your awareness of what healthy means to you by talking with your friends about fitness. See what they do to enhance their wellbeing. </p>"
  } else if (zodiac == "Sagittarius" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>Your ideas are in the right place, but you may lack the concentration required to follow through on them. Focus is hard to come by but realize that it is key to getting what you want out of the situation. </p>"
  } else if (zodiac == "Capricorn" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>Now is the time to start going back and reviewing plans that you made previously. Take the time to reflect on where you have been before taking another step forward. Doing so will save you a great deal of time, energy, and resources in the long run.</p>"
  } else if (zodiac == "Capricorn" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>With so much focus on politics, it is easy to lose track of the daily wellness program we all need to keep in order to stay healthy and take advantage of the many privileges we have in our modern society. </p>"
  } else if (zodiac == "Capricorn" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>You don't always have the patience required to cultivate long-term relationships. You want results now, which can stand in the way of growth in other areas. Now male and female energies perfectly balance in your house of serious relationships. This can help you merge with a business partner or develop new projects. Just don't sign on the dotted line yet. </p>"
  } else if (zodiac == "Aquarius" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>The race continues on, but someone is likely to throw in an extra twist. A partner that you thought you could count on is taking a giant step backward. Suddenly, this powerful support that you were hoping for is not so secure after all.</p>"
  } else if (zodiac == "Aquarius" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p> Make the most of whatever you do for exercise by breathing deeply as you do it. You will get twice as much out of it and feel reinvigorated without putting any extra stress on your body. </p>"
  } else if (zodiac == "Aquarius" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>Money is a way to find the security you seek. Now you'll probably notice that your male and female sides are pretty balanced. Good work! Since this affects your employment, health, and mundane activities, work is likely to be going well. You're making a great impression on people higher up the ladder. If you want to take this a step further, volunteer to head a special project. Your review will be amazing! </p>"
  } else if (zodiac == "Pisces" && topic == "Work") {
    document.getElementById("horoscope").innerHTML =
      "<p>Your current plans may stop dead in their tracks today thanks to someone who has a rather backward notion of the situation at hand. It seems that someone's belief system is clogging up the works in a rather negative way. Open the door for dialogue.</p>"
  } else if (zodiac == "Pisces" && topic == "Health") {
    document.getElementById("horoscope").innerHTML =
      "<p>  You may have the best of intentions but not enough follow through in your exercise regimen. One way to take the burden off yourself is to join a group that exercises regularly - a virtual team or a class of some sort. </p>"
  } else if (zodiac == "Pisces" && topic == "Money") {
    document.getElementById("horoscope").innerHTML =
      "<p>We're here to learn, not control. Activity in your house of travel, languages, and higher education means that you may find increased access to money when you take your skills to markets outside Canada. Go online to connect to new customers. </p>"
  } else {
    document.getElementById("horoscope").innerHTML =
      "<p>You did not select anything?</p>"
  }
}
