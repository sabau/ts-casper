# Testing
                                                 
                                                 I need to modularize this stuff. Currently they are unrelated operations just to understand how Tuebleyu CRM works
                                                 
                                                 ## Setup
                                                 
                                                 ```sh
                                                 npm install -g phantomjs slimerjs casperjs
                                                 ```
                                                 
                                                 install on your machine FIREFOX 52:
                                                 https://ftp.mozilla.org/pub/firefox/releases/52.3.0esr/win64/en-US/Firefox%20Setup%2052.3.0esr.exe
                                                 
                                                 ## Run
                                                 
                                                 casperjs test test.js --verbose --engine=slimerjs