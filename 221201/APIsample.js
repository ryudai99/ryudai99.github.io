function doSearch() {
  let zipcode = document.querySelector("#zipcode").value;

  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
      .then((response) => response.json())
      .then(
        function (json) {
        console.log(json);
        let answerHtml = "";
        if(json.status != 200){
          answerHtml += `<li>エラー:${json.message}</li>`;
        }else{
          if(json.results == null){
            answerHtml += `<li>結果が取得できませんでした</li>`;
          }else{
            json.results.forEach(function (result) {
              answerHtml += `<li>${result.address1}${result.address2}${result.address3}</li>`;
          });
        }

        }
        document.querySelector("#answer").innerHTML = answerHtml
      }
  );
}