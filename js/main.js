"use strict";(function(){var e,t,n,a,s,u,o,r,i,c;a=["amcik","anal","andskota","anus","anus","arschloch","arse","ass","ayir","azzhole","ball","balls","bastard","bate","bitch","bloody","blow","boff","boiolas","bollock","boner","boob","breast","buceta","bugger","bum","butt","cabron","cazzo","chink","chraa","chuj","cipa","clit","cock","coon","crap","cuck","cum","cunt","dam","damn","daygo","dego","dick","dike","dildo","dirsa","dom","dupa","dyke","dyke","dziwka","ejac","enculer","enema","faen","fag","fanny","fart","fat","feces","felch","fitt","fitta","fuck","fudge","gay","god","gook","guiena","hack","handy","hell","helvete","ho","hoe","homo","honkey","hore","hui","injun","jack","jap","jerk","jism","jizz","kanker","kawk","kike","klootzak","knob","knulle","kraut","kunt","kurac","kurwa","kusi","kyrpa","labia","les","lesbian","lesbo","lez","lip","merd","mibun","mofo","mother","muff","muie","mulkku","muschi","nastt","nazi","nepesaurio","nig","nut","orga","paki","pecker","penis","perse","phuk","picka","pierdol*","pillu*","pimmel","pimp","piss","pizda","polack","poon","poop","porn","preteen","prick","pube","puke","pula","pule","puss","pussy","puta","puto","qahbeh","quee","queef","queer","rautenberg","rectum","retard","sadist","scank","schaffer","scheiss","schlampe","schlong","schmuck","screw","scrotum","semen","sex","sharmuta","sharmute","shart","shat","shemale","shipal","shit","shiz","skank","skribz","skurwysyn","slut","smegma","smut","sob","sphencter","spic","spierdalaj","splooge","spunk","suka","teets","teez","teste","testicle","tit","toss","tosser","tranny","turd","twat","vagina","vittu","vulva","wank","wanker","wetback","whore","wop","xx","yed"],n=function e(t,n,a){return $(".results").attr("class","results results--"+a),$(".results__heading").text(t),$(".results__explanation").text(n)},t=function e(t,n){return $(".inbox__subject").text(t),$(".inbox__time").text(n)},i=function e(t){return setTimeout(function(){return $(".results").fadeIn()},t)},r=function e(t){return setTimeout(function(){return $(".inbox").fadeIn()},t)},u=150,s=300,c=(o=function e(t,n){var a,s;return n||(n=window.location.href),t=t.replace(/[\[\]]/g,"\\$&"),(s=(a=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)")).exec(n))?s[2]?decodeURIComponent(s[2].replace(/\+/g," ")):"":null})("subject"),e=function e(){if(null!==c)return $("input").val(c),$(".form__button").trigger("click")},$(document).ready(function(){return $(".form__button").click(function(){var e,s,u,o,c,l,k,p,h;return $(".inbox").fadeOut(150),$(".results").fadeOut(150),""===(p=$("input").val())?setTimeout(function(){return n("Hmm...","You can’t just send nothing.","danger"),i(150)},300):(e=[],c=[],l=p.split(" "),s=("0"+(o=new Date(Date.now())).getHours()).slice(-2),u=("0"+o.getMinutes()).slice(-2),h=s+":"+u,setTimeout(function(){if($.each(a,function(a,s){return $.each(l,function(a,u){var o;if(u.toLowerCase().startsWith(s)&&(c.push(s),o=a+1===l.length&&s===u.toLowerCase()?p:l.slice(0,a).join(" ")+" "+s+"...",e.push(o),e.length))return t(o,h),r(0),n("Uh oh","Does that look right to you?","danger"),i(150)})}),0===e.length)return t(p,h),r(0),n("All clear","That’s a nice looking subject line!","success"),i(150)},300),k=encodeURIComponent(p),$(".copy__url").text("https://sensitivesubjects.com?subject="+k))}),e()})}).call(void 0);