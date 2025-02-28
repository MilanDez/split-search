function searchBing(event) {
    event.preventDefault();
    var query = document.getElementById("bing-query").value;
    var bingUrl = "https://www.bing.com/search?q=" + encodeURIComponent(query);
    var bingIframe = document.getElementById("bing-iframe");
    bingIframe.src = bingUrl;

    // Event Listener für Link-Klicks
    bingIframe.onload = function() {
        // Manipulation aller Links, um sie im gleichen iframe zu öffnen
        var links = bingIframe.contentWindow.document.querySelectorAll('a');
        links.forEach(function(link) {
            link.setAttribute('target', '_self');
            link.onclick = function(e) {
                e.preventDefault();
                bingIframe.src = link.href;
            };
        });
    };
}

function searchMetager(event) {
    event.preventDefault();
    var query = document.getElementById("metager-query").value;
    var metagerUrl = "https://metager.org/meta/meta.ger3?eingabe=" + encodeURIComponent(query);
    var metagerIframe = document.getElementById("metager-iframe");
    metagerIframe.src = metagerUrl;

    // Event Listener für Link-Klicks
    metagerIframe.onload = function() {
        // Manipulation aller Links, um sie im gleichen iframe zu öffnen
        var links = metagerIframe.contentWindow.document.querySelectorAll('a');
        links.forEach(function(link) {
            link.setAttribute('target', '_self');
            link.onclick = function(e) {
                e.preventDefault();
                metagerIframe.src = link.href;
            };
        });
    };
}
