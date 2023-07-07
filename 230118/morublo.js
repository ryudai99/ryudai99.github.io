let answer = document.querySelector("#answer");
let html ="";

let morus = [
  {name:"シロモ",message:"めちゃでかぬいぐるみ史上最高の可愛さ！",avatar:"S__57909251.jpg"},
  {name: "シロモ",message: "誰だこれは目がおかしすぎるよ！！！",avatar: "S__57925637.jpg"},
  {name: "シロモ",message: "もっと変！！！ちいかわみたいな見た目になっちまってる！！！",avatar: "S__57925638.jpg"},
  {name: "シロモ",message: "目きらっきらだし質感がシロモに似合いすぎてるし最高に可愛い！！！",avatar: "S__57925639.jpg"},
  {name: "シロモ",message: "色どうしちまったんだよシロモ…",avatar: "S__57925640.jpg"},
  {name: "シロモ",message: "強盗に乗られて泣いてるかわいそう…でもシロモはそれがいい！！！",avatar: "S__57925641.jpg"},
  {name: "シロモ",message: "一回色直ったじゃん！！！何でまた変な風になちゃってるの！？！？",avatar: "S__57925642.jpg"},
  {name: "シロモ",message: "宇宙服のデザインきもすぎる全然似合ってない！！！",avatar: "S__57925643.jpg"},
  {name: "シロモ",message: "これはめちゃくちゃ可愛い！！！バッグにしっかりと付けてあげたい！！！",avatar:"S__57925644.jpg"},
  {name: "シロモ",message: "頑張って作ったけどちょっと変な顔になっちゃた…それでもシロモは可愛い！！！",avatar: "S__57925645.jpg"},
  {name:"テディ",message:"ちょっと目がキラキラ過ぎてきもい",avatar:"S__57909252.jpg"},
  {name:"テディ",message: "枕にしてごめんね…こんなにつぶれちゃって…",avatar:"S__57925647.jpg"},
  {name:"テディ",message: "なな作。かなりうまい",avatar: "S__57925648.jpg"},
  {name: "テディ",message: "どこで手に入れたやつか分かんないけど割と可愛くて愛着わく。",avatar: "S__57925649.jpg"},
  {name:"DJ",message:"スタンプの中で一番かわいい。寝る時必ず使う。",avatar:"DJ1.png"},
  {name:"DJ",message: "取れないはずの時期に店員さんが取らせてくれた。めちゃくちゃ可愛いよありがとう。",avatar: "S__57925650.jpg"},
  {name: "DJ",message: "２体出てきたけどあなたなら大歓迎です。",avatar: "S__57925651.jpg"},
  {name:"サイレン",message: "どうしてこんな姿で生まれてきてしまったんだ…",avatar: "S__57925652.jpg"},
  {name: "サイレン",message: "いつかは完成させてあげたい。",avatar: "S__57925653.jpg"},
  {name:"サイレン",message: "相変わらずうますぎる。",avatar: "S__57925654.jpg"},
  {name: "サイレン",message: "両方ともちょうどいい完成度でかわいい",avatar: "S__57925655.jpg"},
  {name: "ドゥーフー",message: "まさかの泣いてる所！まじで可愛すぎる！！！",avatar: "S__57925656.jpg"},
  {name: "ペーター",message: "めちゃでかぬいぐるみが小さくなってしまった。でもフォルム完璧すぎる。めちゃくちゃ可愛い。",avatar: "S__57925657.jpg"},
  {name: "ペーター",message: "A賞なのに顔べこべこで全然可愛くない…あまりにも悲しすぎる…",avatar: "S__57925658.jpg"},
  {name: "ペーター",message: "ちょっと青髭が目立つよね…",avatar: "S__57925659.jpg"},
  {name: "たらこ",message: "コロフレではじめてゲットしたけどめちゃくちゃ可愛い。全然気になってなかったのにめちゃくちゃ気に入ってしまった。",avatar: "S__57925660.jpg"},
  {name: "エビ",message:"質感もちゃんとお米みたいだし目がキラキラなの似合う。めちゃくちゃ可愛い。",avatar: "S__57925661.jpg"},
  {name: "エビ",message: "上のえびがちょっときもい。",avatar: "S__57925662.jpg"},
  {name: "アビー",message: "色とこのあほ顔がめちゃくちゃ可愛い。頭のもこもこ可愛い。",avatar: "S__57925663.jpg"},
  {name: "ローズ",message: "キットを使ってないのに意外と可愛い。ただなんか顔がきもい。",avatar: "S__57925664.jpg"},
  {name: "ローズ",message: "このシリーズで３番目にクオリティ高い。かわいい。",avatar: "S__57925665.jpg"},
  {name: "ローズ",message: "何この顔！！！可愛すぎない！？！？",avatar: "S__57925666.jpg"},
  {name: "いなり",message: "なんかあんまり可愛くない…悲しい…",avatar: "S__57925667.jpg"},
  {name: "ポテト",message: "可もなく不可もなくってところか？",avatar: "S__57925668.jpg"},
  {name: "ポテト",message: "こいつだけニンジン咥えたやつあってずるすぎる！！！",avatar: "S__57925669.jpg"},
  {name: "ポテト",message: "ポテトの割にはかわいい。",avatar: "S__57925670.jpg"},
  {name: "ポテト",message: "ぼこぼこしてるしあんまり可愛くないね。",avatar: "S__57925671.jpg"},
  {name: "ポテト",message: "狙いはこいつ以外！まぁプイプイならせればそれでヨシ！",avatar: "S__57925672.jpg"},
  {name:"チョコ",message:"チョコばっかりでてこないで",avatar: "S__63709188.jpg"},
  {name:"チョコ",message:"チョコばっかり出てこないで",avatar: "S__63709189.jpg"},
];

let shiromo =morus.filter(moru =>{
  return moru.name ==="シロモ";
});
let tedhi =morus.filter(moru =>{
  return moru.name ==="テディ";
});
let DJ =morus.filter(moru =>{
  return moru.name ==="DJ";
});
let pato =morus.filter(moru =>{
  return moru.name ==="サイレン";
});
let dhufu =morus.filter(moru =>{
  return moru.name ==="ドゥーフー";
});
let peta =morus.filter(moru =>{
  return moru.name ==="ペーター";
});
let tarako =morus.filter(moru =>{
  return moru.name ==="たらこ";
});
let ebi =morus.filter(moru =>{
  return moru.name ==="エビ";
});
let abi =morus.filter(moru =>{
  return moru.name ==="アビー";
});
let rozu =morus.filter(moru =>{
  return moru.name ==="ローズ";
});
let inari =morus.filter(moru =>{
  return moru.name ==="いなり";
});
let poteto =morus.filter(moru =>{
  return moru.name ==="ポテト";
});
let choko =morus.filter(moru =>{
  return moru.name ==="チョコ";
});

let shiromo2 = function () {
  html = "";
  html +=`<b>シロモ : </b><a>推しです大好き可愛すぎ。ちょこちょこかわいそうな目にあっちゃうのが可愛い。でもやっぱり喜んでる所が一番かわいい。</a>`
  for (let i = 0; i < shiromo.length; i++) {
    html += `<div style ="padding:1px;margin:1px;border:1px solid #333333;">
             <img src="${shiromo[i].avatar}" alt="" width="100" height="100"> 
             ${shiromo[i].message}
             </div>`;
  }
  answer.innerHTML = html;
};
let tedhi2 = function () {
  html = "";
  html +=`<b>テディ : </b><a>自由に突き進む感が可愛すぎる。毎日でもごみ食べさせてあげたい。</a>`
  for (let i = 0; i < tedhi.length; i++) {
    html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${tedhi[i].avatar}" alt="" width="100" height="100"> 
             ${tedhi[i].message}
             <br>
             </div>`;
  }
  answer.innerHTML = html;
};
let DJ2 = function () {
  html = "";
  html +=`<b>DJモルカー : </b><a>スタンプの可愛さに一目惚れ。ヘッドホンじゃなくて信号機がついてるんだと思ってた。</a>`
  for (let i = 0; i <DJ .length; i++) {
    html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${DJ[i].avatar}" alt="" width="100" height="100"> 
             ${DJ[i].message}
             </div>`;
  }
  answer.innerHTML = html;
};
    let pato2 = function () {
      html = "";
      html +=`<b>救急モルカーとパトモルカー : </b><a>救急車は泣いてて可愛いんだけどパトカーは黄色いだけであんまり</a>`
      for (let i = 0; i <pato .length; i++) {
        html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${pato[i].avatar}" alt="" width="100" height="100"> 
             ${pato[i].message}
             </div>`;
      }
      answer.innerHTML = html;
    };
    let dhufu2 = function () {
      html = "";
      html +=`<b>ドゥーフー : </b><a>かなり気が弱くてめちゃくちゃ可愛い。でも頭のわふわふはちょっと面白い。</a>`
      for (let i = 0; i <dhufu .length; i++) {
        html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${dhufu[i].avatar}" alt="" width="100" height="100"> 
             ${dhufu[i].message}
             </div>`;
      }
      answer.innerHTML = html;
    };
    let peta2 = function () {
      html = "";
      html +=`<b>ペーター : </b><a>青髭が目立たなきゃ可愛いんだよね。おじさんっぽい。</a>`
      for (let i = 0; i <peta .length; i++) {
        html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${peta[i].avatar}" alt="" width="100" height="100"> 
             ${peta[i].message}
             </div>`;
      }
      answer.innerHTML = html;
    };
    let tarako2 = function () {
      html = "";
      html +=`<b>タラコ : </b><a>リーゼントがなんとも言えなくてかわいい。色が最高。</a>`
      for (let i = 0; i <tarako .length; i++) {
        html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${tarako[i].avatar}" alt="" width="100" height="100"> 
             ${tarako[i].message}
             </div>`;
      }
      answer.innerHTML = html;
    };
    let ebi2 = function () {
      html = "";
      html +=`<b>寿司モルカー(海老) : </b><a>ぬいぐるみだけすごい可愛い</a>`
      for (let i = 0; i <ebi .length; i++) {
        html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${ebi[i].avatar}" alt="" width="100" height="100"> 
             ${ebi[i].message}
             </div>`;
      }
      answer.innerHTML = html;
    };
    let abi2 = function () {
      html = "";
      html +=`<b>アビー : </b><a>この見た目でプライドが高いのが何ともかわいい。ずっと痛車にしてたい。</a>`
      for (let i = 0; i <abi .length; i++) {
        html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${abi[i].avatar}" alt="" width="100" height="100"> 
             ${abi[i].message}
             </div>`;
      }
      answer.innerHTML = html;
    };
    let rozu2 = function () {
      html = "";
      html +=`<b>ローズ : </b><a>モルカーなのにピアスしててかわいい</a>`
      for (let i = 0; i <rozu .length; i++) {
        html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${rozu[i].avatar}" alt="" width="100" height="100"> 
             ${rozu[i].message}
             </div>`;
      }
      answer.innerHTML = html;
    };
    let inari2 = function () {
      html = "";
      html +=`<b>寿司モルカー(いなり) : </b><a>初登場回で可愛すぎたけど登場一瞬で悲しい</a>`
      for (let i = 0; i <inari .length; i++) {
        html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${inari[i].avatar}" alt="" width="100" height="100"> 
             ${inari[i].message}
             </div>`;
      }
      answer.innerHTML = html;
    };
let poteto2 = function () {
  html = "";
  html +=`<b>ポテト : </b><a>主人公だからって優遇され過ぎてる。もう少し他のモルにも分けてあげて欲しい。</a>`
  for (let i = 0; i <poteto .length; i++) {
    html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> 
             <img src="${poteto[i].avatar}" alt="" width="100" height="100"> 
             ${poteto[i].message}
             </div>`;
  }
  answer.innerHTML = html;
};
let choko2 = function () {
  html = "";
  html +=`<b><del>チョコ</del> : </b><a>諸悪の根源。ランダムゲットはこの子しかでない。可愛く無く見えてきた…。尊厳破壊状態は可愛い。</a>`
  for (let i = 0; i < choko.length; i++) {
    html += `<div style ="padding:1px;margin:1px;border:1px solid #333333;">
             <img src="${choko[i].avatar}" alt="" width="100" height="100"> 
             ${choko[i].message}
             </div>`;
  }
  answer.innerHTML = html;
};