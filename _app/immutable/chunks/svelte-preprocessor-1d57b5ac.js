import{S as dt,i as mt,s as ft,k as p,q as c,a as r,l as o,m as l,r as i,h as a,c as k,n as u,b as e,F as s,C as ys}from"./index-920be987.js";const yt="jpeg",vt=1200,wt=533,gt="srgb",bt=3,Et="uchar",_t=72,It="4:2:0",jt=!1,At=!1,Pt=!1,xt=1,Mt=2.25140712945591,Tt=!0,St=!1,Ht=""+new URL("../assets/svelte-balls-81dbce81.jpeg",import.meta.url).href,Ct={format:yt,width:vt,height:wt,space:gt,channels:bt,depth:Et,density:_t,chromaSubsampling:It,isProgressive:jt,hasProfile:At,hasAlpha:Pt,orientation:xt,aspect:Mt,withoutEnlargement:Tt,withoutReduction:St,src:Ht};function Lt(Fs){let v,ia,In,Y,ua,jn,w,g,en,ra,An,b,ka,L,ha,da,Pn,F,ma,xn,O,Vs=`<code class="language-undefined">---
title: My article
thumbnail: ./local-image.jpg
...
---</code>`,Mn,V,fa,Tn,D,Js=`<code class="language-md"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml">title: My article
...</span>
<span class="token punctuation">---</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    import thumb from "./local-image.jpg"
    metadata.thumbnail = thumb;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

the post text</code>`,Sn,J,ya,Hn,K,va,Cn,E,_,pn,wa,Ln,d,ga,on,ba,Ea,ln,_a,Ia,On,R,Ks=`<code class="language-js"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">preprocessors</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">vitePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">mdsvex</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// ....</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,Dn,I,ja,cn,Aa,Pa,Rn,m,xa,un,Ma,Ta,rn,Sa,Ha,Wn,j,A,kn,Ca,Bn,Q,La,Nn,W,Qs=`<code class="language-js"><span class="token keyword">const</span> myPlugin <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">async</span> <span class="token function">markup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> content<span class="token punctuation">,</span> filename <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// do your thing here</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> newContentString<span class="token punctuation">,</span>
      <span class="token literal-property property">map</span><span class="token operator">:</span> theSourceMapOfChanges<span class="token punctuation">,</span> <span class="token comment">// optional</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,Un,f,Oa,hn,Da,Ra,dn,Wa,Ba,qn,X,Na,$n,B,Xs=`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> parse<span class="token punctuation">,</span> walk <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"svelte/compiler"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myPlugin <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">async</span> <span class="token function">markup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> content<span class="token punctuation">,</span> filename <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> filename <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">walk</span><span class="token punctuation">(</span>ast<span class="token punctuation">.</span>module<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
      <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// do your thing here</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> newContentString<span class="token punctuation">,</span>
      <span class="token literal-property property">map</span><span class="token operator">:</span> theSourceMapOfChanges<span class="token punctuation">,</span> <span class="token comment">// optional</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,zn,P,Ua,N,qa,$a,Gn,U,Zs=`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> parse<span class="token punctuation">,</span> walk <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"svelte/compiler"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MagicString <span class="token keyword">from</span> <span class="token string">"magic-string"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myPlugin <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">async</span> <span class="token function">markup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> content<span class="token punctuation">,</span> filename <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> filename <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MagicString</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">walk</span><span class="token punctuation">(</span>ast<span class="token punctuation">.</span>module<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
      <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// do your thing here</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> s<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">map</span><span class="token operator">:</span> s<span class="token punctuation">.</span><span class="token function">generateMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,Yn,x,M,mn,za,Fn,y,Ga,fn,Ya,Fa,yn,Va,Ja,Vn,q,nt=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"My article"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"Blah blah blah"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">thumbnail</span><span class="token operator">:</span> <span class="token string">"./local-image.jpg"</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

the rest of the content</code>`,Jn,T,Ka,vn,Qa,Xa,Kn,S,Za,wn,ns,as,Qn,$,at=`<code class="language-js"><span class="token function">walk</span><span class="token punctuation">(</span>ast<span class="token punctuation">.</span>module<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
  <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// finding the &#96;metadata&#96; const declaration</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">"VariableDeclarator"</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>id<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">"metadata"</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> property <span class="token keyword">of</span> node<span class="token punctuation">.</span>init<span class="token punctuation">.</span>properties<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// finding the &#96;thumbnail&#96; property</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>property<span class="token punctuation">.</span>key<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">"thumbnail"</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">const</span> importThumb <span class="token operator">=</span>
            <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">import THUMBNAIL from "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>property<span class="token punctuation">.</span>value<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">?w=1200&amp;h=600&amp;metadata";</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>

          <span class="token comment">// adding the native thumb import to the source code</span>
          s<span class="token punctuation">.</span><span class="token function">appendLeft</span><span class="token punctuation">(</span>ast<span class="token punctuation">.</span>module<span class="token punctuation">.</span>content<span class="token punctuation">.</span>start<span class="token punctuation">,</span> importThumb<span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token comment">// replacing the o/g path with the new imported variable name</span>
          s<span class="token punctuation">.</span><span class="token function">overwrite</span><span class="token punctuation">(</span>property<span class="token punctuation">.</span>value<span class="token punctuation">.</span>start<span class="token punctuation">,</span> property<span class="token punctuation">.</span>value<span class="token punctuation">.</span>end<span class="token punctuation">,</span> <span class="token string">"THUMBNAIL"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,Xn,H,ss,gn,ts,es,Zn,z,st=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token constant">THUMBNAIL</span> <span class="token keyword">from</span> <span class="token string">"./local-image.jpg?w=1200&amp;h=600&amp;metadata"</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"My article"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"Blah blah blah"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">thumbnail</span><span class="token operator">:</span> <span class="token constant">THUMBNAIL</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

the rest of the content</code>`,na,h,ps,bn,os,ls,En,cs,is,_n,us,rs,aa,G,tt=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">const</span> post<span class="token punctuation">;</span> <span class="token comment">// &lt;- the imported .md post</span>

    <span class="token literal-property property">$</span><span class="token operator">:</span> thumb <span class="token operator">=</span> post<span class="token punctuation">.</span>thumbnail<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> thumb<span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:image<span class="token punctuation">"</span></span> <span class="token attr-name">content=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>thumb<span class="token punctuation">.</span>src<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:image:width<span class="token punctuation">"</span></span> <span class="token attr-name">content=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>thumb<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:image:height<span class="token punctuation">"</span></span> <span class="token attr-name">content=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>thumb<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span></code>`,sa,Z,ks;return{c(){v=p("p"),ia=c(`The other day I needed to do a bit of a weird thing in Svelte on this website,
and I ended up making a small preprocessor plugin. It’s a fun little project,
and I thought it’s worth sharing the details.`),In=r(),Y=p("p"),ua=c(`Before I start, an acknowledgement. I didn’t invent any of the code in here, I’m
just trying to walk you through how this thing works. Matter of fact, I have
lifted the o/g idea from Github comments somewhere.`),jn=r(),w=p("h2"),g=p("a"),en=p("span"),ra=c("What’s the problem?"),An=r(),b=p("p"),ka=c(`I have all my posts in isolated markdown files, and I want them to know nothing
of the application that renders them. It works fine by the most part, the
`),L=p("a"),ha=c("mdsvex"),da=c(` plugin imports and preprocesses the markdown
files just fine. It’s actually pretty darn great at it.`),Pn=r(),F=p("p"),ma=c(`The thing is though, it doesn’t really preprocess the front-matter metadata. And
that’s a problem for me because I want to specify thumbnail images for my
articles, and I want those images to be processed by the svelte/vite pipelines
like everything else:`),xn=r(),O=p("pre"),Mn=r(),V=p("p"),fa=c(`I could in theory just use mdsvex for what it was designed for and just import
the image in an embedded script like so:`),Tn=r(),D=p("pre"),Sn=r(),J=p("p"),ya=c(`Call me pedantic, but, I don’t like the idea because it breaks the idea of
keeping my markdown files agnostic from the application. Adn it’s likely to
become a problem down the road when I decide to publish those articles somewhere
else.`),Hn=r(),K=p("p"),va=c(`So, I wanted some magic thing that would pre-process those markdown files for me
and make them compatible with the svelte/vite ecosystem without me touching the
files. And so enter the svelte plugins ecosystem.`),Cn=r(),E=p("h2"),_=p("a"),pn=p("span"),wa=c("Svelte pre-processing plugins"),Ln=r(),d=p("p"),ga=c("When you look inside of your "),on=p("code"),ba=c("svelte.config.js"),Ea=c(` file you will see the
`),ln=p("code"),_a=c("preprocessors"),Ia=c(" section:"),On=r(),R=p("pre"),Dn=r(),I=p("p"),ja=c(`What those plugins do is they, well, preprocess the source code files that are
being imported into the application `),cn=p("em"),Aa=c("before"),Pa=c(` they are finally imported and
initialized.`),Rn=r(),m=p("p"),xa=c(`Think of this as basically meta programming, it’s a way to modify the source
code and possibly generate more code before a module is fully initialised.
That’s what `),un=p("code"),Ma=c("mdsvex"),Ta=c(` does in a nut shell, they turn the original markdown file
into basically a `),rn=p("code"),Sa=c(".svelte"),Ha=c(` file which then can be imported by the svelte/vite
ecosystem as a regular module.`),Wn=r(),j=p("h2"),A=p("a"),kn=p("span"),Ca=c("How does it work?"),Bn=r(),Q=p("p"),La=c(`It works quite simple on the inside, a preprocessor plugin is basically an async
function that receives a file name and content, and returns modified version of
the code and a source map of the changes.`),Nn=r(),W=p("pre"),Un=r(),f=p("p"),Oa=c("Once you have that, you can just plug it into the "),hn=p("code"),Da=c("preprocessors"),Ra=c(` list in the
`),dn=p("code"),Wa=c("svelte.conf.js"),Ba=c(` file and it will dutifully shovel everything that’s being
imported into the application through your function.`),qn=r(),X=p("p"),Na=c(`To mess with the original content, svelte also has some handy functions to parse
the content into an AST and traverse the tree. Svelte is pretty dope like that.`),$n=r(),B=p("pre"),zn=r(),P=p("p"),Ua=c(`You probably don’t want to edit the original content manually, though. And
instead use something like the
`),N=p("a"),qa=c("magic-string"),$a=c(` package to safely
edit your codebase, and generate the source-map for your changes. Like so:`),Gn=r(),U=p("pre"),Yn=r(),x=p("h2"),M=p("a"),mn=p("span"),za=c("An example"),Fn=r(),y=p("p"),Ga=c("I have my little thumbnail preprocessing function plugged in "),fn=p("em"),Ya=c("after"),Fa=c(` the mdsvex
does its thing. Meaning it sees an already processed markdown file that was
turned into a `),yn=p("code"),Va=c(".svelte"),Ja=c(` file. And at the header of it will have a module
declaration string that looks like so:`),Vn=r(),q=p("pre"),Jn=r(),T=p("p"),Ka=c("What I want my plugin to do is to find that "),vn=p("code"),Qa=c("metadata"),Xa=c(` const declaration and
replace it with a svelte native image import; preferably with the imagetools
optimisation parameters.`),Kn=r(),S=p("p"),Za=c(`To that end, I’m using the svelte’s built in AST parser and walker; and then I
use the `),wn=p("code"),ns=c("magic-string"),as=c(" to safely patch the declaration."),Qn=r(),$=p("pre"),Xn=r(),H=p("p"),ss=c("And that’s all there is to it. In the end this plugin will produce a "),gn=p("code"),ts=c(".svelte"),es=c(`
file that looks somewhat like this:`),Zn=r(),z=p("pre"),na=r(),h=p("p"),ps=c("And so, when the file is finally imported by svelte it will have the "),bn=p("code"),os=c("thumbnail"),ls=c(`
property on the `),En=p("code"),cs=c("metadata"),is=c(" export. And that "),_n=p("code"),us=c("thumbnail"),rs=c(` will be a regular Svelte
image import. Which, you can then use normally anywhere in the app, for example
add it to the open graph meta tags like so:`),aa=r(),G=p("pre"),sa=r(),Z=p("p"),ks=c("And that’s pretty much the whole story. Enjoy!"),this.h()},l(n){v=o(n,"P",{});var t=l(v);ia=i(t,`The other day I needed to do a bit of a weird thing in Svelte on this website,
and I ended up making a small preprocessor plugin. It’s a fun little project,
and I thought it’s worth sharing the details.`),t.forEach(a),In=k(n),Y=o(n,"P",{});var vs=l(Y);ua=i(vs,`Before I start, an acknowledgement. I didn’t invent any of the code in here, I’m
just trying to walk you through how this thing works. Matter of fact, I have
lifted the o/g idea from Github comments somewhere.`),vs.forEach(a),jn=k(n),w=o(n,"H2",{id:!0});var hs=l(w);g=o(hs,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ws=l(g);en=o(ws,"SPAN",{class:!0}),l(en).forEach(a),ws.forEach(a),ra=i(hs,"What’s the problem?"),hs.forEach(a),An=k(n),b=o(n,"P",{});var ta=l(b);ka=i(ta,`I have all my posts in isolated markdown files, and I want them to know nothing
of the application that renders them. It works fine by the most part, the
`),L=o(ta,"A",{href:!0,rel:!0});var gs=l(L);ha=i(gs,"mdsvex"),gs.forEach(a),da=i(ta,` plugin imports and preprocesses the markdown
files just fine. It’s actually pretty darn great at it.`),ta.forEach(a),Pn=k(n),F=o(n,"P",{});var bs=l(F);ma=i(bs,`The thing is though, it doesn’t really preprocess the front-matter metadata. And
that’s a problem for me because I want to specify thumbnail images for my
articles, and I want those images to be processed by the svelte/vite pipelines
like everything else:`),bs.forEach(a),xn=k(n),O=o(n,"PRE",{class:!0});var et=l(O);et.forEach(a),Mn=k(n),V=o(n,"P",{});var Es=l(V);fa=i(Es,`I could in theory just use mdsvex for what it was designed for and just import
the image in an embedded script like so:`),Es.forEach(a),Tn=k(n),D=o(n,"PRE",{class:!0});var pt=l(D);pt.forEach(a),Sn=k(n),J=o(n,"P",{});var _s=l(J);ya=i(_s,`Call me pedantic, but, I don’t like the idea because it breaks the idea of
keeping my markdown files agnostic from the application. Adn it’s likely to
become a problem down the road when I decide to publish those articles somewhere
else.`),_s.forEach(a),Hn=k(n),K=o(n,"P",{});var Is=l(K);va=i(Is,`So, I wanted some magic thing that would pre-process those markdown files for me
and make them compatible with the svelte/vite ecosystem without me touching the
files. And so enter the svelte plugins ecosystem.`),Is.forEach(a),Cn=k(n),E=o(n,"H2",{id:!0});var ds=l(E);_=o(ds,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var js=l(_);pn=o(js,"SPAN",{class:!0}),l(pn).forEach(a),js.forEach(a),wa=i(ds,"Svelte pre-processing plugins"),ds.forEach(a),Ln=k(n),d=o(n,"P",{});var nn=l(d);ga=i(nn,"When you look inside of your "),on=o(nn,"CODE",{});var As=l(on);ba=i(As,"svelte.config.js"),As.forEach(a),Ea=i(nn,` file you will see the
`),ln=o(nn,"CODE",{});var Ps=l(ln);_a=i(Ps,"preprocessors"),Ps.forEach(a),Ia=i(nn," section:"),nn.forEach(a),On=k(n),R=o(n,"PRE",{class:!0});var ot=l(R);ot.forEach(a),Dn=k(n),I=o(n,"P",{});var ea=l(I);ja=i(ea,`What those plugins do is they, well, preprocess the source code files that are
being imported into the application `),cn=o(ea,"EM",{});var xs=l(cn);Aa=i(xs,"before"),xs.forEach(a),Pa=i(ea,` they are finally imported and
initialized.`),ea.forEach(a),Rn=k(n),m=o(n,"P",{});var an=l(m);xa=i(an,`Think of this as basically meta programming, it’s a way to modify the source
code and possibly generate more code before a module is fully initialised.
That’s what `),un=o(an,"CODE",{});var Ms=l(un);Ma=i(Ms,"mdsvex"),Ms.forEach(a),Ta=i(an,` does in a nut shell, they turn the original markdown file
into basically a `),rn=o(an,"CODE",{});var Ts=l(rn);Sa=i(Ts,".svelte"),Ts.forEach(a),Ha=i(an,` file which then can be imported by the svelte/vite
ecosystem as a regular module.`),an.forEach(a),Wn=k(n),j=o(n,"H2",{id:!0});var ms=l(j);A=o(ms,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ss=l(A);kn=o(Ss,"SPAN",{class:!0}),l(kn).forEach(a),Ss.forEach(a),Ca=i(ms,"How does it work?"),ms.forEach(a),Bn=k(n),Q=o(n,"P",{});var Hs=l(Q);La=i(Hs,`It works quite simple on the inside, a preprocessor plugin is basically an async
function that receives a file name and content, and returns modified version of
the code and a source map of the changes.`),Hs.forEach(a),Nn=k(n),W=o(n,"PRE",{class:!0});var lt=l(W);lt.forEach(a),Un=k(n),f=o(n,"P",{});var sn=l(f);Oa=i(sn,"Once you have that, you can just plug it into the "),hn=o(sn,"CODE",{});var Cs=l(hn);Da=i(Cs,"preprocessors"),Cs.forEach(a),Ra=i(sn,` list in the
`),dn=o(sn,"CODE",{});var Ls=l(dn);Wa=i(Ls,"svelte.conf.js"),Ls.forEach(a),Ba=i(sn,` file and it will dutifully shovel everything that’s being
imported into the application through your function.`),sn.forEach(a),qn=k(n),X=o(n,"P",{});var Os=l(X);Na=i(Os,`To mess with the original content, svelte also has some handy functions to parse
the content into an AST and traverse the tree. Svelte is pretty dope like that.`),Os.forEach(a),$n=k(n),B=o(n,"PRE",{class:!0});var ct=l(B);ct.forEach(a),zn=k(n),P=o(n,"P",{});var pa=l(P);Ua=i(pa,`You probably don’t want to edit the original content manually, though. And
instead use something like the
`),N=o(pa,"A",{href:!0,rel:!0});var Ds=l(N);qa=i(Ds,"magic-string"),Ds.forEach(a),$a=i(pa,` package to safely
edit your codebase, and generate the source-map for your changes. Like so:`),pa.forEach(a),Gn=k(n),U=o(n,"PRE",{class:!0});var it=l(U);it.forEach(a),Yn=k(n),x=o(n,"H2",{id:!0});var fs=l(x);M=o(fs,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Rs=l(M);mn=o(Rs,"SPAN",{class:!0}),l(mn).forEach(a),Rs.forEach(a),za=i(fs,"An example"),fs.forEach(a),Fn=k(n),y=o(n,"P",{});var tn=l(y);Ga=i(tn,"I have my little thumbnail preprocessing function plugged in "),fn=o(tn,"EM",{});var Ws=l(fn);Ya=i(Ws,"after"),Ws.forEach(a),Fa=i(tn,` the mdsvex
does its thing. Meaning it sees an already processed markdown file that was
turned into a `),yn=o(tn,"CODE",{});var Bs=l(yn);Va=i(Bs,".svelte"),Bs.forEach(a),Ja=i(tn,` file. And at the header of it will have a module
declaration string that looks like so:`),tn.forEach(a),Vn=k(n),q=o(n,"PRE",{class:!0});var ut=l(q);ut.forEach(a),Jn=k(n),T=o(n,"P",{});var oa=l(T);Ka=i(oa,"What I want my plugin to do is to find that "),vn=o(oa,"CODE",{});var Ns=l(vn);Qa=i(Ns,"metadata"),Ns.forEach(a),Xa=i(oa,` const declaration and
replace it with a svelte native image import; preferably with the imagetools
optimisation parameters.`),oa.forEach(a),Kn=k(n),S=o(n,"P",{});var la=l(S);Za=i(la,`To that end, I’m using the svelte’s built in AST parser and walker; and then I
use the `),wn=o(la,"CODE",{});var Us=l(wn);ns=i(Us,"magic-string"),Us.forEach(a),as=i(la," to safely patch the declaration."),la.forEach(a),Qn=k(n),$=o(n,"PRE",{class:!0});var rt=l($);rt.forEach(a),Xn=k(n),H=o(n,"P",{});var ca=l(H);ss=i(ca,"And that’s all there is to it. In the end this plugin will produce a "),gn=o(ca,"CODE",{});var qs=l(gn);ts=i(qs,".svelte"),qs.forEach(a),es=i(ca,`
file that looks somewhat like this:`),ca.forEach(a),Zn=k(n),z=o(n,"PRE",{class:!0});var kt=l(z);kt.forEach(a),na=k(n),h=o(n,"P",{});var C=l(h);ps=i(C,"And so, when the file is finally imported by svelte it will have the "),bn=o(C,"CODE",{});var $s=l(bn);os=i($s,"thumbnail"),$s.forEach(a),ls=i(C,`
property on the `),En=o(C,"CODE",{});var zs=l(En);cs=i(zs,"metadata"),zs.forEach(a),is=i(C," export. And that "),_n=o(C,"CODE",{});var Gs=l(_n);us=i(Gs,"thumbnail"),Gs.forEach(a),rs=i(C,` will be a regular Svelte
image import. Which, you can then use normally anywhere in the app, for example
add it to the open graph meta tags like so:`),C.forEach(a),aa=k(n),G=o(n,"PRE",{class:!0});var ht=l(G);ht.forEach(a),sa=k(n),Z=o(n,"P",{});var Ys=l(Z);ks=i(Ys,"And that’s pretty much the whole story. Enjoy!"),Ys.forEach(a),this.h()},h(){u(en,"class","icon icon-link"),u(g,"aria-hidden","true"),u(g,"tabindex","-1"),u(g,"href","#whats-the-problem"),u(w,"id","whats-the-problem"),u(L,"href","https://mdsvex.pngwn.io"),u(L,"rel","nofollow"),u(O,"class","language-undefined"),u(D,"class","language-md"),u(pn,"class","icon icon-link"),u(_,"aria-hidden","true"),u(_,"tabindex","-1"),u(_,"href","#svelte-pre-processing-plugins"),u(E,"id","svelte-pre-processing-plugins"),u(R,"class","language-js"),u(kn,"class","icon icon-link"),u(A,"aria-hidden","true"),u(A,"tabindex","-1"),u(A,"href","#how-does-it-work"),u(j,"id","how-does-it-work"),u(W,"class","language-js"),u(B,"class","language-js"),u(N,"href","https://www.npmjs.com/package/magic-string"),u(N,"rel","nofollow"),u(U,"class","language-js"),u(mn,"class","icon icon-link"),u(M,"aria-hidden","true"),u(M,"tabindex","-1"),u(M,"href","#an-example"),u(x,"id","an-example"),u(q,"class","language-svelte"),u($,"class","language-js"),u(z,"class","language-svelte"),u(G,"class","language-svelte")},m(n,t){e(n,v,t),s(v,ia),e(n,In,t),e(n,Y,t),s(Y,ua),e(n,jn,t),e(n,w,t),s(w,g),s(g,en),s(w,ra),e(n,An,t),e(n,b,t),s(b,ka),s(b,L),s(L,ha),s(b,da),e(n,Pn,t),e(n,F,t),s(F,ma),e(n,xn,t),e(n,O,t),O.innerHTML=Vs,e(n,Mn,t),e(n,V,t),s(V,fa),e(n,Tn,t),e(n,D,t),D.innerHTML=Js,e(n,Sn,t),e(n,J,t),s(J,ya),e(n,Hn,t),e(n,K,t),s(K,va),e(n,Cn,t),e(n,E,t),s(E,_),s(_,pn),s(E,wa),e(n,Ln,t),e(n,d,t),s(d,ga),s(d,on),s(on,ba),s(d,Ea),s(d,ln),s(ln,_a),s(d,Ia),e(n,On,t),e(n,R,t),R.innerHTML=Ks,e(n,Dn,t),e(n,I,t),s(I,ja),s(I,cn),s(cn,Aa),s(I,Pa),e(n,Rn,t),e(n,m,t),s(m,xa),s(m,un),s(un,Ma),s(m,Ta),s(m,rn),s(rn,Sa),s(m,Ha),e(n,Wn,t),e(n,j,t),s(j,A),s(A,kn),s(j,Ca),e(n,Bn,t),e(n,Q,t),s(Q,La),e(n,Nn,t),e(n,W,t),W.innerHTML=Qs,e(n,Un,t),e(n,f,t),s(f,Oa),s(f,hn),s(hn,Da),s(f,Ra),s(f,dn),s(dn,Wa),s(f,Ba),e(n,qn,t),e(n,X,t),s(X,Na),e(n,$n,t),e(n,B,t),B.innerHTML=Xs,e(n,zn,t),e(n,P,t),s(P,Ua),s(P,N),s(N,qa),s(P,$a),e(n,Gn,t),e(n,U,t),U.innerHTML=Zs,e(n,Yn,t),e(n,x,t),s(x,M),s(M,mn),s(x,za),e(n,Fn,t),e(n,y,t),s(y,Ga),s(y,fn),s(fn,Ya),s(y,Fa),s(y,yn),s(yn,Va),s(y,Ja),e(n,Vn,t),e(n,q,t),q.innerHTML=nt,e(n,Jn,t),e(n,T,t),s(T,Ka),s(T,vn),s(vn,Qa),s(T,Xa),e(n,Kn,t),e(n,S,t),s(S,Za),s(S,wn),s(wn,ns),s(S,as),e(n,Qn,t),e(n,$,t),$.innerHTML=at,e(n,Xn,t),e(n,H,t),s(H,ss),s(H,gn),s(gn,ts),s(H,es),e(n,Zn,t),e(n,z,t),z.innerHTML=st,e(n,na,t),e(n,h,t),s(h,ps),s(h,bn),s(bn,os),s(h,ls),s(h,En),s(En,cs),s(h,is),s(h,_n),s(_n,us),s(h,rs),e(n,aa,t),e(n,G,t),G.innerHTML=tt,e(n,sa,t),e(n,Z,t),s(Z,ks)},p:ys,i:ys,o:ys,d(n){n&&a(v),n&&a(In),n&&a(Y),n&&a(jn),n&&a(w),n&&a(An),n&&a(b),n&&a(Pn),n&&a(F),n&&a(xn),n&&a(O),n&&a(Mn),n&&a(V),n&&a(Tn),n&&a(D),n&&a(Sn),n&&a(J),n&&a(Hn),n&&a(K),n&&a(Cn),n&&a(E),n&&a(Ln),n&&a(d),n&&a(On),n&&a(R),n&&a(Dn),n&&a(I),n&&a(Rn),n&&a(m),n&&a(Wn),n&&a(j),n&&a(Bn),n&&a(Q),n&&a(Nn),n&&a(W),n&&a(Un),n&&a(f),n&&a(qn),n&&a(X),n&&a($n),n&&a(B),n&&a(zn),n&&a(P),n&&a(Gn),n&&a(U),n&&a(Yn),n&&a(x),n&&a(Fn),n&&a(y),n&&a(Vn),n&&a(q),n&&a(Jn),n&&a(T),n&&a(Kn),n&&a(S),n&&a(Qn),n&&a($),n&&a(Xn),n&&a(H),n&&a(Zn),n&&a(z),n&&a(na),n&&a(h),n&&a(aa),n&&a(G),n&&a(sa),n&&a(Z)}}}const Dt={slug:"nIAeA",date:"1 March 2023",title:"How to make a svelte preprocessor",description:"A bit of a deep dive into Svelte plugins system",thumbnail:Ct,tags:["svelte","javascript"]};class Rt extends dt{constructor(v){super(),mt(this,v,null,Lt,ft,{})}}export{Rt as default,Dt as metadata};
