import React from 'react';


function titleBreak(title) {
    if(title.length > 100){
        return title.substr(0,100) + "...";
    } else {
        return title
    }

}
// function titleBreak(title) {
//     if(title.length < 100){
//      return console.log(title);
//
// } else if(title.length > 100) {
//     return console.log(title.substr(0,100) + "...");
// }}
//
// titleBreak("aljdllaskdnglskjdobiajweltkajsofpbiajs;lsknrt;aposdgiuja;knetpopainwepijapsoekpdobjmpfcmpobsporeptoakwepjmgpzfsoxkbpzosdri-taopwkerptasfpboi")
export default titleBreak;