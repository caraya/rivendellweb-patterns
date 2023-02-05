const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

// Image Processing
// We need path for the task to work when detecting extesions
const path = require('path');
const squoosh = require('gulp-libsquoosh');

// Babel
const babel = require('gulp-babel');

// Experimenting with Fractal directly in Gulp
const fractal = require("./fractal.js");
// make use of Fractal's console object for logging
const logger = fractal.cli.console;

// PostCSS plugins
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const importer = require('postcss-easy-import');
const nesting = require('postcss-nesting');
const simpleVars = require('postcss-simple-vars');
const sorting = require('postcss-sorting');
// Added as second blog post on how to build a postcss workflow
const property = require(`postcss-define-property`);
const condition = require('postcss-conditionals');
const each = require('postcss-each');
const pcfor = require('postcss-for');
const colors = require('postcss-color-function');
// Still on the fence about these
// const presetEnv = require('postcss-preset-env');
// const cssnano = require('cssnano');

// List of all the processors/plugins that we use
// in the project
const processors = [
  importer({
    glob: true
  }),
  property,
  simpleVars,
  nesting,
  autoprefixer,
  sorting({
    order: [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules',
    ],
    'properties-order': 'alphabetical',
    'unspecified-properties-position': 'bottom',
  }),
  colors,
  condition,
  each,
  pcfor,
];

gulp.task('css', () => {
  return gulp.src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('static/css'));
});

/**
 * @name babel
 * @description Transpiles ES6 to ES5 using Babel. As Node and browsers support more of the spec natively this will move to supporting ES2016 and later transpilation. It requires the `@babel/preset-env` plugin
 * @return {void}
 *
 * @see {@link http://babeljs.io/|Babel}
 * @see {@link http://babeljs.io/docs/learn-es2015/|Learn ES2015}
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/|ECMAScript 2015 specification}
 */
 gulp.task('babel', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [
        "@babel/preset-env",
      ],
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/js'))
});

/**
 * @name imageCompress
 * @description Squoosh all images in the src/originals folder using gulp-libsquoosh
 * @return {void}
 *
 * @see {@link https://www.npmjs.com/package/gulp-libsquoosh|gulp-libsquoosh}
 * @see {@link https://github.com/GoogleChromeLabs/squoosh/tree/dev/libsquoosh|libsquoosh}
*/
gulp.task('imageCompress', () => {
  return gulp.src(['src/**/*.{png,jpg,webp}'])
    .pipe(
      squoosh((src) => {
        // console.log(src);
        const extname = path.extname(src.path);
        let options = {
          encodeOptions: squoosh.DefaultEncodeOptions[extname],
        };

        if (extname === '.jpg') {
          options = {
            encodeOptions: {
              jxl: {},
              mozjpeg: {},
            },
          };
        }

        if (extname === '.png') {
          options = {
            encodeOptions: {
              avif: {},
            },
            preprocessOptions: {
              quant: {
                enabled: true,
                numColors: 16,
              },
            },
          };
        }

        return options;
      }),
    )
    .pipe(gulp.dest('dist/images'));
});

// Fractal 

// Taken from https://github.com/alarisprime/fractal-starter-kit/blob/master/gulpfile.js
gulp.task('fractal:start', function () {
	const server = fractal.web.server({
		sync: true
	});
	server.on('error', err => logger.error(err.message));
	return server.start().then(() => {
		logger.success(`Fractal server is now running at ${server.urls.sync.local}`);
	});
});

/*
* An example of a Gulp task that to run a static export of the web UI.
*/

gulp.task('fractal:build', function () {
	const builder = fractal.web.builder();
	builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
	builder.on('error', err => logger.error(err.message));
	return builder.start().then(() => {
		logger.success('Fractal build completed!');
	});
});

// Watch
gulp.task('watch', () =>{
  gulp.watch(
    `src/**/*.js`,
    gulp.series('babel')
  );
  gulp.watch(
    `src/**/*.css`,
    gulp.series('css')
  );
})

gulp.task('dev', gulp.series(
  'css', 
  'babel', 
  'fractal:build', 
  'fractal:start',
  'watch'
));

gulp.task('default', gulp.series('dev'));