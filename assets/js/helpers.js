Handlebars.registerHelper('getRootURL', function(url){
    if(url.search(/^https?\:\/\//) != -1)
        parsed = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i, "");
    else
        parsed = url.match(/^www.([^\/?#]+)(?:[\/?#]|$)/i, "");
    
    if(parsed == null)
    	return url

    return parsed[1].replace("www.", "");
});