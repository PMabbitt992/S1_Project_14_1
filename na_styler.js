"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Paige Mabbitt
   Date: 4.2.19  

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
//Run setStyles function when the window loads
window.onload = setStyles;

function setStyles() {
      //A random number out of 5 will be chosen
      var styleNum = randInt(5);

      //Create link element with rel:stylesheet, id:fancySheet, href:na_style_(random number generated earlier).css
      var fancySheet = document.createElement("link");
      fancySheet.setAttribute("rel", "stylesheet");
      fancySheet.setAttribute("id", "fancySheet");
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");
      //Append fancySheet in the documnet head
      document.head.appendChild(fancySheet);
      //create figure element with id:styleThumbs
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      //Get div with the id of box
      var divBox = document.getElementById("box");
      //Append figureBox to the div#box
      divBox.appendChild(figBox);
      //For 4 rounds, create the img element with the corresponding picture(na_small_(number of times looped).png) and add the alternate of na_style(number of times looped).css
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + [i] + ".png");
            sheetImg.setAttribute("alt", "na_style_" + [i] + ".css");
            //When clicked, set the alt of the image clicked as the css
            sheetImg.addEventListener("click", function (e) {
                  document.getElementById("fancySheet").setAttribute("href", e.target.alt);
            });
            //add sheetImg to figBox
            figBox.appendChild(sheetImg);
      }
      //Add stylesheet called thumbStyles
      var thumbStyles = document.createElement("style");
      //Put the stylesheet in the document head
      document.head.appendChild(thumbStyles);

      //Insert rules for the figures in the thumbStyles stylesheet
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
            position: absolute;\
            left: 0px;\
            bottom: 0px;\
      }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
            outline: 1px solid black; \
            cursor: pointer;\
            opacity: 0.75;\
      }", 1);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover {\
            outline: 1px solid red;\
            opacity: 1.0;\
      }", 2);

}

function randInt(size) {
      return Math.floor(size * Math.random());
}