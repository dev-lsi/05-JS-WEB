function aboutPage(req,res){
    res.write(html(`<h1>About Page!</h1><p>Contact: +000100200</p>`,'About'));
    res.end();
};

module.exports = {
    aboutPage
};