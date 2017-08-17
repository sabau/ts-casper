//move will open a menu and a submenu item

var start = Date.now();
casper.test.begin('Sign In to local TB', 1, function(test){
    casper.on('remote.message', function(msg) {
        //this.echo('REMOTE: : ' + msg);
    });
    casper.options.pageSettings.loadImages =true;
    casper.options.pageSettings.resourceTimeout =20000;
    casper.options.pageSettings.localToRemoteUrlAccessEnabled = true;
    casper
        .start('http://localhost:8080/')
        .viewport(1920,1080)
        .waitForUrl('/common/login.html', function (){
            this.echo(Date.now()-start + "ms");
            this.echo('redirected to login.html');
        })
        .then(function(){
            this.echo(Date.now()-start + "ms", 'fill data and login');
            this.fillSelectors('form', {
                'input#user': 'cfp\\lundbeck.tbadmin',
                'input#password':    'be careful.'
            }, false);
            this.click("#login");
        })
        .waitForUrl('/common/index.html', function (){
            this.echo(Date.now()-start + "ms", 'redirected to index.html');
        })
        .then(function (){
            test.assertTitle('Trueblue CRM', 'Title is correct')
        })
        .waitForSelector('#menuContent > ul > li[name="Home"].expanded', function() {
            this.echo(Date.now()-start + "ms", 'We have an expanded menu');
            this.click('#menuContent > ul > li[name="Home"] > ul > li[name="Announcement"] > a')

        })
        .waitForSelector('#menuContent > ul > li[name="GIP"] > a')
        .then(function (){
            this.echo(Date.now()-start + "ms", 'Expand GIP menu');
            this.click('#menuContent > ul > li[name="GIP"] > a.menu-link');
        })
        .waitForSelector('#menuContent > ul > li[name="GIP"] > ul > li[name="InitiativeList"] > a')
        .then(function (){
            this.echo('Click on GIP > InitiativeList');
            this.click('#menuContent > ul > li[name="GIP"] > ul > li[name="InitiativeList"] > a');
        })
        .then(function (){
            this.echo(Date.now()-start + "ms", this.getCurrentUrl());
        })
        .waitForSelector('form.grid-form > div > div.dataTables_scroll > div.dataTables_scrollHead > div > table',
            function then(){
                this.echo(Date.now()-start + "ms", 'Loaded');
            }, null, 80000)
        .then(function() {
            this.echo(Date.now()-start + "ms", this.getElementAttribute('.header > .header-cell.title-label > span.header-title', 'text'));
            test.assertSelectorHasText('.header > .header-cell.title-label > span.header-title', 'Lista Attività')
        })
        .run(function(){
            test.done()
        })
    ;
});