function doSearch() {
  let books = document.querySelector("#books").value;

  fetch(`https://www.googleapis.com/books/v1=${books}`)
      .then((response) => response.json())
      .then(
        function (json) {
        console.log(json);
        let answerHtml = "";
        json.results.forEach(function(result)){
          answerHtml +=`<li>${q.intitle}${result.address2}${result.address3}</li>`;
        })
        document.querySelector("#answer").innerHTML = answerHtml
      }
  );
}