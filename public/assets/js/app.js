var nojs = document.querySelector(".nojs")
nojs.parentNode.removeChild(nojs);

document.getElementById('main').innerHTML += "<p class='loading'>Grabbing fresh data from <strong>HackerNews</strong> and <strong>Reddit</strong>...</p>";

var http = new XMLHttpRequest();
http.open("GET", "http://api.devnews.today", true);

http.onload = function () {
	if (http.readyState === 4) {
		json = JSON.parse('{"items":' + this.responseText + '}');

		var source   = document.getElementById('news-template').innerHTML;
		var template = Handlebars.compile(source);

		var loading = document.querySelector(".loading")
		loading.parentNode.removeChild(loading);

		document.getElementById('main').innerHTML += template(json);
	}
};

http.send(null);