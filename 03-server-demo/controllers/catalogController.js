function catalogPage(req,res){
    res.write(html(`<h1>Catalog Page!</h1>
    <ul><li>product 1</li><li>product 2</li><li>product 3</li></ul>`,'Catalog'));
    res.end()
};

module.exports={
    catalogPage
};