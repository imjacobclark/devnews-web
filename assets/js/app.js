var http = new XMLHttpRequest();
http.open("GET", "http://api.devnews.today", false);
http.send(null);

json = JSON.parse('{"items":' + http.responseText + '}');

var source   = document.getElementById('news-template').innerHTML;
var template = Handlebars.compile(source);

document.getElementById('main').innerHTML += template(json);