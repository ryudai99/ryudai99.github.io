let answer = document.querySelector("#answer");
let html ="";
let saburo ="";
let taro ="";
let jiro ="";

let tweets = [
  { name: "三郎BOT", message: "21時でござる", tweetedAt: "2019-11-01 21:00:00", avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png" },
  { name: "次郎", message: "悲しいので寝ます", tweetedAt: "2019-11-01 20:14:44", avatar: "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png" },
  { name: "次郎", message: "33-4・・・・・", tweetedAt: "2019-11-01 20:13:03", avatar: "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png" },
  { name: "太郎", message: "満腹度が回復した", tweetedAt: "2019-11-01 20:05:38", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "三郎BOT", message: "20時でござる", tweetedAt: "2019-11-01 20:00:00", avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"  },
  { name: "太郎", message: "もぐもぐ・・・", tweetedAt: "2019-11-01 19:50:22", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "太郎", message: "ごはんつくった！", tweetedAt: "2019-11-01 19:48:01", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "太郎", message: "お腹空いたなあ....", tweetedAt: "2019-11-01 19:30:59", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "太郎", message: "お腹空いたなあ", tweetedAt: "2019-11-01 19:08:01", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "次郎", message: "久々にやきうやったるで！パワプロやけどな！", tweetedAt: "2019-11-01 19:04:12", avatar: "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png" },
  { name: "三郎BOT", message: "19時でござる", tweetedAt: "2019-11-01 19:00:00", avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"  }
];

for(let i=0;i<tweets.length;i++){
  html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> <img src="${tweets[i].avatar}" alt="" width="80" height="100"> <b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i><br></div>`;
}
answer.innerHTML = html;


let saburo2 =tweets.filter(tweet =>{
  return tweet.name === "三郎BOT";
});

let jiro2 =tweets.filter(tweet =>{
  return tweet.name === "次郎";
});

let taro2 =tweets.filter(tweet =>{
  return tweet.name === "太郎";
});



let saburo3 = function (){
  for(let i=0;i<saburo2.length;i++){
    saburo += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> <img src="${saburo2[i].avatar}" alt="" width="80" height="100"> <b>${saburo2[i].name}</b> ${saburo2[i].message} <i>${saburo2[i].tweetedAt}</i><br></div>`;
  }
  answer.innerHTML = saburo;
};
let jiro3 = function (){
  for(let i=0;i<jiro2.length;i++){
    jiro += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> <img src="${jiro2[i].avatar}" alt="" width="80" height="100"> <b>${jiro2[i].name}</b> ${jiro2[i].message} <i>${jiro2[i].tweetedAt}</i><br></div>`;
  }
  answer.innerHTML = jiro;
};
let taro3 = function (){
  for(let i=0;i<taro2.length;i++){
    taro += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> <img src="${taro2[i].avatar}" alt="" width="80" height="100"> <b>${taro2[i].name}</b> ${taro2[i].message} <i>${taro2[i].tweetedAt}</i><br></div>`;
  }
  answer.innerHTML = taro;
};