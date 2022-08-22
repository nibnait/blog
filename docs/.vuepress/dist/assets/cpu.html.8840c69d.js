import{_ as n,o as s,c as a,e}from"./app.dc8d7f63.js";const i={},l=e(`<h1 id="cpu-\u98D9\u5347-\u88AB\u6253\u6EE1" tabindex="-1"><a class="header-anchor" href="#cpu-\u98D9\u5347-\u88AB\u6253\u6EE1" aria-hidden="true">#</a> CPU \u98D9\u5347 / \u88AB\u6253\u6EE1</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># top\u547D\u4EE4\uFF0C\u67E5\u770B java\u8FDB\u7A0B\u7684 pid</span>
<span class="token comment"># \u7535\u5546\u8FD9\u8FB9 pid \u4E00\u822C\u90FD\u662F 34\u3002\u4EE5\u4E0B\u547D\u4EE4\u91CC 34 \u5C31\u4EE3\u8868 java\u8FDB\u7A0B\u7684 pid \u4E86</span>
<span class="token function">top</span>
<span class="token comment"># \u67E5\u770B\u5360\u7528 cpu\u8D44\u6E90 \u6700\u591A\u7684\u7EBF\u7A0B</span>
<span class="token function">top</span> -H -p <span class="token number">34</span>
<span class="token comment"># \u8BA1\u7B97\u7EBF\u7A0B\u7684tid\u7684\u5341\u516D\u8FDB\u5236</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%x<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token number">1392</span>
 
\u5F97\u5230\u662F: <span class="token number">570</span>
 
<span class="token builtin class-name">cd</span> /usr/local/jdk1.8.0/bin/
<span class="token comment"># \u67E5\u770B\u7EBF\u7A0B\u7684\u5806\u6808\u4FE1\u606F\uFF08\u524D\u540E50\u884C\uFF09</span>
./jstack <span class="token number">34</span> <span class="token operator">|</span> <span class="token function">grep</span> -A <span class="token number">50</span> <span class="token number">570</span> --color
 
\u7136\u540E\u641C bilibili\uFF0C\u53EF\u4EE5\u770B\u5230\u662F\u54EA\u91CC\u7684\u4EE3\u7801\u8FD9\u4E48\u8017cpu
 
./jstack -l <span class="token number">34</span> <span class="token operator">&gt;&gt;</span> stack.txt
\u5BB9\u5668\u4E0B\u8F7D\u6587\u4EF6\u5DE5\u5177\uFF1Ahttp://relay.bilibili.co/<span class="token comment">#/file/download</span>
<span class="token comment"># \u53EF\u4EE5\u628A\u5806\u6808\u4FE1\u606F \u4E0B\u8F7D\u4E0B\u6765 \u5206\u6790\u4E0B\uFF0C\u5230\u5E95\u662F\u4EC0\u4E48\u63A5\u53E3/\u65B9\u6CD5 \u5728\u8017cpu</span>
 
<span class="token comment"># \u67E5\u770Bjava\u8FDB\u7A0B \u7684\u5806\u4FE1\u606F</span>
./jmap -heap <span class="token variable">\${PID}</span>
<span class="token comment"># \u67E5\u770B\u5185\u5B58\u5360\u7528top50\u7684\u5BF9\u8C61</span>
./jmap -histo <span class="token variable">\${PID}</span> <span class="token operator">|</span> <span class="token function">head</span> -n <span class="token number">50</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function t(p,d){return s(),a("div",null,c)}var r=n(i,[["render",t],["__file","cpu.html.vue"]]);export{r as default};
