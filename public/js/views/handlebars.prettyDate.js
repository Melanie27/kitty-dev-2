Handlebars.registerHelper('prettyDate', function(dateString) {
    var date = new Date(dateString);
    return [ date.getMonth(), date.getDate(), date.getFullYear() ].join("/")
});