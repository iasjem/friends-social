const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const pump = require('pump');

const delay = 500;

const location = {
    public: 'public',
    build : {
        source: 'build',
        styles() { return `${this.source}/styles` }
    }
};

sass.compiler = require('node-sass');

const clean = () => require('del')([`${location.public}/style.min.*`]);

const buildCSS = () => pump([
    gulp.src(`${location.build.styles()}/main.sass`),
    sass.sync(),
    concat('style.min.css'),
    cleanCSS(),
    gulp.dest(location.public)
], (err) => {
    if (err) return console.log('Error encountered while building CSS\n', err);
});

gulp.watch(`${location.build.styles()}/**/*.sass`, { delay }, buildCSS);

exports.default = gulp.series(clean, buildCSS);