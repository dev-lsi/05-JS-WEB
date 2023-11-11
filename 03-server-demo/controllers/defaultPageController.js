function defaultPage(req,res){
    res.statusCode = 404;
    res.write(html(`<h1>Err: 404 Not Found</h1>`));
    res.end();
};

module.exports = {
    defaultPage
};