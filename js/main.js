"use strict";(function(){
// List of dirty words
var a;a=["amcik","anal","andskota","anus","anus","arschloch","arse","ass","ayir","azzhole","ball","balls","bastard","bate","bitch","bloody","blow","boff","boiolas","bollock","boner","boob","breast","buceta","bugger","bum","butt","cabron","cazzo","chink","chraa","chuj","cipa","clit","cock","coon","crap","cuck","cum","cunt","dam","damn","daygo","dego","dick","dike","dildo","dirsa","dom","dupa","dyke","dyke","dziwka","ejac","enculer","enema","faen","fag","fanny","fart","fat","feces","felch","fitt","fitta","fuck","fudge","gay","god","gook","guiena","hack","handy","hell","helvete","ho","hoe","homo","honkey","hore","hui","injun","jack","jap","jerk","jism","jizz","kanker","kawk","kike","klootzak","knob","knulle","kraut","kunt","kurac","kurwa","kusi","kyrpa","labia","les","lesbian","lesbo","lez","lip","merd","mibun","mofo","mother","muff","muie","mulkku","muschi","nastt","nazi","nepesaurio","nig","nut","orga","paki","pecker","penis","perse","phuk","picka","pierdol*","pillu*","pimmel","pimp","piss","pizda","polack","poon","poop","porn","preteen","prick","pube","puke","pula","pule","puss","pussy","puta","puto","qahbeh","quee","queef","queer","rautenberg","rectum","retard","sadist","scank","schaffer","scheiss","schlampe","schlong","schmuck","screw","scrotum","semen","sex","sharmuta","sharmute","shemale","shipal","shit","shiz","skank","skribz","skurwysyn","slut","smegma","smut","sob","sphencter","spic","spierdalaj","splooge","spunk","suka","teets","teez","teste","testicle","tit","toss","tosser","tranny","turd","twat","vagina","vittu","vulva","wank","wanker","wetback","whore","wop","xx","yed"],$(document).ready(function(){
// When user clicks
return $("button").click(function(){var u,e;// Remove any old results
// Check each dirty word
return $(".results__list").empty(),// Take the input
e=$("input").val(),// and split it into words at each space.
u=e.split(" "),$.each(a,function(e,t){
// against each input word
return $.each(u,function(e,a){var s;// to see if the input word starts with it
if(a.toLowerCase().startsWith(t))
// Give an example of the subject line gone wrong
return s=u.slice(0,e).join(" ")+" "+t+"...",$(".results__list").append($("<li>").append(s))})})})})}).call(void 0);
//# sourceMappingURL=main.js.map