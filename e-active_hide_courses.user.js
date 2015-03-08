// ==UserScript==
// @name        e-active_hide_courses
// @namespace   e-active_hide_courses
// @include     http://eactive.cti.ac.za/
// @version     2
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @downloadURL https://github.com/JackRough/e-active-hide-courses/raw/master/e-active_hide_courses.user.js
// ==/UserScript==


var DEBUG_ALERTS = false;

function debugAlert(message) {
    if (DEBUG_ALERTS) {
        alert("e-active_hide_courses\n\n" + message);
    }
}

debugAlert("Start");

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
    ,"Career Support"
    ,"Tablet Survey"
    ,"CTI Alumni"
    ,"CTI Letters"
    ,"CTI Policies"
    ,"CTI Tablet"
    ,"CTI Newsletters"
	,"Harvard Referencing Method"
	,"Cape Town IT Students"
];

debugAlert("STOP");

warningElement = document.createElement("p");
warningElement.innerHTML = "<p> FILTERS:&nbsp " + courseBoxFilters.join(",&nbsp ") + "</p>";

beforeElement = document.getElementById("frontpage-course-list").firstChild.nextSibling;

beforeElement.parentElement.insertBefore(warningElement, beforeElement );



debugAlert("Starting hide");

for (i = 0; i < courseBoxFilters.length;i++) {

    debugAlert("HIDING:\n" + courseBoxFilters[i] + "\n.");

    $("div.coursebox:contains('" + courseBoxFilters[i] + "')" ).css("display", "none");
    
}


debugAlert("FINISHED");
