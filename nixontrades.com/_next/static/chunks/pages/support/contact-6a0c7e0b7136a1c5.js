(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6776],{19788:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/support/contact",function(){return n(23244)}])},61739:function(t,e,n){"use strict";n.d(e,{Af:function(){return u},F3:function(){return h},lj:function(){return _},oe:function(){return m},xG:function(){return p}});var c=n(43692),a=n(12042),s=n(99728),i=n(21157),o=n(61557),r=n(65954),l=function(t){return"zh-CN"===t?"zh-CN":"zh-Hant"===t?"zh-TW":"en-US"},d=function(t,e,n){return("en-US"===n?"".concat(t).concat(e):"".concat(t,"/").concat(n).concat(e)).replace(/\/+$/,"")},m=function(t,e,n,c){var a="https://www.proultimatewealth.com",s={title:n||"",description:c||""};return s.canonical=d(a,t,e),s.languageAlternates=[{href:d(a,t,"en-US"),hrefLang:"en"},{href:d(a,t,"zh-CN"),hrefLang:"zh-hans"},{href:d(a,t,"zh-TW"),hrefLang:"zh-hant"},{href:d(a,t,"en-US"),hrefLang:"x-default"}],s},h=function(t,e){if(t.length<=e)return[t];for(var n=[],c=0;c<t.length;)n.push(t.slice(c,c+e)),c+=e;return n},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,s.Z)((0,a.Z)({style:"currency"},n),{currency:e})).format(t)},_=function(t,e,n){return 1===t?e*(1+n):_(t-1,e,n)+e*Math.pow(1+n,t)},u=(function(){var t=(0,c.Z)((function(t,e){var n,c,a,s,i,d,m,h,p,_,u,f=arguments;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return n=f.length>2&&void 0!==f[2]&&f[2],c=[],a=function(n){var c={fields:["Slug","locale"],locale:"all",pagination:{page:n,pageSize:100}};return e&&(c.filters=e),(0,r.s1)(t,{params:c})},s=function(t){t.length&&t.forEach((function(t){var e=l(t.attributes.locale);c.push({params:n?{slug:[t.attributes.Slug]}:{slug:t.attributes.Slug},locale:e})}))},[4,a(1)];case 1:if(i=o.sent(),d=i.data,m=d.data,h=d.meta,s(m),!(h.pagination.pageCount>1))return[3,3];for(p=[],_=2;_<=h.pagination.pageCount;_+=1)u=a(_),p.push(u);return[4,Promise.all(p)];case 2:o.sent().forEach((function(t){var e=t.data.data;s(e)})),o.label=3;case 3:return[2,c]}}))}))}(),function(){var t=(0,c.Z)((function(t,e,n){var c,a,s,l,d,m,h,p,_,u,f,x,v,S,j,g,N,b,I;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return d=t.params.slug,m=t.locale,h=function(t){return"zh-CN"===t?"zh-CN":"zh-TW"===t?"zh-Hant":"en"}(m),p={},_=[(0,r.s1)("/api/guides",{params:{locale:h,filters:{Slug:{$eq:d},Category:{$eq:e}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],n&&_.push((0,r.s1)("/api/videos",{params:{locale:h,filters:{Slug:{$eq:n}},populate:"Videos"}})),[4,Promise.all(_)];case 1:return u=i.Z.apply(void 0,[o.sent(),2]),f=u[0],x=u[1],v=f.data,(null===(S=v.data)||void 0===S?void 0:S.length)?(j=(0,i.Z)(S,1),g=j[0],p.title=g.attributes.Title,p.subTitle=g.attributes.Subtitle||"",p.slug=g.attributes.Slug,p.content=g.attributes.Content||"",p.sections=g.attributes.Section||null,p.seo={title:(null===(c=g.attributes)||void 0===c||null===(a=c.SEO)||void 0===a?void 0:a.Title)||null,description:(null===(s=g.attributes)||void 0===s||null===(l=s.SEO)||void 0===l?void 0:l.Description)||null},p.videos=[],n&&(N=x.data,(null===(b=N.data)||void 0===b?void 0:b.length)&&(I=(0,i.Z)(b,1),I[0].attributes.Videos.forEach((function(t){var e={title:t.Title,subTitle:t.Time,classNames:"bg-".concat(t.Theme),alt:t.Alt,sources:[{src:t.URL,type:"video/mp4"}]};p.videos.push(e)})))),[2,p]):[2,!1]}}))}))}(),function(t,e){for(var n=null,c=0;c<t.length;c+=1){if(e.includes(t[c].value)){n=t[c];break}if(t[c].options&&(n=u(t[c].options,e)))break}return n})},23244:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return u}});var c=n(8014),a=(n(56168),n(62044)),s=n(75657),i=n.n(s),o=n(46834),r=n(80241),l=n.n(r),d=n(22319),m=n(61739),h=n(26317),p=n.n(h),_=[{title:"contact.bottom_item1",image:"/images/docs.svg",link:"taxes-documents"},{title:"contact.bottom_item2",image:"/images/transfers.svg",link:"deposits-transfers"},{title:"contact.bottom_item3",image:"/images/profile.svg",link:"my-account-login"},{title:"contact.bottom_item4",image:"/images/ira.svg",link:"ira"},{title:"contact.bottom_item5",image:"/images/trading.svg",link:"trading"},{title:"contact.bottom_item6",image:"/images/options.svg",link:"options-trading"}];var u=!0;e.default=function(){var t=(0,a.Z)("contact"),e=t.t,n=t.lang,s=(0,m.oe)("/support/contact",n,e("contact.meta_title"),e("contact.meta_description")),r=s.title,h=s.description,u=s.canonical,f=s.languageAlternates;return(0,c.jsxs)("div",{className:p().container,children:[(0,c.jsx)(d.PB,{title:r,description:h,canonical:u,languageAlternates:f}),(0,c.jsxs)("div",{className:p().wrapper,children:[(0,c.jsx)("h1",{className:p().title,children:e("contact.header")}),(0,c.jsx)("div",{className:"subtitle",children:e("contact.desc")}),(0,c.jsxs)("div",{className:p().topSection,children:[(0,c.jsxs)("div",{className:p().topSectionLeft,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItem,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemFirstSection,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemHead,children:[(0,c.jsx)("div",{className:p().imageWrapper,children:(0,c.jsx)(l(),{src:"/images/icon_help.svg",alt:e("contact.help_center"),width:"45px",height:"45px"})}),(0,c.jsxs)("div",{className:p().topSectionLeftItemHeadInfo,children:[(0,c.jsx)("div",{className:p().topSectionLeftItemHeadText,children:e("contact.help_center")}),(0,c.jsx)("div",{className:"sm:hidden",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:e("contact.get_answers")})})]})]}),(0,c.jsx)("div",{className:"hidden sm:block",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:e("contact.get_answers")})})]}),(0,c.jsx)("div",{className:p().topSectionLeftItemLastSection,children:(0,c.jsx)("a",{href:"https://help.".concat(n,".proultimatewealth.com/"),rel:"noopener noreferrer",className:"button-primary button-primary-orange",children:e("contact.go_to")})})]}),(0,c.jsxs)("div",{className:p().topSectionLeftItem,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemFirstSection,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemHead,children:[(0,c.jsx)("div",{className:p().imageWrapper,children:(0,c.jsx)(l(),{src:"/images/icon_email.svg",alt:e("contact.email"),width:"45px",height:"45px"})}),(0,c.jsxs)("div",{className:p().topSectionLeftItemHeadInfo,children:[(0,c.jsx)("div",{className:p().topSectionLeftItemHeadText,children:e("contact.email")}),(0,c.jsx)("div",{className:"sm:hidden",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:e("contact.our_customer")})})]})]}),(0,c.jsx)("div",{className:"hidden sm:block",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:e("contact.our_customer")})})]}),(0,c.jsx)("div",{className:p().topSectionLeftItemLastSection,children:(0,c.jsx)(i(),{href:"contact/email",children:(0,c.jsx)("a",{className:"button-primary button-primary-blue",children:e("contact.email_us")})})})]}),(0,c.jsxs)("div",{className:p().topSectionLeftItem,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemFirstSection,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemHead,children:[(0,c.jsx)("div",{className:p().imageWrapper,children:(0,c.jsx)(l(),{src:"/images/icon_phone.svg",alt:e("contact.phone"),width:"45px",height:"45px"})}),(0,c.jsxs)("div",{className:p().topSectionLeftItemHeadInfo,children:[(0,c.jsx)("div",{className:p().topSectionLeftItemHeadText,children:e("contact.phone")}),(0,c.jsx)("div",{className:"sm:hidden",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:(0,c.jsx)(o.Z,{i18nKey:"contact.available",ns:"contact",components:{br:(0,c.jsx)("br",{})}})})})]})]}),(0,c.jsx)("div",{className:"hidden sm:block",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:(0,c.jsx)(o.Z,{i18nKey:"contact.available",ns:"contact",components:{br:(0,c.jsx)("br",{})}})})})]}),(0,c.jsxs)("div",{className:p().topSectionLeftItemLastSection,children:[(0,c.jsxs)("div",{className:p().phoneNumber,children:[e("contact.us_toll_free")," ",(0,c.jsx)("a",{href:"tel:".concat(e("contact.us_toll_free_phone_number")),children:e("contact.us_toll_free_phone_number")})]}),(0,c.jsxs)("div",{className:p().phoneNumber,children:[e("contact.overseas")," ",(0,c.jsx)("a",{href:"tel:".concat(e("contact.overseas_phone_number")),children:e("contact.overseas_phone_number")})]}),"en-US"!==n&&(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:p().phoneNumber,children:[e("contact.overseas2")," ",(0,c.jsx)("a",{href:"tel:".concat(e("contact.overseas2_phone_number")),children:e("contact.overseas2_phone_number")})]}),(0,c.jsxs)("div",{className:p().phoneNumber,children:[e("contact.overseas3")," ",(0,c.jsx)("a",{href:"tel:".concat(e("contact.overseas3_phone_number")),children:e("contact.overseas3_phone_number")})]}),(0,c.jsx)("div",{className:p().phoneNumber,children:e("contact.overseas3_note")})]})]})]}),"en-US"!==n&&(0,c.jsxs)("div",{className:"".concat(p().topSectionLeftItem," ").concat(p().weChatItem),children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemFirstSection,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemHead,children:[(0,c.jsx)("div",{className:p().imageWrapper,children:(0,c.jsx)(l(),{src:"/images/icon_wechat.svg",alt:e("contact.we_chat"),width:"45px",height:"45px"})}),(0,c.jsxs)("div",{className:p().topSectionLeftItemHeadInfo,children:[(0,c.jsx)("div",{className:p().topSectionLeftItemHeadText,children:e("contact.we_chat")}),(0,c.jsx)("div",{className:"sm:hidden",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:(0,c.jsx)(o.Z,{i18nKey:"contact.we_chat_desc",ns:"contact",components:{br:(0,c.jsx)("br",{})}})})})]})]}),(0,c.jsx)("div",{className:"hidden sm:block",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:(0,c.jsx)(o.Z,{i18nKey:"contact.we_chat_desc",ns:"contact",components:{br:(0,c.jsx)("br",{})}})})})]}),(0,c.jsx)("div",{className:p().topSectionLeftItemLastSection,children:(0,c.jsxs)("div",{className:p().weChatInfo,children:[(0,c.jsx)("div",{className:p().weChatTop,children:e("contact.we_chat_top")}),(0,c.jsx)(l(),{src:"/images/wechat_qr.jpg",alt:e("contact.we_chat_top"),width:"108px",height:"108px"})]})})]}),(0,c.jsxs)("div",{className:p().topSectionLeftItem,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemFirstSection,children:[(0,c.jsxs)("div",{className:p().topSectionLeftItemHead,children:[(0,c.jsx)("div",{className:p().imageWrapper,children:(0,c.jsx)(l(),{src:"/images/icon_fax.svg",alt:e("contact.fax"),width:"45px",height:"45px"})}),(0,c.jsxs)("div",{className:p().topSectionLeftItemHeadInfo,children:[(0,c.jsx)("div",{className:p().topSectionLeftItemHeadText,children:e("contact.fax")}),(0,c.jsx)("div",{className:"sm:hidden",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:e("contact.send_forms")})})]})]}),(0,c.jsx)("div",{className:"hidden sm:block",children:(0,c.jsx)("div",{className:p().topSectionLeftItemDesc,children:e("contact.send_forms")})})]}),(0,c.jsx)("div",{className:p().topSectionLeftItemLastSection,children:(0,c.jsx)("div",{className:p().phoneNumber,children:(0,c.jsx)("a",{href:"tel:1-718-961-3919",children:(0,c.jsx)("span",{children:"1-718-961-3919"})})})})]})]}),(0,c.jsxs)("div",{className:p().topSectionRight,children:[(0,c.jsxs)("div",{className:p().importLinksWrapper,children:[(0,c.jsx)("div",{className:p().topSectionRightItemHead,children:e("contact.import_links")}),(0,c.jsx)("div",{className:p().topSectionRightItemLink,children:(0,c.jsx)(i(),{href:"/support/forms",children:e("contact.search_form")})}),(0,c.jsx)("div",{className:p().topSectionRightItemLink,children:(0,c.jsx)(i(),{href:"/support/funding",children:e("contact.fund_account")})})]}),(0,c.jsxs)("div",{className:p().headQuartersWrapper,children:[(0,c.jsx)("div",{className:p().topSectionRightItemHead,children:e("contact.ny_head")}),(0,c.jsxs)("div",{className:p().topSectionRightItemDesc,children:[e("contact.ny_head_item1"),(0,c.jsx)("br",{}),e("contact.ny_head_item1-2"),(0,c.jsx)("br",{}),e("contact.ny_head_item1-3"),(0,c.jsx)("br",{}),(0,c.jsx)("a",{href:"https://goo.gl/maps/n4cuKiVrKVcG5gxe7",rel:"noopener noreferrer",target:"_blank",children:(0,c.jsx)("span",{children:e("contact.map_it")})})]}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{className:p().topSectionRightItemDesc,children:e("contact.ny_head_item2")}),(0,c.jsx)("div",{className:p().topSectionRightItemDesc,children:e("contact.ny_head_item3")}),(0,c.jsx)("div",{className:p().topSectionRightItemDesc,children:e("contact.ny_head_item4")})]})]})]}),(0,c.jsxs)("div",{className:p().bottomSection,children:[(0,c.jsx)("h2",{className:p().bottomSectionHeader,children:e("contact.bottom_header")}),(0,c.jsx)("div",{className:p().bottomSectionItems,children:_.map((function(t){return(0,c.jsx)("div",{className:p().bottomSectionItem,children:(0,c.jsx)("a",{href:"https://help.".concat(n,".proultimatewealth.com/").concat(t.link),rel:"noopener noreferrer",target:"_blank",children:(0,c.jsxs)("div",{className:p().bottomSectionItemWrapper,children:[(0,c.jsx)(l(),{src:t.image,alt:e(t.title),width:"48px",height:"48px"}),(0,c.jsx)("div",{className:p().bottomSectionItemText,children:e(t.title)})]})})},t.title)}))})]})]})]})}},26317:function(t){t.exports={container:"Contact_container__WvsZb",wrapper:"Contact_wrapper__RTnAm",title:"Contact_title__B52_9",desc:"Contact_desc___MvLb",topSection:"Contact_topSection__X4C7Y",topSectionLeft:"Contact_topSectionLeft__Vnn1s",topSectionLeftItem:"Contact_topSectionLeftItem__ibltm",topSectionLeftItemFirstSection:"Contact_topSectionLeftItemFirstSection__3Dyzx",weChatItem:"Contact_weChatItem__Wj8Zv",topSectionLeftItemLastSection:"Contact_topSectionLeftItemLastSection__k9okf","button-primary":"Contact_button-primary__bTjlZ",phoneNumber:"Contact_phoneNumber__PjOsK",weChatInfo:"Contact_weChatInfo__W2VOl",weChatTop:"Contact_weChatTop__SwaeB",topSectionLeftItemHead:"Contact_topSectionLeftItemHead__95_dL",imageWrapper:"Contact_imageWrapper__94zms",topSectionLeftItemHeadInfo:"Contact_topSectionLeftItemHeadInfo__C8hzs",topSectionLeftItemHeadText:"Contact_topSectionLeftItemHeadText__LB3R0",topSectionLeftItemDesc:"Contact_topSectionLeftItemDesc__RGwal",topSectionRight:"Contact_topSectionRight__A4AJ3",importLinksWrapper:"Contact_importLinksWrapper__FF_J5",headQuartersWrapper:"Contact_headQuartersWrapper__b4PMO",topSectionRightItemHead:"Contact_topSectionRightItemHead__hIY54",topSectionRightItemDesc:"Contact_topSectionRightItemDesc__CwCOj",topSectionRightItemLink:"Contact_topSectionRightItemLink__jpEs8",bottomSection:"Contact_bottomSection__sRL1Y",bottomSectionHeader:"Contact_bottomSectionHeader__l0Kup",bottomSectionItems:"Contact_bottomSectionItems__EaGUt",bottomSectionItem:"Contact_bottomSectionItem__Z6jIK",bottomSectionItemWrapper:"Contact_bottomSectionItemWrapper__cnSo6",bottomSectionItemText:"Contact_bottomSectionItemText___zc_J"}}},function(t){t.O(0,[2319,9774,2888,179],(function(){return e=19788,t(t.s=e);var e}));var e=t.O();_N_E=e}]);