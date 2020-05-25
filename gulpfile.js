var gulp = require ('gulp');
var rename = require ('gulp-rename');
var sass = require ('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require ('browser-sync').create();
var minify = require('gulp-minify');
var del = require('del');

function css_style(done) {
    gulp.src('./scss/**.*')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))

        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());

    done();
}
 function min_js(done) {
    gulp.src('./lib/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['*.min.js']
        }))
        .pipe(gulp.dest('./js/'));
     done();
}
function clean(done) {
    return del('./js/*.js', '!.min.js');
    done();
}
function browserReload(done) {
    browserSync.reload();
    done();
}

function watchFile() {
    gulp.watch("./scss/**/*", css_style);
    gulp.watch('./lib/*.js', min_js);
    gulp.watch("*.html", browserReload);

}

gulp.task('default', watchFile, clean);
