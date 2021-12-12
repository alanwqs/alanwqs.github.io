/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "206cf5b40511d9e0373f5b040b128f61"
  },
  {
    "url": "accumulate/index.html",
    "revision": "9cd956c8a26dd38dfc2d6930d71b2ad1"
  },
  {
    "url": "algorithm/2020.html",
    "revision": "041b7024eed934acc6676343ceb487c0"
  },
  {
    "url": "algorithm/aliTop100.html",
    "revision": "b089862574d8c0a7bc15d0517ad18c61"
  },
  {
    "url": "algorithm/byte-dance.html",
    "revision": "80fb3dff92403c589c448985c7e0c24c"
  },
  {
    "url": "algorithm/class.html",
    "revision": "aa0751e7abbe91565b5902d67eb41d4c"
  },
  {
    "url": "algorithm/front-end.html",
    "revision": "f86515300e52f4088164b8a9c772679b"
  },
  {
    "url": "algorithm/index.html",
    "revision": "baee7f489969d6f2515b75914d56f900"
  },
  {
    "url": "algorithm/leetcodeTop.html",
    "revision": "f23c5c981da54eb533a08a0539f728c4"
  },
  {
    "url": "algorithm/leetcode分类.html",
    "revision": "05a4c7bfba794bc66575e7bb2c8836b8"
  },
  {
    "url": "algorithm/methods.html",
    "revision": "0610a3f0f2763f0919feaab3200963d6"
  },
  {
    "url": "algorithm/middle.html",
    "revision": "3653df8ce9338d77b90852d180f676bc"
  },
  {
    "url": "algorithm/tencent.html",
    "revision": "3019a477f510676af7c0e6b1ae9bd842"
  },
  {
    "url": "algorithm/tencentTop100.html",
    "revision": "9c56f104ce91bfd9e521f246778123d5"
  },
  {
    "url": "algorithm/双指针法.html",
    "revision": "3ea00d83bd4f9ba2891687f2ffb2cf3a"
  },
  {
    "url": "algorithm/排序.html",
    "revision": "c09572bee316157adecf2f1710098f94"
  },
  {
    "url": "algorithm/贪心算法.html",
    "revision": "a4bf6c581030fd214b8631eb9e998cb9"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6b10a528.js",
    "revision": "f8fc840465d514aa776cba184ae0d6c9"
  },
  {
    "url": "assets/js/11.d7afebf9.js",
    "revision": "5a0c9fffe47d7c2645a696de31776e08"
  },
  {
    "url": "assets/js/12.f91b76fa.js",
    "revision": "b6bc2a2dddaff856e75bced229c6783c"
  },
  {
    "url": "assets/js/13.ee8d44a0.js",
    "revision": "61d8d8a79a957c9bf260dd92f1eb4a4f"
  },
  {
    "url": "assets/js/14.5fd9bab5.js",
    "revision": "bd757b0871ed91824b5e422c8f476541"
  },
  {
    "url": "assets/js/15.71185e7c.js",
    "revision": "fc2c12caf61b724412c5afb842872ffa"
  },
  {
    "url": "assets/js/16.ae6001aa.js",
    "revision": "cb36ed3ab33a5d98d8336d2b3becbf7d"
  },
  {
    "url": "assets/js/17.79fc5361.js",
    "revision": "c7ad2a71ffc0893c6dc1edaa2536bb79"
  },
  {
    "url": "assets/js/18.42f30bb4.js",
    "revision": "49294165949c303517da691faadd908f"
  },
  {
    "url": "assets/js/19.ef32d8a4.js",
    "revision": "ee524d15411ae856da01240c9c06b1e8"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/20.5a98ceda.js",
    "revision": "503705874e5c0a4e5d5c0f7d95138e35"
  },
  {
    "url": "assets/js/21.76e4f6fa.js",
    "revision": "b1d227921a4fb597533989adc0419b72"
  },
  {
    "url": "assets/js/22.3f95dcd3.js",
    "revision": "3621e35a3a47cd148245e6988c8e3bd3"
  },
  {
    "url": "assets/js/23.ba4d25bc.js",
    "revision": "57fb444d63ed699d4bc88d45ec6712ef"
  },
  {
    "url": "assets/js/24.6a597996.js",
    "revision": "424fedc5f275a7ec8f0a0989ad29fa3f"
  },
  {
    "url": "assets/js/25.227fb7ef.js",
    "revision": "21eed0bd3fc2ab52e2432b3769cff727"
  },
  {
    "url": "assets/js/26.71946d04.js",
    "revision": "8b7ea9ac5f173f57da79aa113808c968"
  },
  {
    "url": "assets/js/27.db9dae04.js",
    "revision": "85d0075d6f2938d41250a65afa32d4d8"
  },
  {
    "url": "assets/js/28.ed68d8d4.js",
    "revision": "7ac1df635405f5b347053d17416d3382"
  },
  {
    "url": "assets/js/29.63bc6416.js",
    "revision": "241d8c1d8d1d6c8e7fb98ca4c4233627"
  },
  {
    "url": "assets/js/3.3ede1f01.js",
    "revision": "9b7caca6b3a043c92a0bb63cc1c94984"
  },
  {
    "url": "assets/js/30.a9d05c1f.js",
    "revision": "16ec571bfa17cd73292c0333678684b3"
  },
  {
    "url": "assets/js/31.48f62c42.js",
    "revision": "c1392b22a3a0d4565da637d8825d985e"
  },
  {
    "url": "assets/js/32.27c58484.js",
    "revision": "10c45ec630ffa685c5700e8c2d6d91e8"
  },
  {
    "url": "assets/js/33.f712075e.js",
    "revision": "1ec711e4ec2c539ab4c5dffb6716ef2c"
  },
  {
    "url": "assets/js/34.46e288c9.js",
    "revision": "145a548cd5d14c32775ce8f3714179ba"
  },
  {
    "url": "assets/js/35.970c7f61.js",
    "revision": "567aa85a6067f4b99d1f6091ad4a59c3"
  },
  {
    "url": "assets/js/36.3644495c.js",
    "revision": "e22a517d77ae9078ad866436c49f5f14"
  },
  {
    "url": "assets/js/37.0331be5a.js",
    "revision": "5b51dd7cba3641515619d4bc3b2a0f6f"
  },
  {
    "url": "assets/js/38.64813422.js",
    "revision": "73914db8f88d27e2a36c58d1bc8af92e"
  },
  {
    "url": "assets/js/39.f702b220.js",
    "revision": "9675623c6cd54db603696547903b39b5"
  },
  {
    "url": "assets/js/4.d3babcf5.js",
    "revision": "946d0f7381a24b6ae6799b4a26e04b13"
  },
  {
    "url": "assets/js/40.0ddc56cc.js",
    "revision": "cf150361fd19418c6beec331365fd6a3"
  },
  {
    "url": "assets/js/41.46b314f4.js",
    "revision": "e91b3e775d3f496721f22539681a8df2"
  },
  {
    "url": "assets/js/42.7c392dca.js",
    "revision": "2e311f97664652a53876f0d340bdce75"
  },
  {
    "url": "assets/js/43.87c578ae.js",
    "revision": "6ea716b4622e165243f565bc6e0b0899"
  },
  {
    "url": "assets/js/44.4af6e740.js",
    "revision": "9cda32bc3f99510611babf4aa01c0ffe"
  },
  {
    "url": "assets/js/45.e7e0dc1e.js",
    "revision": "cd6522adf065990e440fdd0264cb8dd2"
  },
  {
    "url": "assets/js/46.8cf9aafb.js",
    "revision": "59650c46f71744ae9b0d8ed59b4401d3"
  },
  {
    "url": "assets/js/47.4fdbccab.js",
    "revision": "c9b8d3bf818162cc7f417334cf10b670"
  },
  {
    "url": "assets/js/48.17e8c14f.js",
    "revision": "dd7ebab62f0de7c06280a062ec7dc283"
  },
  {
    "url": "assets/js/49.3fefb3c7.js",
    "revision": "05431443cb3c2edab9fef81e7494d5a1"
  },
  {
    "url": "assets/js/5.9485e149.js",
    "revision": "0db11714654dac14a55e2721815edb5e"
  },
  {
    "url": "assets/js/50.eef5a0ce.js",
    "revision": "272a996cce3c97e3f9a91aca00c1a098"
  },
  {
    "url": "assets/js/51.d13fd75c.js",
    "revision": "b4f7002f68c29846d8119e1cf98d7460"
  },
  {
    "url": "assets/js/52.369ab3aa.js",
    "revision": "df911a08dd50bd4f2b7bc61232209556"
  },
  {
    "url": "assets/js/53.cea9ac87.js",
    "revision": "991df5c8ebd62ec73d75559386be0964"
  },
  {
    "url": "assets/js/54.f9bc320e.js",
    "revision": "f6673e8d1d03004c9113ee384b7d2b64"
  },
  {
    "url": "assets/js/55.7ab13cf8.js",
    "revision": "3536361b026b2479797b593ebbd9378d"
  },
  {
    "url": "assets/js/56.16470a4a.js",
    "revision": "68c722fd2dd0af51788d89d8e1867a64"
  },
  {
    "url": "assets/js/57.d925d174.js",
    "revision": "7438370b7c85d0e249c082421f6166f4"
  },
  {
    "url": "assets/js/58.80cf022a.js",
    "revision": "68f07c6b819b845ebc48295bccabde3e"
  },
  {
    "url": "assets/js/59.ec44b198.js",
    "revision": "41153c303b365c735aa18b21fd498ab8"
  },
  {
    "url": "assets/js/6.f5b22e2d.js",
    "revision": "f185317e001e7ca0a3d017d60ef3fac6"
  },
  {
    "url": "assets/js/60.0880c9ba.js",
    "revision": "5a77f2eccb983c765dff1d7542b9bfca"
  },
  {
    "url": "assets/js/61.991dc017.js",
    "revision": "aac2b58bbd92fdec77757c64bbb15300"
  },
  {
    "url": "assets/js/62.4ff6f265.js",
    "revision": "ca4a03c85c511ec89d35a39e7e6d4673"
  },
  {
    "url": "assets/js/63.02ad01a3.js",
    "revision": "9be41f531a0d917166f84d4232ddf163"
  },
  {
    "url": "assets/js/64.35e5afd7.js",
    "revision": "a5d21ff8f3725ffb548b7f7d3240f2ca"
  },
  {
    "url": "assets/js/65.f8b832c1.js",
    "revision": "a7a1e3a959c56f6e0851c34018bb9cde"
  },
  {
    "url": "assets/js/66.31422d32.js",
    "revision": "c618dbd89928304fdcc52a723c2860bd"
  },
  {
    "url": "assets/js/67.b7251c18.js",
    "revision": "2fe1625756ec3c76bc3ea0c17d3202e5"
  },
  {
    "url": "assets/js/68.0d2e42a1.js",
    "revision": "a7353ad18b88d5e9317c13fdd8ad7c37"
  },
  {
    "url": "assets/js/69.34fe27a6.js",
    "revision": "95bd00aa35e58cd54d2da722a2396c72"
  },
  {
    "url": "assets/js/7.9bf19d03.js",
    "revision": "057da9f46e90389af98916eb2280eaf1"
  },
  {
    "url": "assets/js/8.f79eb03f.js",
    "revision": "cd04562d8d779ba0037404d2feb22723"
  },
  {
    "url": "assets/js/9.90611952.js",
    "revision": "e7d63ee6c329bc0caf253ea1a6f91b7e"
  },
  {
    "url": "assets/js/app.6c60143e.js",
    "revision": "765b974025e25a1fbfd953bc5dcc290c"
  },
  {
    "url": "basic/index.html",
    "revision": "195b548e8902650634d4e1b8258a3e75"
  },
  {
    "url": "browser/index.html",
    "revision": "d9c9fa8054f7f09480ffba78ef527636"
  },
  {
    "url": "css/flex.html",
    "revision": "d3e92ca7dd9cfa180dbffeec1b14325c"
  },
  {
    "url": "css/index.html",
    "revision": "7990de8ec1a0b3127bf70737940e49d6"
  },
  {
    "url": "es6/arrow.html",
    "revision": "984b74140b0dfc0d43d3996461fd75de"
  },
  {
    "url": "es6/index.html",
    "revision": "425a103dcf5172dc353910a09b9c1cea"
  },
  {
    "url": "es6/inter1.html",
    "revision": "dd4183d39afecf0df0dbc54dddca64e0"
  },
  {
    "url": "es6/never&void.html",
    "revision": "95eac01d04c983aac620c6705ffdb111"
  },
  {
    "url": "es6/promise.html",
    "revision": "0ab84dde6603dd59d004605a89275d29"
  },
  {
    "url": "es6/proxy.html",
    "revision": "510c3ca116db7600d49bcd44a10c9a21"
  },
  {
    "url": "gif/1.gif",
    "revision": "00844803cb5983afc30b3a5340031b2b"
  },
  {
    "url": "gif/2.gif",
    "revision": "bf9938a470e212cf2b5fad0b6e1c15a5"
  },
  {
    "url": "gif/delete.gif",
    "revision": "eed701af14362053380da4bd30c3c48e"
  },
  {
    "url": "gif/stack.gif",
    "revision": "991695b32abe2e9fa1653c46ca85798d"
  },
  {
    "url": "html/index.html",
    "revision": "897a8941960694a260c9604f1ac41cf6"
  },
  {
    "url": "http/authorization.html",
    "revision": "bee5709dc4fa25642d09b0a1a56587a8"
  },
  {
    "url": "http/http-attack.html",
    "revision": "bffcc4770356ed91247ce4180e6b2854"
  },
  {
    "url": "http/http-code.html",
    "revision": "89ceb112aa53e04574e938ff06ed3dcd"
  },
  {
    "url": "http/http-head.html",
    "revision": "40c4f4ddfc4e60a2a95e780edb4cc586"
  },
  {
    "url": "http/http-other.html",
    "revision": "bacf85022b57fb0deb41ad1daf0d3790"
  },
  {
    "url": "http/http-questions.html",
    "revision": "e9032cd21beb0ceca8aa9edb98df07df"
  },
  {
    "url": "http/http-report.html",
    "revision": "0dc4af004e1f58618b9bea66dd5ad908"
  },
  {
    "url": "http/http-safe.html",
    "revision": "8666af363912a8c060e2b305f283bac1"
  },
  {
    "url": "http/http.html",
    "revision": "e7ac5e0a0f60c6745d45cfec4868f076"
  },
  {
    "url": "http/http&https.html",
    "revision": "097017db4e8508f631a6221ffa8098bf"
  },
  {
    "url": "http/https.html",
    "revision": "60d70e5fe3f0452b67d9bf3e84945c22"
  },
  {
    "url": "http/index.html",
    "revision": "96ba3ba4c5c28a86b276b275567aca8e"
  },
  {
    "url": "http/password.html",
    "revision": "6153612dd76ad6510a104a3c0081bed1"
  },
  {
    "url": "http/web-basic.html",
    "revision": "4d3fe8fa4c4fa865eabd3fdfcbfafc20"
  },
  {
    "url": "images/algorithm/candy.jpg",
    "revision": "884e9bfda9a4a90ebbcf256cf2390906"
  },
  {
    "url": "images/algorithm/distance.jpg",
    "revision": "48ee4ad432bb75a091d4afcbf4b7ad74"
  },
  {
    "url": "images/algorithm/pic1.png",
    "revision": "3b412d1cdecdbec7da6646f5ed9424f1"
  },
  {
    "url": "images/algorithm/pic2.png",
    "revision": "94fd12169424297e4e1f98c46cb6a802"
  },
  {
    "url": "images/algorithm/pic3.png",
    "revision": "113686f58454058f7c114cb12e02768c"
  },
  {
    "url": "images/algorithm/pic4.png",
    "revision": "9051b7779a6172b7db897643d44476eb"
  },
  {
    "url": "images/algorithm/spair.png",
    "revision": "80601c5e23296284108c462a2f295049"
  },
  {
    "url": "images/algorithm/word.png",
    "revision": "8baa05b31c2f668ecb8cd3b78702fb8a"
  },
  {
    "url": "images/browser/defer.png",
    "revision": "d7baca609d67da7ced8c02fe51f26ff6"
  },
  {
    "url": "images/browser/more-1.png",
    "revision": "8536f0dac2f8691024e500bfa53ca276"
  },
  {
    "url": "images/browser/more-2.png",
    "revision": "c5cfa8a05b0985f75f6a2395be17c2f2"
  },
  {
    "url": "images/browser/single.png",
    "revision": "a1704a48f992cee53921ff6bd6c1f353"
  },
  {
    "url": "images/browser/xss.png",
    "revision": "84cad5f294759781afbaf582dff5bd43"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/http/https.png",
    "revision": "0fe219cc1b06583840dfda534d55ea4b"
  },
  {
    "url": "images/http/keep-alive.jpg",
    "revision": "722f7a43d9c80acb3749692f35714ac1"
  },
  {
    "url": "images/http/proxy-1.jpg",
    "revision": "85421157141b079aac1984ca700f39eb"
  },
  {
    "url": "images/http/proxy.jpg",
    "revision": "6736f4ecb7cdeaabcd630d1929a4c254"
  },
  {
    "url": "images/http/ssl-offloading.jpeg",
    "revision": "cb7f3d4ba96c5ce37f339bbfe42db675"
  },
  {
    "url": "images/http/ssl.png",
    "revision": "8d0100dd25643b0b6fa170bd4636a1fe"
  },
  {
    "url": "images/http/传输流.png",
    "revision": "1b420e8a8e4925915c1f1733990c2788"
  },
  {
    "url": "images/http/加密.jpg",
    "revision": "906436fc49dbe2afb780da9d6c602de5"
  },
  {
    "url": "images/http/加密.png",
    "revision": "c29f1767fb947606162362a3cf36241b"
  },
  {
    "url": "images/http/加密2.png",
    "revision": "a92eb07c039513da4b419d00e03ffca2"
  },
  {
    "url": "images/http/加密过程.png",
    "revision": "e933071355587ddba25e7dc008df9d81"
  },
  {
    "url": "images/http/反向代理.jpg",
    "revision": "fe0ee1b123a3170dd6d3087bc264d11e"
  },
  {
    "url": "images/http/正向代理.jpg",
    "revision": "0adf68eab28eab4b57e04da2a84d4e07"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/vue/diff.png",
    "revision": "512d68e1024fe01623353088d00d6170"
  },
  {
    "url": "images/vue/directive.png",
    "revision": "d1ae3311e41e18b86a8cdf512f8f6099"
  },
  {
    "url": "images/vue/teleport.png",
    "revision": "3b4ca1d79c8e451138e6b5c860d760c2"
  },
  {
    "url": "images/vue/vue3-life.png",
    "revision": "3d5a669b579afde38bdbc7eee85b77d9"
  },
  {
    "url": "images/vue/vue3.png",
    "revision": "3c86579486823db5ad783f50cdb8d2c4"
  },
  {
    "url": "images/vue/vuex.png",
    "revision": "ff5c8a690cda47c587a35f0c504f8a90"
  },
  {
    "url": "images/webpack/hmr.jpg",
    "revision": "ed18a2da2e7d153078cc22b7ecfa6af3"
  },
  {
    "url": "index.html",
    "revision": "1cb76501664629580e3d432d5e4a4ec7"
  },
  {
    "url": "interviews/1.html",
    "revision": "663d8a04052a4f5328f47e484f35c6a0"
  },
  {
    "url": "interviews/index.html",
    "revision": "7ef98f576ec5400ad76c15e68809a304"
  },
  {
    "url": "javascript/array.html",
    "revision": "c7c1dcef5055d8268c0bd0ff03b8ec71"
  },
  {
    "url": "javascript/index.html",
    "revision": "542d4aa7f67e5a621566409996906d18"
  },
  {
    "url": "mobile/index.html",
    "revision": "32a290e6b00ddc1ad7c344ede1f228ea"
  },
  {
    "url": "nav/index.html",
    "revision": "184474e31945e4b7c87fc1a9fd31af5e"
  },
  {
    "url": "node/index.html",
    "revision": "d0a9a0a0bc615373844394e24140cae2"
  },
  {
    "url": "node/node-error.html",
    "revision": "715d071672d8fe99091980f7d0e3339d"
  },
  {
    "url": "node/node-store.html",
    "revision": "bb5250a2078f5b1e17b90e009a49d8d7"
  },
  {
    "url": "optimism/index.html",
    "revision": "998c88869644c58a68b201e4cd71e4cf"
  },
  {
    "url": "optimism/前端性能优化.html",
    "revision": "e9a70c7a2ab191fece093ac4700e4c38"
  },
  {
    "url": "thinking/coding-hight.html",
    "revision": "885516b996225ad08fa22f9109a1d6b2"
  },
  {
    "url": "thinking/hr.html",
    "revision": "0a556403c0d1b829ce3581de2fa0bc6d"
  },
  {
    "url": "thinking/index.html",
    "revision": "640586e519e099a3577faafc48cac939"
  },
  {
    "url": "thinking/life.html",
    "revision": "fde555cfde35e9ba1769b95a09737d28"
  },
  {
    "url": "thinking/study.html",
    "revision": "35d784438ed5ebe1e0436a2add0000ee"
  },
  {
    "url": "thinking/tools.html",
    "revision": "6b43e08bfda192ac25b3d271d3d97ec3"
  },
  {
    "url": "thinking/work.html",
    "revision": "5d0b717b5a192ff0e7aa96fbca956b23"
  },
  {
    "url": "thinking/产品与技术思维.html",
    "revision": "c5d7489ee160704b66022071a65f419f"
  },
  {
    "url": "vue/index.html",
    "revision": "952b64177870e20370bc5923950a8cde"
  },
  {
    "url": "vue/vue2.html",
    "revision": "20fbc91afa2acec894c7afe4c8438c07"
  },
  {
    "url": "vue/vue3-new.html",
    "revision": "3a4d5c66461fca5301166eb0c9cd2c2d"
  },
  {
    "url": "vue/vue3.html",
    "revision": "071292e8eaf8ce8fbb194c8d0999ebf2"
  },
  {
    "url": "webpack/index.html",
    "revision": "7b410c5e8042810877e5b64d43decb3e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
