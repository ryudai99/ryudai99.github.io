let answer = document.querySelector("#answer");
let html ="";
let shiromo

let morus = [
  {name:"シロモ",message:"俺の推し",avatar:"S__57909251.jpg"},
  {name:"テディ",message:"推しじゃないけど好き",avatar:"S__57909252.jpg"}
];

for(let i = 0;i < morus.length;i++) {
  html += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> <img src="${morus[i].avatar}" alt="" width="80" height="100"> <b>${morus[i].name}</b> ${morus[i].message}<br></div>`;
}
answer.innerHTML = html;

let shiromo2 =morus.find(moru =>{
  return moru.name ==="シロモ";
});

let shiromo3 = function () {
  shiromo = "";
  for (let i = 0; i < shiromo2.length; i++) {
    shiromo += `<div style ="padding:1px;margin:0;border:1px solid #333333;"> <img src="${shiromo2[i].avatar}" alt="" width="80" height="100"> <b>${shiromo2[i].name}</b> ${shiromo2[i].message}<br></div>`;
  }
  answer.innerHTML = shiromo;
};