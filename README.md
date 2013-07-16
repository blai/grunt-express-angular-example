grunt-express-angular-example
=============================

Sample app that shows the usage of [grunt-express](https://github.com/blai/grunt-express) v1.0.

### Highlights

 * Based on @bford's [generator-angular](https://github.com/yeoman/generator-angular)
 * Authentication implementation based on @davemo's [end-to-end-with-angularjs](https://github.com/davemo/end-to-end-with-angularjs)
 * The sample implementation allows total separation of express server and angular app (e.g. the server piece could be refactored out to a different NPM module)
 

### How to run it
```
git clone git@github.com:blai/grunt-express-angular-example.git
cd grunt-express-angular-example
npm install
bower install
grunt server
```

#### Issues

Unfortunately, with option `serverreload` set to `true`, `grunt-express` will start the server asynchronously in a child process from the `watch` task, which is run after the `open`. So if you see a 404 page in browser after doing `grunt server`, just wait to see the server started message show up in the terminal and refresh the browser to see the app.
