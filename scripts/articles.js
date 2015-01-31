(function() {

    var headers = document.querySelectorAll('article > h1');
    for (var i = 0; i < headers.length; i++) {
        (function(header) {
            header.addEventListener('click', function() {
                var article = header.parentNode;
                if (article.dataset.open) {
                    delete article.dataset.open;
                } else {
                    article.dataset.open = 'open';
                }
            });
        }(headers[i]));
    }

}());
