(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{513:function(t,e,n){var content=n(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("74d8c2cd",content,!0,{sourceMap:!1})},528:function(t,e,n){"use strict";n(513)},529:function(t,e,n){var o=n(21)(!1);o.push([t.i,'body[data-v-29895558],div[data-v-29895558],h1[data-v-29895558],h2[data-v-29895558],h3[data-v-29895558],h4[data-v-29895558],html[data-v-29895558],p[data-v-29895558],span[data-v-29895558]{font-family:"Prompt"}.gradmain[data-v-29895558]{background:#ffc593;background:linear-gradient(324deg,#ffc593,#ef7c7d)}.weloading-enter-active[data-v-29895558]{transition:all 1s ease}.weloading-leave-active[data-v-29895558]{transition:all 1s cubic-bezier(1,.5,.8,1)}.weloading-enter[data-v-29895558]{opacity:0}.weloading-enter .we-loading[data-v-29895558]{height:100%}.weloading-leave-to[data-v-29895558]{opacity:0}.weloading-leave-to .we-loading[data-v-29895558]{height:100%}.fadeintro-inonly-enter-active[data-v-29895558]{transition:all 1s ease}.fadeintro-inonly-leave-active[data-v-29895558]{transition:all 0s}.fadeintro-inonly-enter[data-v-29895558]{transform:translateY(-30px);opacity:0}.fadeintro-inonly-leave-to[data-v-29895558]{opacity:0}.fadeintro-enter-active[data-v-29895558],.fadeintro-leave-active[data-v-29895558]{transition:all .2s ease}.fadeintro-enter[data-v-29895558],.fadeintro-leave-to[data-v-29895558]{transform:translateY(-15px);opacity:0}.fade-enter-active[data-v-29895558],.fade-leave-active[data-v-29895558]{transition:all .2s ease}.fade-enter[data-v-29895558],.fade-leave-to[data-v-29895558]{opacity:0}button[data-v-29895558]{outline:none;cursor:pointer}.middle-item[data-v-29895558]{margin:0 auto;text-align:center;-moz-justify-content:center;-o-justify-content:center;justify-content:center;-webkit-display:flex;-moz-display:flex;-o-display:flex;display:flex;-moz-align-items:center;-o-align-items:center;align-items:center}.uppercase[data-v-29895558]{text-transform:uppercase}.ec-text[data-v-29895558]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t1[data-v-29895558]{transition:all .1s ease-out}.t2[data-v-29895558]{transition:all .2s ease-out}.t3[data-v-29895558]{transition:all .3s ease-out}.t4[data-v-29895558]{transition:all .4s ease-out}.t6[data-v-29895558]{transition:all .6s ease-out}.t8[data-v-29895558]{transition:all .8s ease-out}.function-con .function-box[data-v-29895558]{width:30px;height:30px;display:inline-block;line-height:30px;text-align:center;background-color:#eee;cursor:pointer}.function-con .function-box[data-v-29895558]:hover{background-color:#ffbc00;color:#fff}',""]),t.exports=o},533:function(t,e,n){"use strict";n.r(e);n(39),n(63);var o={data:function(){return{users:[{description:"You cannot do something not allowed",punishment:"Cannot Post on Timeline",quota:"1/3",enddate:"15 August 2022, 15:11"},{description:"You cannot do something not allowed",punishment:"Cannot Post on Timeline",quota:"2/3",enddate:"15 August 2022, 15:11"}],headers:[{text:"No",value:"no"},{text:"Punishment",value:"punishment"},{text:"Quota",value:"quota"},{text:"End in",value:"enddate"},{text:"Action",value:"function"}]}},methods:{viewRoute:function(link){this.$router.push({path:link})},redirectTo:function(path){this.$router.replace({path:path})}}},r=(n(528),n(69)),l=n(132),d=n.n(l),c=n(110),v=n(658),f=n(157),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.users,"item-key":"name",search:t.search,"custom-filter":t.filterOnlyCapsText},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-text-field",{staticClass:"mx-4",attrs:{label:"Search..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item.no",fn:function(e){var n=e.index;return[t._v("\n      "+t._s(n+1)+"\n    ")]}},{key:"item.function",fn:function(e){e.item;return[n("v-btn",{attrs:{depressed:"",dark:"",small:"",color:"orange"}},[t._v("\n        Cancel Ban\n      ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",dark:"",small:"",color:"red"}},[t._v("\n        Delete\n      ")])]}}])})],1)}),[],!1,null,"29895558",null);e.default=component.exports;d()(component,{VBtn:c.a,VDataTable:v.a,VTextField:f.a})}}]);