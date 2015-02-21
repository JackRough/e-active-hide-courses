// ==UserScript==
// @name        e-active_hide_courses
// @namespace   e-active_hide_courses
// @include     http://eactive.cti.ac.za/
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// ==/UserScript==

var DEBUG_ALERTS = false;

function debugAlert(message){
    if (DEBUG_ALERTS) {
        alert("e-active_hide_courses\n\n" + message);
    }
}

debugAlert("START");

var courseBoxFilters = [
    
  "ASTSC-14"  
  ,"C_ITII121"
  ,"C_ITCO111"
  ,"C_ITCS111"
  ,"C_ITCS121"
  ,"C_ITNT111"
  ,"C_ITPR111"
  ,"C_ITHC121"
  ,"C_ITMA121"
  ,"C_ITPP111"
  ,"C_ITSP120"
  ,"C_ITOO121"
  ,"C_ITNT121"
  ,"Tablet Survey"
 
    
];


for (i = 0; i < courseCodes.length;i++) {

    debugAlert("HIDING:\n" + courseBoxFilters[i] + "\n.");

    $( "div.coursebox:contains('" + courseBoxFilters[i] + "')" ).css( "display", "none" );

}


