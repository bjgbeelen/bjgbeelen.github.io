(function(e){function t(t){for(var n,s,r=t[0],c=t[1],l=t[2],h=0,u=[];h<r.length;h++)s=r[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2989:function(e,t,a){},"2fa2":function(e,t,a){},"33af":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),i={class:"topnav",id:"myTopnav"},o=Object(n["h"])("span",null,"NEWS",-1),s=Object(n["h"])("span",null,"MUSIC",-1),r=Object(n["h"])("span",null,"SHOP",-1),c=Object(n["h"])("span",null,"ABOUT",-1);function l(e,t,a,l,d,h){var u=Object(n["x"])("router-link"),b=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("nav",i,[Object(n["h"])(u,{to:"/"},{default:Object(n["D"])((function(){return[o]})),_:1}),Object(n["h"])(u,{to:"/music/"},{default:Object(n["D"])((function(){return[s]})),_:1}),Object(n["h"])(u,{to:"/shop/"},{default:Object(n["D"])((function(){return[r]})),_:1}),Object(n["h"])(u,{to:"/about/"},{default:Object(n["D"])((function(){return[c]})),_:1})]),Object(n["h"])(b)],64)}var d={name:"App",mounted:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.push(e));var t=this.$nextTick;this.$router.afterEach((function(e){t((function(){document.title=e.meta.title}))}))}};a("fad9");d.render=l;var h=d,u=a("6c02"),b=a("8c58"),p=a.n(b),m=a("c7f8"),f=a.n(m),v=a("e63a"),g=a.n(v),j={class:"row"},w=Object(n["h"])("div",{class:"col-1"},null,-1),O=Object(n["h"])("div",{class:"col-4"},[Object(n["h"])("img",{src:p.a,id:"portrait"}),Object(n["h"])("div",{class:"summary"},[Object(n["g"])(" ● Bas Beelen ● Dutch ● Composer ● Pianist ● "),Object(n["h"])("a",{href:"mailto:mail@basbeelen.com"},"mail@basbeelen.com"),Object(n["g"])(" ● ")]),Object(n["h"])("div",{class:"social"},[Object(n["h"])("a",{target:"_blank",href:"https://www.instagram.com/basbeelenpiano/"},[Object(n["h"])("img",{class:"logo",src:f.a})]),Object(n["h"])("a",{target:"_blank",href:"https://www.youtube.com/channel/UC1WWbUwaUyR1cg1hpdo2e1w"},[Object(n["h"])("img",{class:"logo",src:g.a})])])],-1),y={class:"col-6"},I={class:"messages",id:"messages"},k={class:"date"},_=Object(n["g"])("  "),A={class:"title"},q=Object(n["h"])("hr",null,null,-1),x={class:"sections"};function B(e,t,a,i,o,s){return Object(n["q"])(),Object(n["d"])("div",j,[w,O,Object(n["h"])("div",y,[Object(n["h"])("div",I,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(o.messages,(function(e){return Object(n["q"])(),Object(n["d"])("div",{key:e.date,class:"message"},[Object(n["h"])("span",k,Object(n["z"])(e.date),1),_,Object(n["h"])("span",A,Object(n["z"])(e.title),1),q,Object(n["h"])("div",x,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(e.sections,(function(e){return Object(n["q"])(),Object(n["d"])("div",{class:"section",key:e,innerHTML:e},null,8,["innerHTML"])})),128))]),e.video?(Object(n["q"])(),Object(n["d"])("iframe",{key:0,width:"100%",height:"315",src:e.video,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,["src"])):Object(n["e"])("",!0)])})),128))])])])}var D=a("967b"),T={name:"Home",data:function(){return{messages:D}}};T.render=B;var S=T,M=Object(n["G"])("data-v-88270132");Object(n["t"])("data-v-88270132");var P={class:"row"},z=Object(n["h"])("div",{class:"col-1"},null,-1),C=Object(n["h"])("div",{class:"col-5"},[Object(n["h"])("img",{src:p.a,id:"portrait"}),Object(n["h"])("div",{class:"summary"},[Object(n["g"])(" ● Bas Beelen ● Dutch ● Composer ● Pianist ● "),Object(n["h"])("a",{href:"mailto:mail@basbeelen.com"},"mail@basbeelen.com"),Object(n["g"])(" ● ")]),Object(n["h"])("div",{class:"social"},[Object(n["h"])("a",{target:"_blank",href:"https://www.instagram.com/basbeelenpiano/"},[Object(n["h"])("img",{class:"logo",src:f.a})]),Object(n["h"])("a",{target:"_blank",href:"https://www.youtube.com/channel/UC1WWbUwaUyR1cg1hpdo2e1w"},[Object(n["h"])("img",{class:"logo",src:g.a})])])],-1),H={class:"col-5"},U=Object(n["f"])('<div class="section" data-v-88270132> I am a <a href="https://www.linkedin.com/in/bas-beelen-36737ba/" target="_blank" data-v-88270132>professional Data Engineer</a>, father of three daughters, <a href="https://www.youtube.com/watch?v=FFAeJJZnlQA" target="_blank" data-v-88270132>in my thirties</a>, a wood oven pizza baker, <a href="https://www.fightingblindness.org/diseases/best-disease" target="_blank" data-v-88270132>having limited eyesight</a>, a mountain addict and a <a href="https://www.jort.design/digital-painting" target="_blank" data-v-88270132>movie poster subject</a>. And then there is music... </div><div class="section" data-v-88270132> I heard someone mention recently that when we grow older we fall back to the things we did in our youth. We start to better appreciate what we learned in those early years. In my case (n=1), this is true. </div>',2),E={class:"section"},F=Object(n["g"])(" I took classical piano lessons together with my father when I was around 7 years old. For a few years, I was "),V=Object(n["g"])("bribed"),J=Object(n["g"])(" encouraged to continue practicing and get over that hurdle to reach intrinsic motivation to go sit behind the piano. By the time I reached that stage I wanted to broaden my musical horizon and I ventured playing the guitar, acted as singer/songwriter in a pop band and listened to a diverse range of musical genres (and still do) "),N=Object(n["h"])("div",{class:"section"}," Now I'm back at the piano, leveraging the skills I learned in my youth. I compose because I love the creativity, building something new that did not exist before. I also compose because I don't have the patience to study and finish lengthy/challenging pieces, partly caused by this eye disability I referred to above. But it's just two sides of the same coin; There's something magical about blending beautiful harmonies with just a single instrument. And recently, I have started to appreciate that again. ",-1);Object(n["r"])();var R=M((function(e,t){var a=Object(n["x"])("strike");return Object(n["q"])(),Object(n["d"])("div",P,[z,C,Object(n["h"])("div",H,[U,Object(n["h"])("div",E,[F,Object(n["h"])(a,null,{default:M((function(){return[V]})),_:1}),J]),N])])}));a("981f");const W={};W.render=R,W.__scopeId="data-v-88270132";var G=W,L=(a("b0c0"),a("7956")),Q=a.n(L),Y=Object(n["G"])("data-v-d7bfce0e");Object(n["t"])("data-v-d7bfce0e");var $={class:"row"},K=Object(n["h"])("div",{class:"col-1"},null,-1),X=Object(n["h"])("div",{class:"col-5"},[Object(n["h"])("div",{class:"img_container"},[Object(n["h"])("img",{src:Q.a})])],-1),Z={class:"col-5"},ee=Object(n["h"])("div",{class:"header"},"ABRACADABRA SHEET MUSIC",-1),te=Object(n["h"])("ul",null,[Object(n["h"])("li",null,"4 pages, high quality digital copy (PDF)"),Object(n["h"])("li",null,"A4 format (210mm x 297mm)"),Object(n["h"])("li",null,"Personalized for you or someone else")],-1),ae=Object(n["h"])("div",null," If you're interested in the Abracadabra sheet music, or you just want to support what I am up to, you can buy a digital copy by filling in the form below. I'll reach out on how to make the transaction. ",-1),ne=Object(n["h"])("hr",null,null,-1),ie=Object(n["h"])("div",null,[Object(n["g"])("1x Abracadabra Sheet Music (PDF) "),Object(n["h"])("span",null,"€ 5, -")],-1),oe={key:0,class:"error"},se={key:1},re={key:0,class:"check"},ce=Object(n["h"])("div",{class:"thanks"},"Thanks for your interest, I'll get in touch!",-1);Object(n["r"])();var le=Y((function(e,t,a,i,o,s){return Object(n["q"])(),Object(n["d"])("div",$,[K,X,Object(n["h"])("div",Z,[Object(n["h"])("div",null,[ee,te,ae,ne,ie,o.submitted?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("form",{key:0,onSubmit:t[4]||(t[4]=Object(n["F"])((function(){return s.buy&&s.buy.apply(s,arguments)}),["prevent"]))},[Object(n["E"])(Object(n["h"])("input",{type:"text",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.purchaseDetails.name=e}),placeHolder:"Your name"},null,512),[[n["B"],o.purchaseDetails.name]]),Object(n["E"])(Object(n["h"])("input",{type:"text",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.purchaseDetails.email=e}),placeHolder:"Your email address (to send the PDF)"},null,512),[[n["B"],o.purchaseDetails.email]]),Object(n["E"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.purchaseDetails.edition_for=e}),placeHolder:"Edition for (if different from your name)"},null,512),[[n["B"],o.purchaseDetails.edition_for]]),Object(n["h"])("input",{type:"submit",disabled:o.processing,value:"Gimme"},null,8,["disabled"]),o.errorMsg?(Object(n["q"])(),Object(n["d"])("span",oe,Object(n["z"])(o.errorMsg),1)):Object(n["e"])("",!0)],32)),o.submitted?(Object(n["q"])(),Object(n["d"])("div",se,[o.submitted?(Object(n["q"])(),Object(n["d"])("div",re,"✓")):Object(n["e"])("",!0),ce])):Object(n["e"])("",!0)])])])})),de=a("bc3a"),he=a.n(de),ue={name:"Shop",data:function(){return{purchaseDetails:{name:null,email:null,edition_for:null},submitted:!1,processing:!1,errorMsg:""}},methods:{clear:function(){this.submitted=!1,this.purchaseDetails.name=null,this.purchaseDetails.email=null,this.purchaseDetails.edition_for=null},buy:function(){var e=this;this.processing=!0,he.a.post("https://europe-west1-basbeelen-com.cloudfunctions.net/shop",JSON.stringify(this.purchaseDetails),{headers:{"Content-Type":"application/json"}}).then((function(){e.submitted=!0,e.processing=!1,setTimeout(e.clear,5e3)})).catch((function(t){e.errorMsg=t.response.data,setTimeout((function(){e.errorMsg="",e.processing=!1}),5e3)}))}}};a("92f1");ue.render=le,ue.__scopeId="data-v-d7bfce0e";var be=ue,pe=Object(n["G"])("data-v-f497422a");Object(n["t"])("data-v-f497422a");var me={class:"row"},fe=Object(n["f"])('<div class="col-3" data-v-f497422a></div><div class="col-6" data-v-f497422a><div data-v-f497422a> During my 2020 summer holiday I set myself a goal to pick up composing again and write enough material to one day create a full-length album. I&#39;m not there yet, but I came a long way so far. A potential album could look like the list below. The demos are home recorded and not to be confused with how I imagine the end result should sound like. </div><div data-v-f497422a>Album and composition titles are still subject to change.</div><hr data-v-f497422a><div class="header" data-v-f497422a>Abracadabra</div><ol data-v-f497422a><li data-v-f497422a>Ik ben de ochtend <span data-v-f497422a>✓</span></li><li data-v-f497422a> Panorama // <a href="https://youtu.be/xwUH5VjHtfM" target="_blank" data-v-f497422a>demo</a><span data-v-f497422a>✓</span></li><li data-v-f497422a> Vaarwel // <a href="https://youtu.be/rX2qOezLaQI" target="_blank" data-v-f497422a>demo</a><span data-v-f497422a>✓</span></li><li data-v-f497422a>Haverklap <span data-v-f497422a>✓</span></li><li data-v-f497422a> Abracadabra // <a href="https://youtu.be/GhC2B3qsNh0" target="_blank" data-v-f497422a>demo</a><span data-v-f497422a> ✓</span></li><li data-v-f497422a>Voor Lize, de vrolijk zingende eerste<span data-v-f497422a>✓</span></li><li data-v-f497422a>Voor Jonne, de ondeugende tweede<span data-v-f497422a>✓</span></li><li data-v-f497422a> Voor Roos, de deinende derde<span data-v-f497422a><i data-v-f497422a> ✓</i></span></li><li data-v-f497422a> Waas <span data-v-f497422a><i data-v-f497422a>in progress</i></span></li><li data-v-f497422a> Avondritueel // <a href="https://youtu.be/Q7vmKIz-BqI" target="_blank" data-v-f497422a>demo</a><span data-v-f497422a>✓</span></li><li data-v-f497422a>Toevertrouwd <span data-v-f497422a>✓</span></li></ol></div>',2);Object(n["r"])();var ve=pe((function(e,t){return Object(n["q"])(),Object(n["d"])("div",me,[fe])}));a("9bca");const ge={};ge.render=ve,ge.__scopeId="data-v-f497422a";var je=ge,we=[{path:"/",name:"Home",meta:{title:"Bas Beelen | Composer and pianist"},component:S},{path:"/about",name:"About",meta:{title:"Bas Beelen | About"},component:G},{path:"/shop",name:"Shop",meta:{title:"Bas Beelen | Shop"},component:be},{path:"/music",name:"Music",meta:{title:"Bas Beelen | Music"},component:je}],Oe=Object(u["a"])({history:Object(u["b"])(),routes:we}),ye=Oe;Object(n["c"])(h).use(ye).mount("#app")},7956:function(e,t,a){e.exports=a.p+"img/abracadabra-page1.0a65b81e.png"},"8c58":function(e,t,a){e.exports=a.p+"img/portrait.2b1fda58.png"},"92f1":function(e,t,a){"use strict";a("33af")},"967b":function(e){e.exports=JSON.parse('[{"date":"2021.03.14","title":"A Magical Musical Cryptogram","sections":["On an evening in december 2020 an idea struck like lightning and it made me compose a new piece, unlike any of the others I composed before. And while I worked on this new piece, I realized I could eventually also make a video on the process of how this new composition came about.","This video sheds some light on what I did the past 9 months, how an idea can suddenly change the direction you are going with a piece and I touch upon some new stuff that I learned myself during this process."],"video":"https://www.youtube.com/embed/iekyEeLqlYg"},{"date":"2021.03.14","title":"Abracadabra","sections":["It took me a while to find the time to record new work, but it finally happened and I am quite pleased with this new video I just published! I used a completely different approach to get to this one - compared to how the usual ideas lead to something new. The extra constraints I had to work with actually made it a lot of fun, almost like an assignment.","I actually wrote the sheet music along in the process of composing, which  helped a lot in adhering to the constraints. Just for fun to see if I can start earning something with music, I\'m selling a digital personalized copy of the sheet music for anyone who\'s interested in playing the tune, or just wants to support what I\'m doing."],"video":"https://www.youtube.com/embed/GhC2B3qsNh0"},{"date":"2020.10.15","title":"Avondritueel / Evening Ritual","sections":["Another recording of one of my favorite pieces. For a long time, back when I still lived in Amsterdam, this was the (only) piece I kept playing night after night (on my digital piano). It really became like an <i>Evening Ritual</i> to me.","This composition still amazes me, I\'m really proud of it. I recall that the idea for this piece was born at an acoustic upright piano from my brother in law, in their apartment in Amsterdam. They were on holiday, and we were taking care of their cat and plants. There was an opportunity to play at their unique and for me unfamiliar instrument. I find that often these are the occasions that new ideas pop up."],"video":"https://www.youtube.com/embed/Q7vmKIz-BqI"},{"date":"2020.10.14","title":"Vaarwel / Farewell","sections":["I decided to ditch SoundCloud as the home for my recordings. Instead, I\'m sticking with the YouTube channel, to be able to include visuals too. I therefore rerecorded the pieces from early June.","This one was initially known as <i>Paardenbloempluisjes / Dandelion Fluff</i>, but I think the heavy ending doesn\'t really match with this title. So instead, I went for a title closer to what this piece means to me. I\'ve played this piece at my grandfather\'s funeral, as well as at the funeral of my wife\'s grandfather. To me this has become something like a \'positive\' elegy. It\'s a <i>Vaarwel/ Farewell</i>."],"video":"https://www.youtube.com/embed/rX2qOezLaQI"},{"date":"2020.09.17","title":"Panorama","sections":["Since I revealed the first three demo tracks back in June, I became really enthusiastic to finish some pieces that had been lying around for a while. I had never found an ending for them, or perhaps said better, I had never took the time to find an ending.Creativity really got a boost from all the positive reactions and I managed to finish two pieces in the last couple of months. Next to that I have a handful of ideas for new pieces, so all in all it has been quite a productive period.","I\'ve set myself a goal to have material for a complete album by August 2021. According to Spotify that should be at least 10 songs or a minimum of 30 minutes worth of music :-)","The latest composition that I have recorded at home is called <i>Panorama</i>. And this time you can also watch how it came to exist!"],"video":"https://www.youtube.com/embed/xwUH5VjHtfM"}]')},"981f":function(e,t,a){"use strict";a("2fa2")},"9bca":function(e,t,a){"use strict";a("d283")},c7f8:function(e,t,a){e.exports=a.p+"img/instagram.58e40cca.png"},d283:function(e,t,a){},e63a:function(e,t,a){e.exports=a.p+"img/youtube.3cfbc995.png"},fad9:function(e,t,a){"use strict";a("2989")}});
//# sourceMappingURL=app.94e7f647.js.map