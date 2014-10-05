var gulp           = require('gulp');
var $              = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var del            = require('del');
var browserSync    = require('browser-sync');
var reload         = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
'ie >= 10',
'ie_mob >= 10',
'ff >= 30',
'chrome >= 34',
'safari >= 5.1',
'opera >= 23',
'ios >= 7',
'android >= 4.4',
'bb >= 10'
];

// For bower -------------------------------------
gulp.task('bower', function() {
  return gulp.src(mainBowerFiles())
  .pipe(gulp.dest('/assets/'))
  .pipe($.size({title: 'bower'}));
});

gulp.task('bower:clean',
  del.bind(null, ['assets/'])
  );

// Compile and Automatically Prefix ----------------
gulp.task('sass', function() {
  return gulp.src([
    'sass/**/*.scss'
  ])
  .pipe($.rubySass({
      style: 'expanded',
      precision: 10
    })
    .on('error', console.error.bind(console))
  )
  .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
  .pipe(gulp.dest('css/'))
  .pipe(reload({stream:true}))
  .pipe($.size({title: 'sass'}));
});

gulp.task('css', function () {
  return gulp.src([
    'css/**/*.css'
  ])
  .pipe($.changed('./' + process.env.CSS_DIR, {extension: '.css'}))
  .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
  .pipe(gulp.dest('css/'))
  .pipe(reload({stream:true}))
  .pipe($.size({title: 'css'}));
});

// Concatenate And Minify ------------------------
gulp.task('js', function() {
  return gulp.src('js/**/.js')
  .pipe(gulp.dest('dist/'))
  .pipe($.size({title: 'js'}));
});

// Edited php file after reload browsers
gulp.task('html', function() {
  return gulp.src('./**/*.html');
});

// serve -----------------------------------------
// Build and serve the output from the dist build

// Watch Files For Changes & Reload Vagrant Server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    open: false,
    notify: false,
  });
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(['sass/**/*.scss'], ['sass']);
  gulp.watch(['css/**/*.css'], ['css']);
  gulp.watch(['js/**/*.js'], ['js', reload]);
  gulp.watch(['./**/*.html'], ['html', reload]);
});
