(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{45:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var i,r,a=t(1),o=t(18),c=t.n(o),s=t(10),l=t(8),d=t(14),m=t(4),b=t(5),j=t(9),p=t(0),h=b.b.nav(i||(i=Object(m.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function x(){var n=Object(a.useState)(!1),e=Object(d.a)(n,2),t=e[0],i=e[1];return Object(p.jsxs)(h,{children:[Object(p.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(p.jsx)(j.h,{})}),Object(p.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(p.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(p.jsx)(j.c,{})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}var g,u,f,_=b.b.div(r||(r=Object(m.a)(["\nmax-width: 500px;\nmargin: 0 auto;\nfont-size: 1.8rem;\nline-height: 1.8rem;\n@media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n}\n"]))),O=function(n){var e=n.children;return Object(p.jsx)(_,{className:"para",children:Object(p.jsx)("p",{children:e})})},v=b.b.div(g||(g=Object(m.a)(["\n    margin-top: 2rem;\n    .button{\n        font-size: 2.2rem;\n        background-color: ",";\n        padding: 0.7em 2em;\n        border-radius: 8px;\n        display: inline-block;\n        border: 2px solid var(--gray-1);\n        color: ",";\n    }\n    @media only screen and (min-width: 768px){\n        .button{\n            font-size: 1.8rem;\n        }\n    }\n\n\n"])),(function(n){return n.outline?"transparent":"var(--gray-1)"}),(function(n){return n.outline?"var(--gray-)":"black"})),w=function(n){var e=n.btnLink,t=void 0===e?"test":e,i=n.btnText,r=void 0===i?"Test":i,a=n.outline,o=void 0!==a&&a;return Object(p.jsx)(v,{outline:o,className:"button-wrapper",children:Object(p.jsx)(s.b,{className:"button",to:t,children:r})})},y=t.p+"static/media/aboutImg.c7870f55.png",k=b.b.div(u||(u=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function N(n){var e=n.title,t=void 0===e?"Title":e,i=n.items,r=void 0===i?["HTML","CSS"]:i;return Object(p.jsxs)(k,{children:[Object(p.jsx)("h1",{className:"title",children:t}),Object(p.jsx)("div",{className:"items",children:r.map((function(n,e){return Object(p.jsx)("div",{className:"item",children:Object(p.jsx)(O,{children:n})},e)}))})]})}var I,z,S,B,A,C=b.b.div(f||(f=Object(m.a)(["\npadding: 10rem 0;\n.contactBanner__wrapper{\n    background-color: var(--deep-dark);\n    border-radius:12px;\n    padding: 5rem 0rem;\n    text-align: center;\n}\n.contactBanner__heading{\n    font-size:4rem;\n    margin-bottom: 2rem;\n}\n@media only screen and (max-width: 768px){\n    .contactBanner__heading{\n        font-size:2.8rem;\n    }\n}\n\n"]))),M=function(){return Object(p.jsx)(C,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(p.jsx)(O,{children:" Have a project in mind"}),Object(p.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(p.jsx)(w,{btnText:"Contact Now",btnLink:"/contact"})]})})})},R=b.b.div(I||(I=Object(m.a)(["\n  padding: 20rem 0 10rem 0;\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"]))),D=function(){return Object(p.jsxs)(R,{children:[Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"top-section",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(p.jsx)("span",{children:"Raquel Muriega"})]}),Object(p.jsx)("h2",{className:"about__heading",children:"A freelance Web Developer"}),Object(p.jsx)("div",{className:"about__info",children:Object(p.jsxs)(O,{children:["I am from Buenos Aires, Argentina. A place of beauty and nature. I love art and design. I always try to design stuff with my unique point of view.",Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),"Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot."]})}),Object(p.jsx)(w,{btnText:"Download CV",btnLink:"#"})]}),Object(p.jsx)("div",{className:"right",children:Object(p.jsx)("img",{src:y,alt:"Raquel img"})})]}),Object(p.jsxs)("div",{className:"about__info__items",children:[Object(p.jsxs)("div",{className:"about__info__item",children:[Object(p.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(p.jsx)(N,{title:"School",items:["Marco Sastre, Tigre, Buenos Aires"]}),Object(p.jsx)(N,{title:"Bootcamp",items:["ADA, Buenos Aires, Argentina"]}),Object(p.jsx)(N,{title:"Bootcamp",items:["CoderHouse, Buenos Aires, Argentina"]})]}),Object(p.jsxs)("div",{className:"about__info__item",children:[Object(p.jsx)("h1",{className:"about__info__heading",children:"My Skill"}),Object(p.jsx)(N,{title:"Frontend",items:["HTML","CSS","JS","REACT"]}),Object(p.jsx)(N,{title:"Design",items:["Photoshop","After Effects"]})]}),Object(p.jsxs)("div",{className:"about__info__item",children:[Object(p.jsx)("h1",{className:"about__info__heading",children:"Experiences"}),Object(p.jsx)(N,{title:"2020-2021",items:["Id\xedlica Digital"]}),Object(p.jsx)(N,{title:"2019-2020",items:["Freelance Developer"]})]})]})]}),Object(p.jsx)(M,{})]})},T=b.b.form(z||(z=Object(m.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"]))),L=function(){var n=Object(a.useState)(""),e=Object(d.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(""),o=Object(d.a)(r,2),c=o[0],s=o[1],l=Object(a.useState)(""),m=Object(d.a)(l,2),b=m[0],j=m[1];return Object(p.jsx)(T,{children:Object(p.jsxs)("form",{children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("label",{htmlFor:"name",children:["Your name",Object(p.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return i(n.target.value)}})]})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("label",{htmlFor:"email",children:["Your email",Object(p.jsx)("input",{type:"text",id:"email",name:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("label",{htmlFor:"message",children:["Your message",Object(p.jsx)("textarea",{type:"text",id:"message",name:"message",value:b,onChange:function(n){return j(n.target.value)}})]})}),Object(p.jsx)("button",{type:"submit",children:"Send"})]})})},P=b.b.div(S||(S=Object(m.a)(["\n    padding: 2rem;\n    background-color: var(--deep-dark);\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    border-radius:8px;\n    margin-bottom: 2rem;\n    .icon{\n        color: var(--white);\n        background-color: var(--gray-2);\n        padding: 1.3rem;\n        align-items:center;\n        justify-content: center;\n        border-radius:50%\n    }\n    svg{\n        width: 3.5rem;\n    }\n"]))),E=function(n){var e=n.icon,t=void 0===e?Object(p.jsx)(j.i,{}):e,i=n.text,r=void 0===i?"This is an info":i;return Object(p.jsxs)(P,{children:[Object(p.jsx)("div",{className:"icon",children:t}),Object(p.jsx)("div",{className:"info",children:Object(p.jsx)(O,{children:r})})]})},F=b.b.div(B||(B=Object(m.a)(["\ntext-align: center;\np{\n    font-family: 'RobotoMono Regular';\n    font-size:2rem;\n}\nh2{\n    font-family: 'Montserrat Bold';\n    font-size:6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n}\n@media only screen and (max-width:768px){\n    p{\n        font-size:1.2rem;\n    }\n    h2{\n        font-size:3.6rem;\n    }\n}\n"])));function H(n){var e=n.subheading,t=void 0===e?"This is subheading":e,i=n.heading,r=void 0===i?"This is heading":i;return Object(p.jsxs)(F,{children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("h2",{children:r})]})}var q=b.b.div(A||(A=Object(m.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function G(){return Object(p.jsx)(q,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(H,{heading:"contact",subheading:"get in touch"}),Object(p.jsxs)("div",{className:"contactSection__wrapper",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)(E,{icon:Object(p.jsx)(j.g,{}),text:"+1158849980"}),Object(p.jsx)(E,{icon:Object(p.jsx)(j.f,{}),text:"muriegar@gmail.com"}),Object(p.jsx)(E,{text:"BS.AS, Argentina"})]}),Object(p.jsx)("div",{className:"right",children:Object(p.jsx)(L,{})})]})]})})}var K,Y=t.p+"static/media/map.eeb6c37b.png",V=b.b.div(K||(K=Object(m.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),Y);function W(){return Object(p.jsx)(V,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"map__card",children:[Object(p.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(p.jsx)(O,{children:"Tigre, Buenos Aires, Argentina"}),Object(p.jsx)("a",{className:"map__card__link",href:"https://www.google.com.ar/maps/place/Tigre,+Provincia+de+Buenos+Aires/@-34.4267775,-58.5933548,14z/data=!3m1!4b1!4m5!3m4!1s0x95bca5a2d0ddb9b1:0x2c1a974c67cba1e4!8m2!3d-34.425087!4d-58.5796585",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}var J,Q=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(G,{}),Object(p.jsx)(W,{})]})})},U=t.p+"static/media/perfil.59801cf8.png",X=(t(45),t.p+"static/media/arrow.37c411bb.png"),Z=b.b.div(J||(J=Object(m.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: rem;\n      }\n    }\n  }\n"])));function $(){return Object(p.jsx)(Z,{children:Object(p.jsx)("div",{className:"hero",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("h1",{className:"hero__heading",children:[Object(p.jsx)("span",{children:"Hello, This is"}),Object(p.jsx)("span",{className:"hero__name",children:"Raquel Muriega"})]}),Object(p.jsx)("div",{className:"hero__img",children:Object(p.jsx)("img",{src:U,alt:""})}),Object(p.jsxs)("div",{className:"hero__info",children:[Object(p.jsx)(O,{children:"I'm working as a freelance web designer and developer for 2 years. I love to design and make new web experiencies for the people."}),Object(p.jsx)(w,{btnText:"see my works",btnLink:"/projects"})]}),Object(p.jsxs)("div",{className:"hero__social",children:[Object(p.jsxs)("div",{className:"hero__social__indicator",children:[Object(p.jsx)("p",{children:"Follow"}),Object(p.jsx)("img",{src:X,alt:"icon"})]}),Object(p.jsx)("div",{className:"hero__social__text",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://github.com/ReyMga",target:"_blank",rel:"noreferrer",children:"GH"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.linkedin.com/in/raquel-muriega-9479491a9/",target:"_blank",rel:"noreferrer",children:"LI"})})]})})]}),Object(p.jsxs)("div",{className:"hero__scrollDown",children:[Object(p.jsx)("p",{children:"Scroll"}),Object(p.jsx)("img",{src:X,alt:"ScrollDown Arrow"})]})]})})})}var nn,en,tn,rn=t.p+"static/media/perfil1.3d4670ec.png",an=b.b.div(nn||(nn=Object(m.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {59+\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"]))),on=function(){return Object(p.jsx)(an,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"aboutSection__left",children:[Object(p.jsx)(H,{className:"section-title",subheading:"Let me introduce my self ",heading:"About me"}),Object(p.jsx)(O,{children:"I am a Frontend developer, I consider myself a creative, proactive, organized person, eager to continue growing in the IT area. With knowledge of technologies: HTML, CSS, JAVASCRIPT, REACT JS."}),Object(p.jsxs)("div",{className:"aboutSection__buttons",children:[Object(p.jsx)(w,{btnLink:"/projects",btnText:"Works"}),Object(p.jsx)(w,{btnLink:"/about",btnText:"Read More",outline:!0})]})]}),Object(p.jsx)("div",{className:"aboutSection__right",children:Object(p.jsx)("img",{src:rn,alt:"aboutme"})})]})})},cn=b.b.div(en||(en=Object(m.a)(["\n    text-align: center;\n    .servicesItem__icon{\n        svg{\n            width: 3rem;\n        }\n    }\n\n    .servicesItem__title{\n        font-size: 2.5rem;\n        font-family: 'Montserrat SemiBold';\n    }\n    .para{\n        margin-top: 2rem;\n    }\n\n"])));function sn(n){var e=n.icon,t=void 0===e?Object(p.jsx)(j.e,{}):e,i=n.title,r=void 0===i?"web design":i,a=n.desc,o=void 0===a?"lorem ipsum dolor sit amet, consectetur adip":a;return Object(p.jsxs)(cn,{children:[Object(p.jsx)("div",{className:"servicesItem__icon",children:t}),Object(p.jsx)("div",{className:"servicesItem__title",children:r}),Object(p.jsx)(O,{children:o})]})}var ln,dn=b.b.div(tn||(tn=Object(m.a)(["\n    padding:10rem 0;\n    .services__allItems{\n        display: flex;\n        gap: 10rem;\n        justify-content: space-between;\n        margin-top: 5rem;\n    }\n    @media only screen and (max-width: 768px) {\n        .services__allItems{\n            flex-direction: column;\n            max-width:350px;\n            margin: 0 auto;\n            margin-top: 5rem;\n            gap: 5rem;\n        }\n    }\n"]))),mn=function(){return Object(p.jsx)(dn,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(H,{heading:"Services",subheading:"what i will do for you"}),Object(p.jsxs)("div",{className:"services__allItems",children:[Object(p.jsx)(sn,{icon:Object(p.jsx)(j.e,{}),title:"Website Design",desc:"I do ui/ux design for the website that helps website to get a unique look"}),Object(p.jsx)(sn,{icon:Object(p.jsx)(j.d,{}),title:"Frontend Development",desc:"I develop websites with good performance and excellent quality"})]})]})})},bn=t(55),jn=t(52),pn=t(54),hn=t(51),xn=t.p+"static/media/proyecto1.c5dc4a2f.PNG",gn=b.b.div(ln||(ln=Object(m.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function un(n){var e=n.img,t=void 0===e?xn:e,i=n.title,r=void 0===i?"Project Name":i,a=n.desc,o=void 0===a?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":a;return Object(p.jsxs)(gn,{children:[Object(p.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(p.jsx)("img",{src:t,alt:"project img"})}),Object(p.jsxs)("div",{className:"projectItem__info",children:[Object(p.jsx)(s.b,{to:"#",children:Object(p.jsx)("h3",{className:"projectItem__title",children:r})}),Object(p.jsx)("p",{className:"projectItem__desc",children:o})]})]})}t(46);var fn,_n=t(56),On=t.p+"static/media/proyecto6.adf7a3b2.PNG",vn=t.p+"static/media/proyect2.4871135b.PNG",wn=t.p+"static/media/proyecto3.f3513ddf.PNG",yn=t.p+"static/media/proyecto4.90b0cdb4.PNG",kn=t.p+"static/media/proyecto5.eec3936c.PNG",Nn=[{id:Object(_n.a)(),name:"Memes Aplication",desc:"Application that allows the user to create personalized memes.",img:On},{id:Object(_n.a)(),name:"Comics Factory",desc:"Application that allows you to see different types of comics.",img:xn},{id:Object(_n.a)(),name:"Movies App",desc:"Application that shows all the movies including the movies that are in premiere.",img:vn},{id:Object(_n.a)(),name:"Braking Bad Phrases",desc:"App developed that presents random phrases from the famous Braking Bad series.",img:wn},{id:Object(_n.a)(),name:"To-Do List",desc:"Application developed so that the user can create their list of tasks in a simple way.",img:yn},{id:Object(_n.a)(),name:"Matcheadas Game",desc:"In this game you can enjoy and play as many times as you want. Your objective is to find a match of 3 or more of the same items to accumulate points in a given period of time.",img:kn}];pn.a.use([hn.a]);var In=b.b.div(fn||(fn=Object(m.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function zn(){return Object(p.jsx)(In,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(H,{subheading:"some of my recent works",heading:"Projects"}),Object(p.jsx)("div",{className:"projects__allItems",children:Object(p.jsx)(bn.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:Nn.map((function(n,e){if(!(e>=6))return Object(p.jsx)(jn.a,{children:Object(p.jsx)(un,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})}var Sn,Bn=t(53),An=t(57),Cn=[{id:1,name:"Ana Gonz\xe1lez",title:"CEO",org:"WEB CIFAR",desc:"Raquel is a person dedicated to her work. With many skills for the design and development of web pages."},{id:2,name:"Gustavo S\xe1nchez",title:"Co-founder",org:"Kreetive",desc:"Really amazing communication skills. Always understand what I am trying to achieve.Really hard-working person. Deliver the work as promised. Planning to work more with this person."}],Mn=b.b.div(Sn||(Sn=Object(m.a)(["\n  overflow-x: hidden;\n  padding: 10rem 0;\n  text-align: center;\n  .testimonial__wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .testimonial__info {\n    width: 100%;\n    height: fit-content;\n    padding: 3rem;\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    margin-top: 5rem;\n  }\n  .testimonial__desc {\n    .para {\n      text-align: center;\n    }\n  }\n  .testimonial__name {\n    margin-top: 4rem;\n    font-family: 'Montserrat Bold';\n    font-size: 2.2rem;\n  }\n  .testimonial__title {\n    font-size: 1.6rem;\n    margin-top: 0.3rem;\n  }\n  .arrows {\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg {\n      width: 30px;\n      pointer-events: none;\n    }\n    .next,\n    .prev {\n      margin: 0 0.5rem;\n      width: fit-content;\n      background-color: var(--deep-dark);\n      padding: 0.5rem 2rem;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n  }\n  .fade-enter {\n    opacity: 0;\n    transform: scale(0.96);\n    z-index: 1;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 250ms ease-in;\n    transition-property: transform, opacity;\n    z-index: 1;\n  }\n  .fade-exit {\n    transform: scale(1);\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transform: scale(0.96);\n    transition: 200ms ease-in;\n    transition-property: transform, opacity;\n  }\n"])));function Rn(){var n=Object(a.useState)(0),e=Object(d.a)(n,2),t=e[0],i=e[1],r=Cn[t];function o(){i(t>=Cn.length-1?0:function(n){return n+1})}function c(){i(0===t?Cn.length-1:function(n){return n-1})}return Object(p.jsx)(Mn,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(H,{subheading:"see what our clients say about us",heading:"Testimonials"}),Object(p.jsx)("div",{className:"testimonial__wrapper",children:Object(p.jsx)(Bn.a,{component:null,children:Object(p.jsx)(An.a,{timeout:300,classNames:"fade",children:Object(p.jsxs)("div",{className:"testimonial__info",children:[Object(p.jsx)("div",{className:"testimonial__desc",children:Object(p.jsx)(O,{children:r.desc})}),Object(p.jsx)("h2",{className:"testimonial__name",children:r.name}),Object(p.jsxs)("p",{className:"testimonial__title",children:[r.title,", ",Object(p.jsx)("br",{})," ",r.org]})]})},r.id)})}),Object(p.jsxs)("div",{className:"arrows",children:[Object(p.jsx)("div",{className:"prev",onClick:c,role:"button",tabIndex:0,onKeyDown:c,children:Object(p.jsx)(j.a,{})}),Object(p.jsx)("div",{className:"next",onClick:o,role:"button",tabIndex:0,onKeyDown:o,children:Object(p.jsx)(j.b,{})})]})]})})}var Dn,Tn,Ln=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)($,{}),Object(p.jsx)(on,{}),Object(p.jsx)(mn,{}),Object(p.jsx)(zn,{}),Object(p.jsx)(Rn,{}),Object(p.jsx)(M,{})]})},Pn=b.b.div(Dn||(Dn=Object(m.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function En(){var n=Object(a.useState)(""),e=Object(d.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(Nn),o=Object(d.a)(r,2),c=o[0],s=o[1];Object(a.useEffect)((function(){""!==t&&s((function(){return Nn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(Pn,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(H,{heading:"Projects",subheading:"some of my recent works"}),Object(p.jsx)("div",{className:"projects__searchBar",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),i(n.target.value),!n.target.value.length>0&&s(Nn)},placeholder:"Project Name"}),Object(p.jsx)(j.j,{className:"searchIcon"})]})}),Object(p.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(p.jsx)(un,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}var Fn,Hn=b.b.div(Tn||(Tn=Object(m.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function qn(n){var e=n.heading,t=void 0===e?"Col Heading":e,i=n.links,r=void 0===i?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:i;return Object(p.jsxs)(Hn,{children:[Object(p.jsx)("h2",{className:"heading",children:t}),Object(p.jsx)("ul",{children:r.map((function(n,e){return Object(p.jsx)("li",{children:"Link"===n.type?Object(p.jsx)(s.b,{to:n.path,children:n.title}):Object(p.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var Gn,Kn=b.b.div(Fn||(Fn=Object(m.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"]))),Yn=function(){return Object(p.jsxs)(Kn,{children:[Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"footer__col1",children:[Object(p.jsx)("h1",{className:"footer_col1__title",children:"Raquel Muriega"}),Object(p.jsx)(O,{children:"A freelance web designer and developer from Buenos Aires, Argentina. I always make websites that have unique design and also has a good performance rate."})]}),Object(p.jsx)("div",{className:"footer__col2",children:Object(p.jsx)(qn,{heading:"important Links",links:[{title:"Home",path:"/",type:"Link"},{title:"About",path:"/about",type:"Link"},{title:"Projects",path:"/projects",type:"Link"},{title:"Contact",path:"/contact",type:"Link"}]})}),Object(p.jsx)("div",{className:"footer__col3",children:Object(p.jsx)(qn,{heading:"Contact Info",links:[{title:"+1158849980",path:"tel: +1158849980"},{title:"muriegar@gmail.com",path:"mailto:muriegar@gmail.com"},{title:"BS.AS Tigre, Argentina",path:"https://www.google.com/maps/place/Tigre,+Provincia+de+Buenos+Aires/@-34.4267775,-58.5933548,14z/data=!3m1!4b1!4m5!3m4!1s0x95bca5a2d0ddb9b1:0x2c1a974c67cba1e4!8m2!3d-34.425087!4d-58.5796585"}]})}),Object(p.jsx)("div",{className:"footer__col4",children:Object(p.jsx)(qn,{heading:"Social Links",links:[{title:"Linkedin",path:"https://www.linkedin.com/in/raquel-muriega-9479491a9/"}]})})]}),Object(p.jsx)("div",{className:"copyright",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(O,{children:["\xa9 2021 - Raquel Muriega | Designed By"," ",Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://webmuriega.com",children:"web Mga"})," "]})})})]})},Vn=function(){var n=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]),null};function Wn(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(x,{}),Object(p.jsx)(Vn,{}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/about",children:Object(p.jsx)(D,{})}),Object(p.jsx)(l.a,{path:"/contact",children:Object(p.jsx)(Q,{})}),Object(p.jsx)(l.a,{path:"/projects",children:Object(p.jsx)(En,{})}),Object(p.jsx)(l.a,{path:"/",children:Object(p.jsx)(Ln,{})})]}),Object(p.jsx)(Yn,{})]})})}var Jn,Qn=Object(b.a)(Gn||(Gn=Object(m.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Un=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Xn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Zn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",$n=Object(b.a)(Jn||(Jn=Object(m.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n"])),Un,Xn,Zn);c.a.render(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Qn,{}),Object(p.jsx)($n,{}),Object(p.jsx)(Wn,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e863f8bb.chunk.js.map