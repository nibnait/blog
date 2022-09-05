import{_ as n,o as s,c as a,e}from"./app.186cb437.js";const i={},l=e(`<h1 id="\u5185\u5B58-\u98D9\u5347-\u9891\u7E41gc" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58-\u98D9\u5347-\u9891\u7E41gc" aria-hidden="true">#</a> \u5185\u5B58 \u98D9\u5347 / \u9891\u7E41GC</h1><h2 id="\u67E5\u770B\u5806\u5185\u5B58-\u627E\u51FA\u4E1A\u52A1\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5806\u5185\u5B58-\u627E\u51FA\u4E1A\u52A1\u5BF9\u8C61" aria-hidden="true">#</a> \u67E5\u770B\u5806\u5185\u5B58\uFF0C\u627E\u51FA\u4E1A\u52A1\u5BF9\u8C61</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># top\u547D\u4EE4\uFF0C\u67E5\u770B java\u8FDB\u7A0B\u7684 pid</span>
<span class="token function">top</span>
<span class="token comment"># \u67E5\u770B\u5185\u5B58\u5360\u7528top10\u7684\u7EBF\u7A0B</span>
<span class="token function">ps</span> -mp <span class="token variable">\${PID}</span> -o THREAD,tid,time<span class="token operator">|</span><span class="token function">sort</span> -nr -k <span class="token number">2</span><span class="token operator">|</span><span class="token function">head</span> -n <span class="token number">10</span>
<span class="token comment"># \u8BA1\u7B97\u7EBF\u7A0B\u7684tid\u7684\u5341\u516D\u8FDB\u5236</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%x<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token variable">\${TID}</span>

<span class="token builtin class-name">cd</span> /usr/local/jdk1.8.0/bin/
<span class="token comment"># \u67E5\u770B\u7EBF\u7A0B\u7684\u5806\u6808\u4FE1\u606F\uFF08\u524D\u540E30\u884C\uFF09</span>
./jstack <span class="token variable">\${PID}</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token punctuation">{</span><span class="token number">16</span>\u8FDB\u5236TID<span class="token punctuation">}</span> -A <span class="token number">30</span>
<span class="token comment"># \u67E5\u770Bjava\u8FDB\u7A0B \u7684\u5806\u4FE1\u606F</span>
./jmap -heap <span class="token variable">\${PID}</span>
<span class="token comment"># \u67E5\u770B\u5185\u5B58\u5360\u7528top50\u7684\u5BF9\u8C61</span>
./jmap -histo <span class="token variable">\${PID}</span> <span class="token operator">|</span> <span class="token function">head</span> -n <span class="token number">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dump\u5806\u5185\u5B58\u6587\u4EF6\u548Cgc\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#dump\u5806\u5185\u5B58\u6587\u4EF6\u548Cgc\u65E5\u5FD7" aria-hidden="true">#</a> dump\u5806\u5185\u5B58\u6587\u4EF6\u548Cgc\u65E5\u5FD7</h2><ul><li>Out Of Memory\u4E4B\u540E\u81EA\u52A8\u751F\u6210dump\u6587\u4EF6\uFF0C\u901A\u5E38\u4FDD\u5B58\u5728/data/log/tomcat/dump\u76EE\u5F55\u4E0B</li><li>gc\u65E5\u5FD7 \u4E00\u822C\u5B58\u5728 /data/log/tomcat/gc \u76EE\u5F55\u4E0B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> java

<span class="token comment"># \u5806\u5185\u5B58</span>
<span class="token comment"># \u8FDB\u5165 jdk \u7684 bin \u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> /usr/local/jdk1.8.0/bin/
<span class="token comment"># \u5C06\u5185\u5B58 dump \u5230 /tmp</span>
./jmap -dump:format<span class="token operator">=</span>b,file<span class="token operator">=</span>/tmp/1.hprof <span class="token variable">\${PID}</span>

<span class="token comment"># \u67E5\u770Bgc\u65E5\u5FD7</span>
<span class="token builtin class-name">cd</span> /data/log/tomcat/gc/
<span class="token comment"># \u7136\u540E cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u6790\u5806\u5185\u5B58\u548Cgc\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u5806\u5185\u5B58\u548Cgc\u65E5\u5FD7" aria-hidden="true">#</a> \u5206\u6790\u5806\u5185\u5B58\u548Cgc\u65E5\u5FD7</h2><p>\u4F7F\u7528Java\u81EA\u5E26\u7684jvisualvm</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u672C\u5730\u6253\u5F00visualvm</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\${JAVA_HOME}</span> <span class="token operator">&amp;&amp;</span> ./jvisualvm
<span class="token comment"># \u5BFC\u5165 xx.hprof</span>
<span class="token comment"># \u5206\u6790\u5427\u3002\u3002\u67E5\u770B\u5360\u7528\u5185\u5B58\u6700\u5927\u90A3\u4E2A\u7C7B\u7684\u6765\u6E90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[l];function t(p,o){return s(),a("div",null,c)}var r=n(i,[["render",t],["__file","memory.html.vue"]]);export{r as default};
