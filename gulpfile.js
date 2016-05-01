/**
 * @file
 * Gulp task file.
 *
 * @link http://gulpjs.com/ See GulpJS for more information @endlink.
 */

var gulp       = require( 'gulp' ),
    compass    = require( 'gulp-sass' ),
    concat     = require( 'gulp-concat' ),
    minifyCSS  = require( 'gulp-minify-css' ),
    uglify     = require( 'gulp-uglify' ),
    minifyHTML = require( 'gulp-minify-html' ),
    shell      = require( 'gulp-shell' );

// Compile the SCSS files using libSass.
gulp.task( 'sass', function() {
  gulp.src( './app/assets/sass/*.scss' )
    .pipe( compass({
      style: 'expanded',
      sass: 'sass',
      css: 'css',
    }))
    .pipe( gulp.dest( 'app/assets/css' ) );
});

// Combine all CSS files and minify.
gulp.task( 'css-min', function() {
  gulp.src([ './app/assets/css/**/*.css', './app/assets/css/*.css' ])
    .pipe( concat( 'all.min.css' ) )
    .pipe( minifyCSS() )
    .pipe( gulp.dest( './build' ) );
});

// Use r.js to combine all JS files.
gulp.task( 'rjs', shell.task([
  './node_modules/.bin/r.js -o build.js'
]) );

// Watch files for changes.
gulp.task( 'watch', function() {
  gulp.watch( [ './app/assets/sass/*.scss', './app/assets/sass/**/*.scss' ], [ 'sass' ] );
  gulp.watch( [ './app/assets/js/*.js', './app/assets/js/**/*.js' ], [ 'rjs' ] );
});

// Default tasks.
gulp.task( 'default', [ 'sass', 'css-min', 'rjs' ] );

