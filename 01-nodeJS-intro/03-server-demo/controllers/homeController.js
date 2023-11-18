function homePage(req,res){
    res.write(html(`<h1>HomePage!</h1> <p>Welcome to our site!</p>`));
    res.end();
}

module.exports={
    homePage
};