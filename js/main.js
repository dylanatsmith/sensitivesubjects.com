"use strict";(function(){var e;e=["amcik","anal","andskota","anus","anus","arschloch","arse","ass","ayir","azzhole","ball","balls","bastard","bate","bitch","bloody","blow","boff","boiolas","bollock","boner","boob","breast","buceta","bugger","bum","butt","cabron","cazzo","chink","chraa","chuj","cipa","clit","cock","coon","crap","cuck","cum","cunt","dam","damn","daygo","dego","dick","dike","dildo","dirsa","dom","dupa","dyke","dyke","dziwka","ejac","enculer","enema","faen","fag","fanny","fart","fat","feces","felch","fitt","fitta","fuck","fudge","gay","god","gook","guiena","hack","handy","hell","helvete","ho","hoe","homo","honkey","hore","hui","injun","jack","jap","jerk","jism","jizz","kanker","kawk","kike","klootzak","knob","knulle","kraut","kunt","kurac","kurwa","kusi","kyrpa","labia","les","lesbian","lesbo","lez","lip","merd","mibun","mofo","mother","muff","muie","mulkku","muschi","nastt","nazi","nepesaurio","nig","nut","orga","paki","pecker","penis","perse","phuk","picka","pierdol*","pillu*","pimmel","pimp","piss","pizda","polack","poon","poop","porn","preteen","prick","pube","puke","pula","pule","puss","pussy","puta","puto","qahbeh","quee","queef","queer","rautenberg","rectum","retard","sadist","scank","schaffer","scheiss","schlampe","schlong","schmuck","screw","scrotum","semen","sex","sharmuta","sharmute","shemale","shipal","shit","shiz","skank","skribz","skurwysyn","slut","smegma","smut","sob","sphencter","spic","spierdalaj","splooge","spunk","suka","teets","teez","teste","testicle","tit","toss","tosser","tranny","turd","twat","vagina","vittu","vulva","wank","wanker","wetback","whore","wop","xx","yed"],$(document).ready(function(){return $("button").click(function(){var a,t,s,o,n,i,u;if(i=$("input").val(),n=i.split(" "),a=[],t=("0"+(o=new Date(Date.now())).getHours()).slice(-2),s=("0"+o.getMinutes()).slice(-2),u=t+":"+s,$.each(e,function(e,t){return $.each(n,function(e,s){var o;if(s.toLowerCase().startsWith(t)&&(o=n.slice(0,e).join(" ")+" "+t+"...",a.push(o),a.length))return $(".results__heading").text("Uh oh"),$(".results__explanation").text("You might have a problem"),$(".inbox").fadeIn(),$(".inbox__subject").text(o),$(".inbox__time").text(u)})}),console.log(a),0===a.length)return $(".results__heading").text("You good"),$(".results__explanation").text("Everything looks fine"),$(".inbox").fadeIn(),$(".inbox__subject").text(i),$(".inbox__time").text(u)})})}).call(void 0);