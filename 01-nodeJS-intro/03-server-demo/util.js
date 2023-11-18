function html(body,title = 'Server Demo') {
    return `<html lang="en">
    <head>
    <title>${title}</title>
    </head>
    <body>
        <nav style="list-style:upper-alpha;">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
        ${body}
    </body>
    </html>`;
}

module.exports = {
    html
};