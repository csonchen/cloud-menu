import gulp from 'gulp';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';
import rename from 'gulp-rename';

const pugFiles = 'pages/**/*.pug';
const componentPugFiles = 'components/**/*.pug';
const stylusFiles = 'pages/**/*.styl';
const componentStylusFiles = 'components/**/*.styl';
const appStylus = 'app.styl';
const commonStylusFiles = 'styles/*.styl';

async function doPUG(path, distPath) {
    return gulp.src(path)
        .pipe(pug())
        .pipe(rename({
            extname: '.wxml',
        }))
        .pipe(gulp.dest(distPath));
}

async function doStylus(path, distPath) {
    return gulp.src(path)
        .pipe(stylus({
            'include css': true,
        }))
        .pipe(rename({
            extname: '.wxss',
        }))
        .pipe(gulp.dest(distPath))
}

gulp.task('pug', async() => {
    return doPUG(pugFiles, 'pages')
})

gulp.task('componentPug', async() => {
    return doPUG(componentPugFiles, 'components')
})

gulp.task('stylus', async() => {
    return doStylus(stylusFiles, 'pages')
})

gulp.task('componentStylus', async() => {
    return doStylus(componentStylusFiles, 'components')
})

gulp.task('commonStylus', async() => {
    return doStylus(commonStylusFiles, 'styles')
})

gulp.task('app', () => {
    return gulp.src(appStylus)
        .pipe(stylus({
            'include css': true,
        }))
        .pipe(rename({
            extname: '.wxss'
        }))
        .pipe(gulp.dest('./'))
})

gulp.task('watch', gulp.series(
    gulp.parallel('pug', 'componentPug', 'stylus', 'commonStylus', 'app', ),
    () => {
        gulp.watch(pugFiles, gulp.parallel('pug'))
        gulp.watch(componentPugFiles, gulp.parallel('componentPug'))
        gulp.watch(stylusFiles, gulp.parallel('stylus'))
        gulp.watch(componentStylusFiles, gulp.parallel('componentStylus'))
        gulp.watch(commonStylusFiles, gulp.parallel('commonStylus'))
        gulp.watch(appStylus, gulp.parallel('app'))
    },
    taskDone => taskDone()
))

gulp.task('default', gulp.parallel(
    'pug',
    'componentPug',
    'stylus',
    'componentStylus',
    'commonStylus',
    'app',
    taskDone => taskDone()
))