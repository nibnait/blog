import{_ as s,o as n,c as a,e}from"./app.dc8d7f63.js";const i={},l=e(`<h1 id="mysql-\u5BC6\u7801\u5FD8\u4E86" tabindex="-1"><a class="header-anchor" href="#mysql-\u5BC6\u7801\u5FD8\u4E86" aria-hidden="true">#</a> mysql \u5BC6\u7801\u5FD8\u4E86</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/my.cnf
skip-grant-tables

/etc/init.d/mysqld restart

mysql -u root

use mysql<span class="token punctuation">;</span>
update user <span class="token builtin class-name">set</span> password <span class="token operator">=</span> password<span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span> where user <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span>

/etc/init.d/mysqld restart

<span class="token function">vim</span> /etc/my.cnf
\u5220\u6389 skip-grant-tables

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDC\u7A0B\u767B\u5F55 \u4E91\u670D\u52A1\u5668 \u4E0A\u7684 mysql</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
use mysql<span class="token punctuation">;</span>
update <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">&#39;\u672C\u5730ip&#39;</span>,password<span class="token operator">=</span><span class="token string">&#39;copy \u4E0B localhost \u7528\u6237\u7684\u5BC6\u7801&#39;</span> where <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">&#39;vm-centos-xxx&#39;</span> and <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function c(r,o){return n(),a("div",null,t)}var d=s(i,[["render",c],["__file","03-mysql-password.html.vue"]]);export{d as default};
