// Yahoo Suche (über SerpApi)
function searchYahoo(event) {
    event.preventDefault();
    var query = document.getElementById("yahoo-query").value;
    var apiKey = "HIER_DEIN_SERPAPI_SCHLUESSEL";
    var url = `https://serpapi-yahoo-search.p.rapidapi.com/search?q=${encodeURIComponent(query)}&location=de`;

    fetch(url, {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "serpapi-yahoo-search.p.rapidapi.com",
            "X-RapidAPI-Key": apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        var resultsDiv = document.getElementById("yahoo-results");
        resultsDiv.innerHTML = '';
        data.organic_results.forEach(item => {
            var result = `<a href="${item.link}" target="_blank">${item.title}</a><p>${item.snippet}</p>`;
            resultsDiv.innerHTML += result;
        });
    })
    .catch(error => {
        console.error('Fehler bei Yahoo Suche:', error);
    });
}
