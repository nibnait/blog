import{_ as t,o as n,c as h,a,b as d,e,d as i,r as o}from"./app.dc8d7f63.js";const s={},c=e('<h1 id="_04-\u5F52\u5E76\u6392\u5E8F\u53CA\u5176\u5E38\u89C1\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#_04-\u5F52\u5E76\u6392\u5E8F\u53CA\u5176\u5E38\u89C1\u9762\u8BD5\u9898" aria-hidden="true">#</a> 04 \u5F52\u5E76\u6392\u5E8F\u53CA\u5176\u5E38\u89C1\u9762\u8BD5\u9898</h1><h2 id="\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9" aria-hidden="true">#</a> \u5185\u5BB9\uFF1A</h2><ul><li>\u5F52\u5E76\u6392\u5E8F</li></ul><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE\uFF1A</h2><h3 id="\u5F52\u5E76\u6392\u5E8F\u7684\u9012\u5F52\u548C\u975E\u9012\u5F52\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F\u7684\u9012\u5F52\u548C\u975E\u9012\u5F52\u5B9E\u73B0" aria-hidden="true">#</a> \u5F52\u5E76\u6392\u5E8F\u7684\u9012\u5F52\u548C\u975E\u9012\u5F52\u5B9E\u73B0</h3>',5),l={href:"https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/algorithmzuo/b_%E4%BD%93%E7%B3%BB%E5%AD%A6%E4%B9%A0%E7%8F%AD/class04/Code01_MergeSort.java",target:"_blank",rel:"noopener noreferrer"},b=i("Code01_MergeSort.java"),_=e('<h3 id="\u5C0F\u548C\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u548C\u95EE\u9898" aria-hidden="true">#</a> \u5C0F\u548C\u95EE\u9898</h3><p>\u5728\u4E00\u4E2A\u6570\u7EC4\u4E2D\uFF0C\u4E00\u4E2A\u6570\u5DE6\u8FB9\u6BD4\u5B83\u5C0F\u7684\u6570\u7684\u603B\u548C\uFF0C\u53EB\u8BE5\u6570\u7684\u5C0F\u548C\u3002\u6240\u6709\u6570\u7684\u5C0F\u548C\u7D2F\u52A0\u8D77\u6765\uFF0C\u53EB\u6570\u7EC4\u5C0F\u548C<br> \u4F8B\u5B50\uFF1A [1,3,4,2,5]<br> 1\u5DE6\u8FB9\u6BD41\u5C0F\u7684\u6570\uFF1A\u6CA1\u6709<br> 3\u5DE6\u8FB9\u6BD43\u5C0F\u7684\u6570\uFF1A1<br> 4\u5DE6\u8FB9\u6BD44\u5C0F\u7684\u6570\uFF1A1\u30013<br> 2\u5DE6\u8FB9\u6BD42\u5C0F\u7684\u6570\uFF1A1<br> 5\u5DE6\u8FB9\u6BD45\u5C0F\u7684\u6570\uFF1A1\u30013\u30014\u30012<br> \u6240\u4EE5\u6570\u7EC4\u7684\u5C0F\u548C\u4E3A1+1+3+1+1+3+4+2=16<br> \u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4arr\uFF0C\u6C42\u6570\u7EC4\u5C0F\u548C</p><h3 id="\u9006\u5E8F\u5BF9\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9006\u5E8F\u5BF9\u95EE\u9898" aria-hidden="true">#</a> \u9006\u5E8F\u5BF9\u95EE\u9898</h3><p>\u5728\u4E00\u4E2A\u6570\u7EC4\u4E2D\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u524D\u9762\u7684\u6570a\uFF0C\u548C\u4EFB\u4F55\u4E00\u4E2A\u540E\u9762\u7684\u6570b\uFF0C\u5982\u679C(a,b)\u662F\u964D\u5E8F\u7684\uFF0C\u5C31\u79F0\u4E3A\u964D\u5E8F\u5BF9<br> \u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4arr\uFF0C\u6C42\u6570\u7EC4\u7684\u964D\u5E8F\u5BF9\u603B\u6570\u91CF</p><h3 id="\u5927\u4E8E\u4E24\u500D\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5927\u4E8E\u4E24\u500D\u95EE\u9898" aria-hidden="true">#</a> \u5927\u4E8E\u4E24\u500D\u95EE\u9898</h3><p>\u5728\u4E00\u4E2A\u6570\u7EC4\u4E2D\uFF0C\u5BF9\u4E8E\u4EFB\u4F55\u4E00\u4E2A\u6570num\uFF0C\u6C42\u6709\u591A\u5C11\u4E2A(\u540E\u9762\u7684\u6570*2)\u4F9D\u7136&lt;num\uFF0C\u8FD4\u56DE\u603B\u4E2A\u6570<br> \u6BD4\u5982\uFF1A[3,1,7,0,2]<br> 3\u7684\u540E\u9762\u6709\uFF1A1\uFF0C0<br> 1\u7684\u540E\u9762\u6709\uFF1A0<br> 7\u7684\u540E\u9762\u6709\uFF1A0\uFF0C2<br> 0\u7684\u540E\u9762\u6CA1\u6709<br> 2\u7684\u540E\u9762\u6CA1\u6709<br> \u6240\u4EE5\u603B\u5171\u67095\u4E2A</p>',6);function u(f,m){const r=o("ExternalLinkIcon");return n(),h("div",null,[c,a("p",null,[a("a",l,[b,d(r)])]),_])}var x=t(s,[["render",u],["__file","class04.html.vue"]]);export{x as default};