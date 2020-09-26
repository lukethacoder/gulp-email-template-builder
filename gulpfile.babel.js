const { series, src, dest, watch } = require('gulp');
const inlineCss = require('gulp-inline-css');
const posthtml = require('gulp-posthtml');
const browserSync = require('browser-sync');

const config = (file) => ({
  plugins: [require('posthtml-include')({ root: file.dirname })],
  options: {},
});

function postHtml(done) {
  src('./src/index.html').pipe(posthtml(config, {})).pipe(inlineCss()).pipe(dest('build/'));
  browserSync.reload();
  done();
}

function defaultTask(cb) {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: './build',
    },
  });

  watch(['./src/**/*.html', './src/*.css'], postHtml);
}

exports.default = defaultTask; // series(clean, build)images/free_logo.jpg
