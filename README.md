- `gulp scripts` will compile a new 'bundle.js' using browserify
- `node index.js` from inside 'public/js/' will run the server

#### Achieved:
- installed gulp.js
- Got gulp-browserify to require "jQuery" & "Backbone"
- have a simple node.js http.createServer() to get a simple server up
- Got rid of grunt
- Got rid of RequireJS
- Got rid of bower and depending on native npm plugins and dependencies

#### TODOS:
- plug in gulp-livereload
- Get browserify to require twitter-bootstrap js
- include twitter-bootstrap less files
- plug in gulp-recess to compile less files
- decide on a unit-testing framework
- convert all js into .coffee files and have Coffeify involved
