(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9793],{83461:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trading/margin-loans",function(){return a(93028)}])},91515:function(e,t,a){"use strict";var n=a(8014),i=a(56168),s=a(62044),r=a(46834),l=12,c=[{range:"$1,000,000 +",baseRate:"- ".concat(2.25.toFixed(2),"%"),effectiveRate:"".concat(9.75.toFixed(2),"%")},{range:"$500,000 - $999,999",baseRate:"- ".concat(1.65.toFixed(2),"%"),effectiveRate:"".concat(10.35.toFixed(2),"%")},{range:"$250,000 - $499,999",baseRate:"+ ".concat(.25.toFixed(2),"%"),effectiveRate:"".concat(12.25.toFixed(2),"%")},{range:"$100,000 - $249,999",baseRate:"+ ".concat(.5.toFixed(2),"%"),effectiveRate:"".concat(12.5.toFixed(2),"%")},{range:"$50,000 - $99,999",baseRate:"+ ".concat(1..toFixed(2),"%"),effectiveRate:"".concat(13..toFixed(2),"%")},{range:"$25,000 - $49,999",baseRate:"+ ".concat(1.5.toFixed(2),"%"),effectiveRate:"".concat(13.5.toFixed(2),"%")},{range:"$0 - $24,999",baseRate:"+ ".concat(1.75.toFixed(2),"%"),effectiveRate:"".concat(13.75.toFixed(2),"%")}],d="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-ft-slate py-3",o="text-base text-ft-slate py-3 border-b border-solid border-grayish-blue",A="text-xs text-dark-grayish-blue my-4";t.ZP=function(){var e=(0,s.Z)("margin-rates-table"),t=e.t,a=e.lang;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"grid-rows-8 grid grid-cols-12",children:[(0,n.jsx)("div",{className:"".concat(d," col-span-4"),children:t("dollar_range")}),(0,n.jsx)("div",{className:"".concat(d," col-span-5"),children:t("above_below")}),(0,n.jsx)("div",{className:"".concat(d," col-span-3"),children:t("effective")}),c.map((function(e){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(o," col-span-4"),children:e.range}),(0,n.jsx)("div",{className:"".concat(o," col-span-5"),children:e.baseRate}),(0,n.jsx)("div",{className:"".concat(o," col-span-3"),children:e.effectiveRate})]},e.range)}))]}),(0,n.jsx)("div",{className:A,children:(0,n.jsx)(r.Z,{i18nKey:"margin-rates-table:desc_1",components:{date:(0,n.jsx)("span",{className:A,children:"en-US"===a?"July 28, 2023":"07/28/2023"}),rate:(0,n.jsx)("span",{className:A,children:l})}})}),(0,n.jsx)("div",{className:A,children:t("desc_2")})]})}},61739:function(e,t,a){"use strict";a.d(t,{Af:function(){return m},F3:function(){return x},lj:function(){return g},oe:function(){return A},xG:function(){return u}});var n=a(43692),i=a(12042),s=a(99728),r=a(21157),l=a(61557),c=a(65954),d=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},o=function(e,t,a){return("en-US"===a?"".concat(e).concat(t):"".concat(e,"/").concat(a).concat(t)).replace(/\/+$/,"")},A=function(e,t,a,n){var i="https://www.proultimatewealth.com",s={title:a||"",description:n||""};return s.canonical=o(i,e,t),s.languageAlternates=[{href:o(i,e,"en-US"),hrefLang:"en"},{href:o(i,e,"zh-CN"),hrefLang:"zh-hans"},{href:o(i,e,"zh-TW"),hrefLang:"zh-hant"},{href:o(i,e,"en-US"),hrefLang:"x-default"}],s},x=function(e,t){if(e.length<=t)return[e];for(var a=[],n=0;n<e.length;)a.push(e.slice(n,n+t)),n+=t;return a},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,s.Z)((0,i.Z)({style:"currency"},a),{currency:t})).format(e)},g=function(e,t,a){return 1===e?t*(1+a):g(e-1,t,a)+t*Math.pow(1+a,e)},m=(function(){var e=(0,n.Z)((function(e,t){var a,n,i,s,r,o,A,x,u,g,m,h=arguments;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return a=h.length>2&&void 0!==h[2]&&h[2],n=[],i=function(a){var n={fields:["Slug","locale"],locale:"all",pagination:{page:a,pageSize:100}};return t&&(n.filters=t),(0,c.s1)(e,{params:n})},s=function(e){e.length&&e.forEach((function(e){var t=d(e.attributes.locale);n.push({params:a?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:t})}))},[4,i(1)];case 1:if(r=l.sent(),o=r.data,A=o.data,x=o.meta,s(A),!(x.pagination.pageCount>1))return[3,3];for(u=[],g=2;g<=x.pagination.pageCount;g+=1)m=i(g),u.push(m);return[4,Promise.all(u)];case 2:l.sent().forEach((function(e){var t=e.data.data;s(t)})),l.label=3;case 3:return[2,n]}}))}))}(),function(){var e=(0,n.Z)((function(e,t,a){var n,i,s,d,o,A,x,u,g,m,h,f,b,v,w,p,j,N,_;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return o=e.params.slug,A=e.locale,x=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(A),u={},g=[(0,c.s1)("/api/guides",{params:{locale:x,filters:{Slug:{$eq:o},Category:{$eq:t}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],a&&g.push((0,c.s1)("/api/videos",{params:{locale:x,filters:{Slug:{$eq:a}},populate:"Videos"}})),[4,Promise.all(g)];case 1:return m=r.Z.apply(void 0,[l.sent(),2]),h=m[0],f=m[1],b=h.data,(null===(v=b.data)||void 0===v?void 0:v.length)?(w=(0,r.Z)(v,1),p=w[0],u.title=p.attributes.Title,u.subTitle=p.attributes.Subtitle||"",u.slug=p.attributes.Slug,u.content=p.attributes.Content||"",u.sections=p.attributes.Section||null,u.seo={title:(null===(n=p.attributes)||void 0===n||null===(i=n.SEO)||void 0===i?void 0:i.Title)||null,description:(null===(s=p.attributes)||void 0===s||null===(d=s.SEO)||void 0===d?void 0:d.Description)||null},u.videos=[],a&&(j=f.data,(null===(N=j.data)||void 0===N?void 0:N.length)&&(_=(0,r.Z)(N,1),_[0].attributes.Videos.forEach((function(e){var t={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};u.videos.push(t)})))),[2,u]):[2,!1]}}))}))}(),function(e,t){for(var a=null,n=0;n<e.length;n+=1){if(t.includes(e[n].value)){a=e[n];break}if(e[n].options&&(a=m(e[n].options,t)))break}return a})},93028:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return T},default:function(){return M}});var n=a(8014),i=a(56168),s=a(22319),r=a(62044),l=a(80241),c=a.n(l),d={src:"/_next/static/media/margin1.6e355d7e.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEXygEPxf0HofT7zgEHzgEHxf0Pxf0G6fu+tAAAAB3RSTlNNcAU0QB9cEy6NJwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwdxrcRwDAQBLE99/2XrKEQAXuxBfZprZliKWFwG8VLoaHHk3co4fS7DxdHAJpsXAo6AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},o={src:"/_next/static/media/margin2.078aa3ef.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXnhTLygELxgELwgELwf0Hwf0LxgEPxgkF+TtzjAAAACHRSTlMBRE82F192J20nm3oAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicFcjJEQAACINAknj037HjDxZItwBKUfYj6c2T3H6Aqv8eKbvCojxjZmS7OBSSAJ50C5BuAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},A={src:"/_next/static/media/margin3.03525008.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXzf03wf0Lxf0LwgELxgELvgEHxf0P2f0SLi/yiAAAACHRSTlMCPVgsaUp6HsxmxVEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicHYu5EcBADITYR7r+O/bIpADw7HCoFpB47IRGtlJWMzNaTl/If0i9RuruBxLBAIvlN/68AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};var x=function(e){var t=e.marginRatesRef,a=(0,r.Z)("margin-loans").t,s=(0,i.useCallback)((function(){var e;null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[t]);return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"pt-12 pb-6 px-8",children:[(0,n.jsx)("h2",{className:"font-futura font-bold text-ft-blue text-3xl text-center mb-12",children:a("advantages.header")}),(0,n.jsxs)("div",{className:"md:flex flex-row max-w-7xl m-auto",children:[(0,n.jsxs)("div",{className:"w-full md:w-1/3 px-4 mb-6",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)(c(),{src:d,width:60,height:60,alt:a("advantages.increased.header")})}),(0,n.jsx)("div",{className:"text-xl text-ft-slate font-futura font-bold text-center my-2",children:a("advantages.increased.header")}),(0,n.jsx)("div",{className:"text-md text-center",children:a("advantages.increased.desc")})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/3 px-4 mb-6",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)(c(),{src:o,width:60,height:60,alt:a("advantages.flexible.header")})}),(0,n.jsx)("div",{className:"text-xl text-ft-slate font-futura font-bold text-center my-2",children:a("advantages.flexible.header")}),(0,n.jsx)("div",{className:"text-md text-center",children:a("advantages.flexible.desc")})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/3 px-4 mb-6",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)(c(),{src:A,width:60,height:60,alt:a("advantages.low_margin.header")})}),(0,n.jsx)("div",{className:"text-xl text-ft-slate font-futura font-bold text-center my-2",children:a("advantages.low_margin.header")}),(0,n.jsx)("div",{className:"text-md text-center",children:a("advantages.low_margin.desc")}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("button",{type:"button",onClick:s,className:"text-strong-blue mt-2",children:a("advantages.view_margin_rates")})})]})]})]})})},u=a(75657),g=a.n(u),m=a(97579),h=a.n(m),f=["benefits.item_1","benefits.item_2","benefits.item_3","benefits.item_4","benefits.item_5","benefits.item_6","benefits.item_7"],b=["risks.item_1","risks.item_2","risks.item_3","risks.item_4","risks.item_5","risks.item_6"];var v=function(){var e=(0,r.Z)("margin-loans").t;return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"m-auto max-w-7xl flex-row px-8 pb-12 md:flex",children:[(0,n.jsxs)("div",{className:"mb-8 w-full md:w-1/2",children:[(0,n.jsx)("h3",{className:"mb-2 font-futura font-bold text-ft-blue",children:e("benefits.header")}),(0,n.jsx)("div",{className:h().sectionDesc,children:e("benefits.desc")}),(0,n.jsx)("ul",{children:f.map((function(t){return(0,n.jsx)("li",{children:e(t)},t)}))}),(0,n.jsx)(g(),{href:"/resources/guides/margin/margin-benefits",children:e("benefits.learn_more")})]}),(0,n.jsxs)("div",{className:"mb-4 w-full md:w-1/2",children:[(0,n.jsx)("h3",{className:"mb-2 font-futura font-bold text-ft-blue",children:e("risks.header")}),(0,n.jsx)("div",{className:h().sectionDesc,children:e("risks.desc")}),(0,n.jsx)("ul",{children:b.map((function(t){return(0,n.jsx)("li",{children:e(t)},t)}))}),(0,n.jsx)(g(),{href:"/resources/guides/margin/margin-risks",children:e("risks.learn_more")})]})]})})},w={src:"/_next/static/media/margin4.88d96298.png",height:61,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEXwgEJMaXHwfkLwfkHwhULxgEKrhR0/AAAABnRSTlM8AFchDmnYpi/5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nCXKyQ0AMAyEQPZw/y1Hdn4jBPFQSQwxh/jDdiCigOq52riLvVh0ih8Q/wB3BShdsAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},p={src:"/_next/static/media/margin5.5b28d7f9.png",height:61,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXxf0PygELwf0Pwf0LxgELygUBMaXHwf0ISssxsAAAACHRSTlMlRzRTYxcAfuDCNOcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicBcGHAQAwDMMgeaX/f1zgXLUeBKwndH2OhqkMx4HTiSl+OaEXz4WRKtwHGX0AtjHoPtoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},j={src:"/_next/static/media/margin6.2697e61f.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEXygEPxf0Hwf0Hyf0LvgULxf0Pvf0Dxf0FMaXEzOn8ZAAAACXRSTlMte21MHl88kQBqjgUZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nFWKuREAIAzD/MQJ+0/MARWdThLAia0CyEgHorb9DPmbEe9joMOT0M1aGxgdALK18TBJAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},N={src:"/_next/static/media/margin7.df15e471.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXzgULwf0FMaXHtfT/vgEDwgEPwfkLygEL/yyJNAAAACHRSTlNIXgATIjNtg5HBD00AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicFca3DQAwEMQwnT7tv7HhisQil5GOUDukBGeJcpvj2gLCov5PvmmcQNoHFzcAnSP34iYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};var _=function(){var e=(0,r.Z)("margin-loans"),t=e.t,a=e.lang;return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"max-w-7xl m-auto px-8 pt-16 pb-12 mb-10",children:[(0,n.jsx)("h3",{className:"font-futura font-bold text-3xl text-ft-blue mb-12 text-center",children:t("get_started.header")}),(0,n.jsxs)("div",{className:"md:flex flex-row max-w-7xl m-auto",children:[(0,n.jsxs)("div",{className:"w-full md:w-1/4 px-4 mb-6",children:[(0,n.jsx)("div",{className:"text-center mb-2",children:(0,n.jsx)(c(),{src:w,width:60,height:60,alt:"margin4.png"})}),(0,n.jsx)("div",{className:"text-center",children:t("get_started.item_1")})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/4 px-4 mb-6",children:[(0,n.jsx)("div",{className:"text-center mb-2",children:(0,n.jsx)(c(),{src:p,width:60,height:60,alt:"margin5.png"})}),(0,n.jsx)("div",{className:"text-center",children:t("get_started.item_2")})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/4 px-4 mb-6",children:[(0,n.jsx)("div",{className:"text-center mb-2",children:(0,n.jsx)(c(),{src:j,width:60,height:60,alt:"margin6.png"})}),(0,n.jsx)("div",{className:"text-center",children:t("get_started.item_3")})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/4 px-4 mb-6",children:[(0,n.jsx)("div",{className:"text-center mb-2",children:(0,n.jsx)(c(),{src:N,width:60,height:60,alt:"margin7.png"})}),(0,n.jsx)("div",{className:"text-center",children:t("get_started.item_4")})]})]}),(0,n.jsx)("div",{className:"mt-2 flex items-center justify-center",children:(0,n.jsx)("a",{className:"button-primary button-primary-orange",href:"https://invest.proultimatewealth.com/cgi-bin/login?ft_locale=".concat(a.toLowerCase(),"&redirect=/content/myaccount/profile/margin"),children:t("get_started.apply_for")})})]})})},E=a(46834);var R=function(){var e=(0,r.Z)("margin-loans").t;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"border-t border-grayish-blue max-w-7xl m-auto",children:(0,n.jsxs)("div",{className:"md:flex flex-row max-w-7xl m-auto px-8 py-12",children:[(0,n.jsxs)("div",{className:"w-full md:w-2/3 lg:w-3/4 mr-10 mb-6",children:[(0,n.jsx)("h2",{className:"font-futura font-bold mb-4 text-ft-blue",children:e("how_work.header")}),(0,n.jsx)("div",{children:e("how_work.desc")})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/3 lg:w-1/4 bg-grey-smoke text-white p-8 rounded-lg",children:[(0,n.jsx)("div",{className:"font-futura font-bold text-xl mb-4",children:e("how_work.guide_header")}),(0,n.jsx)("div",{children:(0,n.jsx)(E.Z,{i18nKey:"how_work.guide_desc",ns:"margin-loans",components:[(0,n.jsx)(g(),{href:"/resources/guides/margin",children:"Margin Education"},"/resources/guides/margin")]})})]})]})})})};var C=function(){var e=(0,r.Z)("margin-loans"),t=e.t,a=e.lang;return(0,n.jsx)("div",{className:'bg-[url("/images/marginloan-hero.png")] bg-cover bg-center',children:(0,n.jsx)("div",{className:"md:flex flex-row max-w-7xl m-auto px-8",children:(0,n.jsxs)("div",{className:"w-4/5 py-24 md:w-1/2 xl:w-2/5",children:[(0,n.jsx)("h1",{className:"font-futura-bold font-bold text-4xl lg:text-5xl pt-6 pb-3",children:t("landing.header")}),(0,n.jsx)("div",{className:"text-xl my-4 mb-8",children:t("landing.desc")}),(0,n.jsx)("a",{"aria-label":t("landing.open_account"),className:"button-primary button-primary-orange !w-45 mb-3 md:!w-[185px] xl:!w-[216px]",rel:"noopener noreferrer",href:"https://signup.proultimatewealth.com/apply/".concat(a.toLowerCase()),children:t("landing.open_account")}),(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsx)("a",{className:"text-strong-blue","aria-label":t("landing.upgrade_account"),href:"https://invest.proultimatewealth.com/cgi-bin/login?ft_locale=".concat(a.toLowerCase(),"&redirect=/content/myaccount/profile/margin"),rel:"noopener noreferrer",children:t("landing.upgrade_account")})})]})})})},S=a(91515);function B(e,t){var a=(0,r.Z)("margin-loans").t;return(0,n.jsx)("div",{className:"bg-smoke",ref:t,children:(0,n.jsxs)("div",{className:"max-w-7xl m-auto px-8 pt-16 pb-12",children:[(0,n.jsx)("h2",{className:"font-futura font-bold text-ft-blue mb-2 text-center",children:a("margin_rates.header")}),(0,n.jsx)("div",{className:"text-xl text-center mb-6",children:a("margin_rates.desc")}),(0,n.jsx)(S.ZP,{})]})})}var U=(0,i.forwardRef)(B),H=a(81673),y=a.n(H),L=a(61739),T=!0;function M(){var e=(0,i.useRef)(null),t=(0,r.Z)("margin-loans"),a=t.t,l=t.lang,c=(0,L.oe)("/trading/margin-loans",l,a("title"),a("description")),d=c.title,o=c.description,A=c.canonical,u=c.languageAlternates;return(0,n.jsxs)("div",{className:y().container,children:[(0,n.jsx)(s.PB,{title:d,description:o,canonical:A,languageAlternates:u}),(0,n.jsx)(C,{}),(0,n.jsx)(x,{marginRatesRef:e}),(0,n.jsx)(R,{}),(0,n.jsx)(v,{}),(0,n.jsx)(U,{ref:e}),(0,n.jsx)(_,{})]})}},81673:function(e){e.exports={container:"Home_container__97eC3"}},97579:function(e){e.exports={container:"Benefits_container__iTCvo",wrapper:"Benefits_wrapper__F8NJi",section:"Benefits_section__3lkem",sectionHeader:"Benefits_sectionHeader__y99H0",sectionDesc:"Benefits_sectionDesc__vnvF7",rightSection:"Benefits_rightSection__KU6cz"}}},function(e){e.O(0,[2319,9774,2888,179],(function(){return t=83461,e(e.s=t);var t}));var t=e.O();_N_E=t}]);