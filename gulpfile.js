let gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    uglify = require("gulp-uglify");

gulp.task("sass", function() {
    return gulp
        .src("app/sass/*.sass")
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(autoprefixer())
        .pipe(gulp.dest("build/css"));
});

gulp.task("js", function() {
    return gulp
        .src("app/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("build/js"));
});

gulp.task("watch", function() {
    gulp.watch(["app/sass/*.sass", "app/js/*.js"], gulp.parallel("sass", "js"));
});

gulp.task("default", function() {
    gulp.parallel("watch");
});