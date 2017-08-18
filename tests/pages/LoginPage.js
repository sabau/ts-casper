function LoginPage() {
    
    this.start = function (casper, url, user, passwd) {
        if (!url) url = casper.cli.options.baseUrl;
        casper.echo("base url is : " + url);
        casper
            .start(url)
            .viewport(1920,1080)
            .then(function () {
                casper.test.assertUrlMatch('/common/login.html', 'Is on login page');
                casper.test.assertExists('input#user', 'Login page form has been found');
            })
            .waitForUrl('/common/login.html', function (){
                this.echo('redirected to login.html');
            })
            .then(function () {
                this.fillSelectors('form', {
                    'input#user': user,
                    'input#password': passwd
                }, false);
            })
            .then(function () {
                this.click("#login");
            })
            .waitForSelector('#menuContent > ul > li[name="Home"].expanded', function() {
                this.echo(Date.now()-start + "ms", 'We have an expanded menu');
                this.click('#menuContent > ul > li[name="Home"] > ul > li[name="Announcement"] > a')
            }, null, 40000)
            .waitForSelectorTextChange('.header > .header-cell.title-label > span.header-title', null, null, 40000)
            .waitWhileSelector('div.spinner')
            ;
    };
    
    this.getHeaderTitle = function () {
        return casper.evaluate(function () {
            return __utils__.findOne('.header > .header-cell.title-label > span.header-title').text()
        });
    };
}