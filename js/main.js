"use strict";(function(){var e,t,n,u,a,s,o,r,i,c,l,k;a=["amcik","anal","andskota","anus","anus","arschloch","arse","ass","ayir","azzhole","ball","balls","bastard","bate","bitch","bloody","blow","boff","boiolas","bollock","boner","boob","breast","buceta","bugger","bum","butt","cabron","cazzo","chink","chraa","chuj","cipa","clit","cock","coon","crap","cuck","cum","cunt","dam","damn","daygo","dego","dick","dike","dildo","dirsa","dom","dupa","dyke","dyke","dziwka","ejac","enculer","enema","faen","fag","fanny","fart","fat","feces","felch","fitt","fitta","fuck","fudge","gay","god","gook","guiena","hack","handy","hell","helvete","ho","hoe","homo","honkey","hore","hui","injun","jack","jap","jerk","jism","jizz","kanker","kawk","kike","klootzak","knob","knulle","kraut","kunt","kurac","kurwa","kusi","kyrpa","labia","les","lesbian","lesbo","lez","lip","merd","mibun","mofo","mother","muff","muie","mulkku","muschi","nastt","nazi","nepesaurio","nig","nut","orga","paki","pecker","penis","perse","phuk","picka","pierdol*","pillu*","pimmel","pimp","piss","pizda","polack","poon","poop","porn","preteen","prick","pube","puke","pula","pule","puss","pussy","puta","puto","qahbeh","quee","queef","queer","rautenberg","rectum","retard","sadist","scank","schaffer","scheiss","schlampe","schlong","schmuck","screw","scrotum","semen","sex","sharmuta","sharmute","shart","shat","shemale","shipal","shit","shiz","skank","skribz","skurwysyn","slut","smegma","smut","sob","sphencter","spic","spierdalaj","splooge","spunk","suka","teets","teez","teste","testicle","tit","toss","tosser","tranny","turd","twat","vagina","vittu","vulva","wank","wanker","wetback","whore","wop","xx","yed"],u=function e(t,n,u){return $(".results").attr("class","results results--"+u),$(".results__heading").text(t),$(".results__explanation").text(n)},n=function e(t,n){return $(".inbox__subject").text(t),$(".inbox__time").text(n)},r="Do you love analyzing subject lines?",l=function e(t){return setTimeout(function(){return $(".results").fadeIn()},t)},c=function e(t){return setTimeout(function(){return $(".inbox").fadeIn()},t)},o=150,s=300,k=(i=function e(t,n){var u,a;return n||(n=window.location.href),t=t.replace(/[\[\]]/g,"\\$&"),(a=(u=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)")).exec(n))?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null})("subject"),e=function e(){if(null!==k)return $("input").val(k),$("#test-button").trigger("click")},t=function e(t){return navigator.clipboard.writeText(t)},$(document).ready(function(){return $("#test-button").click(function(){var e,s,o,r,i,k,p,h,f,b;return $(".inbox").fadeOut(150),$(".results").fadeOut(150),""===(f=$("input").val())?setTimeout(function(){return u("Hmm...","You can’t just send nothing.","danger"),l(150)},300):(e=[],i=[],p=f.split(" "),s=("0"+(r=new Date(Date.now())).getHours()).slice(-2),o=("0"+r.getMinutes()).slice(-2),b=s+":"+o,setTimeout(function(){if($.each(a,function(t,a){return $.each(p,function(t,s){var o;if(s.toLowerCase().startsWith(a)&&(i.push(a),o=t+1===p.length&&a===s.toLowerCase()?f:p.slice(0,t).join(" ")+" "+a+"...",e.push(o),e.length))return n(o,b),c(0),u("Uh oh","Does that look right to you?","danger"),l(150)})}),0===e.length)return n(f,b),c(0),u("All clear","That’s a nice looking subject line!","success"),l(150)},300),h=encodeURIComponent(f),t(k="https://sensitivesubjects.com?subject="+h))}),e(),$("#example-button").click(function(){return $(".form__input").val(r),$("#test-button").trigger("click")}),$("#copy-button").click(function(){return $(".results").fadeOut(150),setTimeout(function(){return u("Copied","Share the URL to show someone else your results","neutral"),l(150)},150)})})}).call(void 0);