(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{189:function(n,t){n.exports={attributes:{title:"Cara Memasang Disqus Comment di Nuxt JS",tags:"Nuxt, Tutorial, Disqus",date:"2020-06-28T00:00:00.000Z",excerpt:"Comment System merupakan komponen yang wajid ada dalam sebuah blog karena bisa digunakan untuk bertanya jawab antara pembaca dan author blog mengenai postingan yang dibuat.",hero:"disqus.png"},html:'<h2>Cara Pasang Disqus Comment di Nuxt JS</h2>\n<p><img src="/images/post/disqus/disqus.png" alt="Disqus dan Nuxt.JS"></p>\n<p>Comment System merupakan komponen yang wajid ada dalam sebuah blog karena bisa digunakan untuk bertanya jawab antara pembaca dan author blog mengenai postingan yang dibuat. Pada kesempatan kali ini kita akan belajar memasang / mengintegrasikan disqus dengan Nuxt.JS. Berikut adalah langkah-langkahnya.</p>\n<h3>1 . Install Vue-Disqus</h3>\n<p>Langkah pertama yang harus kita lakukan adalh instalasi Vue-disqus dapat menggunakan NPM (Node Package Manager).</p>\n<pre><code class="language-bash">npm install vue-disqus \n</code></pre>\n<h3>2. Membuat Plugins</h3>\n<p>Selanjutnya kita buat sebuah plugins pada directory <code>plugins</code>. Dengan nama bebas disini kita akan beri nama plugins nya adalah <code>disqus.js</code>. Kemudian isi dengan code berikut.</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>\n<span class="hljs-keyword">import</span> VueDisqus <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue-disqus&#x27;</span>\n\nVue.use(VueDisqus, {\n  <span class="hljs-attr">shortname</span>: <span class="hljs-string">&#x27;username_disqus_kamu&#x27;</span>\n})\n</code></pre>\n<h3>3. Pasang Plugins</h3>\n<p>Pada file <code>nuxt.config.js</code> kita pasang plugins yang sudah kita buat di <code>plugins/disqus.js</code> pada line berikut ini berguna agar nanti jika project kita dibuild maka plugins kita dapat diload.</p>\n<pre><code class="language-javascript"><span class="hljs-comment">// ...</span>\n<span class="hljs-attr">plugins</span>: [\n  <span class="hljs-string">&#x27;~/plugins/disqus&#x27;</span>\n]\n<span class="hljs-comment">// ...</span>\n</code></pre>\n<h3>4. Pasang ke Template</h3>\n<p>Karena Nuxt.JS ini sangat modular sekali kita bisa buat disqus sebagai component dan nantinya bisa dipanggil atau di import pada template/layout yang sudah kita buat sehingga nantinya disqus dapat lebih fleksibel akan ditampilkan pada halaman mana. Seperti contoh berikut saya membuat disqus sebagai component untuk nantinya dipanggil pada layouts post saya.</p>\n<p>Pada directory <code>components</code> kita buat file dengan nama <code>Disqus.vue</code></p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;comments&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Disqus</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</code></pre>\n<p>Selanjutnya tinggal kita import saja pada layouts yang ingin menampilkan disqus. Sebagai contoh saya ingin menampilkan disqus pada layouts post saya sehingga cara memanggilnya seperti berikut.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nuxt</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">Disqus</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> Disqus <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;~/components/Disqus.vue&quot;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    Disqus\n  }\n};\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n<p>Demikian sedikit sharing dari saya kurang dan lebihnya saya mohon maaf. <strong>Terimakasih dan Selamat mencoba :)</strong></p>\n<h4>Referensi</h4>\n<ul>\n<li><a href="https://ktquez.github.io/vue-disqus/howto/nuxt.html">https://ktquez.github.io/vue-disqus/howto/nuxt.html</a></li>\n</ul>\n'}}}]);