Handlebars.registerHelper('getRootURL', function(url){
    if(url.search(/^https?\:\/\//) != -1)
        url = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i, "");
    else
        url = url.match(/^www.([^\/?#]+)(?:[\/?#]|$)/i, "");
    return url[1].replace("www.", "");
});