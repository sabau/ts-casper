var login = function (user, password, start) {
    if (!start) start = new Date();
    //TODO: check if we are already authenticated
    casper
        .waitForUrl('/common/login.html')
        .then(function () {
            this.echo(Date.now() - start + "ms", 'fill data and login');
            this.fillSelectors('form', {
                'input#user': user,
                'input#password': password
            }, false);
            this.click("#login");
        })
        .waitForUrl('/common/index.html', function () {
            this.echo(Date.now() - start + "ms", 'redirected to index.html');
        })
        .then(function () {
            test.assertTitle('Trueblue CRM', 'Title is correct');
        })
        .waitForSelector('#menuContent > ul > li[name="Home"].expanded', function () {
            this.echo(Date.now() - start + "ms", 'We have an expanded menu');
        });
};

module.exports = {
    login: login
};