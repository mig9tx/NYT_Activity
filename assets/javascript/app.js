function searchArticle(inputTerm) {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + inputTerm + "&api-key=8335fc7b2a3545bcb71046bf50bee79e";
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (result) {
        console.log(result);
        $("#results").append(result.response.docs[0].headline.main);
    })
}

$(document).ready(function () {
    $("#submit-button").on("click", function (event) {
        var value = $("#sterm").val().trim();
        searchArticle(value);
    });
});
