import{_ as i,o as l,c as t,a as s,b as a,d as n,e as d,r}from"./app.c78fb165.js";const o={},c=s("h1",{id:"_01-\u7EC8\u7AEF",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_01-\u7EC8\u7AEF","aria-hidden":"true"},"#"),n(" 01 - \u7EC8\u7AEF")],-1),u=s("h2",{id:"warp",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#warp","aria-hidden":"true"},"#"),n(" warp")],-1),v=n("\u4E0B\u8F7D\u5730\u5740 "),m={href:"https://www.warp.dev/",target:"_blank",rel:"noopener noreferrer"},p=n("https://www.warp.dev/"),b=n("\u4F7F\u7528\u6587\u6863 "),h={href:"https://docs.warp.dev/getting-started/getting-started-with-warp",target:"_blank",rel:"noopener noreferrer"},g=n("https://docs.warp.dev/getting-started/getting-started-with-warp"),k={href:"https://iterm2.com/",target:"_blank",rel:"noopener noreferrer"},_=n("https://iterm2.com/"),q=d(`<h3 id="\u5B89\u88C5homebrew" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5homebrew" aria-hidden="true">#</a> \u5B89\u88C5HomeBrew</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> xcode-select --install
 ruby -e &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5oh-my-zsh" aria-hidden="true">#</a> \u5B89\u88C5Oh My Zsh</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew install git
brew install Zsh
brew install wget
brew install unrar
brew search 7z
brew install p7zip

sh -c &quot;$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-Zsh/master/tools/install.sh -O -)&quot;

\u6DFB\u52A0alias:
vim ~/.zshrc
G 
o

alias study=&quot;cd /Users/nibnait/Library/Mobile\\ Documents/com~apple~CloudDocs/Study_Note&quot;
alias redis=&quot;/Users/nibnait/redis-6.0.9/src/redis-server /Users/nibnait/redis-6.0.9/redis.conf&quot;
alias rcli=&quot;/Users/nibnait/redis-6.0.9/src/redis-cli&quot;
alias gcu=&quot;git checkout master_uat&quot;
alias gcr=&quot;git checkout release&quot;
alias gct=&quot;git checkout tianbin&quot;
alias nrm=&quot;sudo npm run mall-dev&quot;
alias nrd=&quot;npm run dev&quot;
alias rime=&quot;cd /Users/nibnait/Library/Rime&quot;
# alias mvp=&quot;mvn clean package -DskipTests&quot;
# alias mvd=&quot;mvn clean deploy -DskipTests&quot;
alias mvp=&quot;mvn clean package -Dmaven.test.skip=true&quot;
alias mvd=&quot;mvn clean deploy -Dmaven.test.skip=true&quot;
alias mvdr=&quot;mvn clean deploy -P release&quot;
alias mvc=&quot;mvn clean&quot;
alias mvi=&quot;mvn clean install&quot;
alias gt=&quot;git tag&quot;
alias mybatis=&quot;cd /Users/nibnait/bilibili/mybatis-generator-gui &amp;&amp; java -jar mybatis-generator-gui.jar&quot;
alias sshcentos1=&quot;sshpass -p \\&#39; ssh -p 22 nibnait@10.211.55.12 -t &#39;cd /home/nibnait/Desktop/redis-1.x/redis-1.3.6; bash --login&#39;&quot;
alias vd=&#39;vuepress dev docs&#39;
alias vb=&#39;vuepress build docs&#39;
alias yd=&#39;yarn docs:dev&#39;
alias yb=&#39;yarn docs:build&#39;

export GO_HOME=/usr/loacl/go
export MAVEN_HOME=/Users/nibnait/apache-maven-3.6.3
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_231.jdk/Contents/Home
export NVM_DIR=&quot;$HOME/.nvm&quot;
export NODE_HOME=/Users/nibnait/.nvm/versions/node/v14.15.5
[ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot;  # This loads nvm
[ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/bash_completion&quot;  # This loads nvm bash_completion
export PATH=$PATH:$MAVEN_HOME/bin:/usr/local/mysql/bin:$JAVA_HOME/bin:$GO_HOME/bin:$JAVA_HOME/lib/sa-jdi.jar
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export GOPROXY=https://goproxy.io,direct
export GO111MODULE=on

export NVM_DIR=&quot;$HOME/.nvm&quot;
  [ -s &quot;/usr/local/opt/nvm/nvm.sh&quot; ] &amp;&amp; . &quot;/usr/local/opt/nvm/nvm.sh&quot;  # This loads nvm
  [ -s &quot;/usr/local/opt/nvm/etc/bash_completion.d/nvm&quot; ] &amp;&amp; . &quot;/usr/local/opt/nvm/etc/bash_completion.d/nvm&quot;  # This loads nvm bash_completion

source ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux\u7CFB\u7EDF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#linux\u7CFB\u7EDF\u914D\u7F6E" aria-hidden="true">#</a> Linux\u7CFB\u7EDF\u914D\u7F6E</h2><h3 id="zsh" tabindex="-1"><a class="header-anchor" href="#zsh" aria-hidden="true">#</a> zsh</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># centos</span>
<span class="token function">sudo</span> yum -y <span class="token function">install</span> <span class="token function">zsh</span>
<span class="token comment"># ubuntu debian</span>
<span class="token function">sudo</span> <span class="token function">apt</span> -y <span class="token function">install</span> <span class="token function">zsh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#oh-my-zsh" aria-hidden="true">#</a> Oh My Zsh</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">git</span>

<span class="token comment">#\u56FD\u5916\u670D\u52A1\u5668\u7528\u8FD9\u4E2A\u5B89\u88C5</span>
<span class="token function">sh</span> -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>

<span class="token comment">#\u56FD\u5185\u670D\u52A1\u5668\u5982\u679C\u7528\u4E0A\u8FB9\u7684\u547D\u4EE4\u5B89\u88C5\u4E0D\u4E86\uFF0C\u53EF\u4EE5\u7528gitee\u540C\u6B65\u7684\u4ED3\u5E93\u6765\u5B89\u88C5</span>
<span class="token function">sh</span> -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u6709\u62A5\u9519</span>
<span class="token comment"># Error: git clone of oh-my-zsh repo failed</span>
yum update -y nss <span class="token function">curl</span> libcurl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span> 
<span class="token comment"># \u5373\u53EF\u68C0\u6D4B\u4F60\u5F53\u524D\u662F\u4EC0\u4E48shell\uFF0C\u6B63\u5E38\u7684\u8BDD\u5E94\u8BE5\u8F93\u51FA\uFF1A/bin/zsh</span>
<span class="token comment"># \u5982\u679C\u4E0D\u662Fzsh\uFF0C\u6216\u8005\u4F60\u9000\u51FA\u518D\u8FDB\u518D\u68C0\u6D4B\uFF0C\u53D1\u73B0\u4E0D\u662Fzsh\uFF0C\u90A3\u5C31\u6267\u884C\u4E00\u6B21</span>
chsh -s /bin/zsh
<span class="token comment"># \u547D\u4EE4\u5207\u6362\u5230zsh\u5C31\u884C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sshpass" tabindex="-1"><a class="header-anchor" href="#sshpass" aria-hidden="true">#</a> sshpass</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://sourceforge.net/projects/sshpass/files/sshpass/1.05/sshpass-1.05.tar.gz
<span class="token function">tar</span> xvzf sshpass-1.05.tar.gz
<span class="token builtin class-name">cd</span> sshpass-1.05
./configure
<span class="token function">make</span>  
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sshpass -p <span class="token punctuation">[</span>passwd<span class="token punctuation">]</span> <span class="token function">ssh</span> -p <span class="token punctuation">[</span>port<span class="token punctuation">]</span> root@192.168.X.X

sshpass -p <span class="token punctuation">\\</span>&#39; <span class="token function">ssh</span> -p <span class="token number">22</span> nibnait@10.211.55.12 -t <span class="token string">&#39;cd /home/nibnait/Desktop/redis-1.x/redis-1.3.6; bash --login&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function f(x,y){const e=r("ExternalLinkIcon");return l(),t("div",null,[c,u,s("p",null,[v,s("a",m,[p,a(e)])]),s("p",null,[b,s("a",h,[g,a(e)])]),s("p",null,[s("s",null,[s("a",k,[_,a(e)])])]),q])}var z=i(o,[["render",f],["__file","01-terminal.html.vue"]]);export{z as default};
