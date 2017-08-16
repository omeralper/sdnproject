
// https://github.com/gulpjs/gulp
var gulp            = require('gulp');
// https://github.com/sindresorhus/del
var del             = require('del');
// https://github.com/slushjs/gulp-install
var install         = require('gulp-install');
//var exec            = require('child_process').exec;
//var execFileSync    = require('child_process').execFileSync;
//var spawn           = require('child_process').spawn;
var spawnSync       = require('child_process').spawnSync;
// https://github.com/carsdotcom/gulp-sonar
var sonar           = require('gulp-sonar');
// https://github.com/gulpjs/gulp-util
var gutil           = require('gulp-util');
// https://github.com/nightwatchjs/nightwatch
var nightwatch      = require('nightwatch');
// https://nodejs.org/api/path.html
var path            = require('path');
// https://nodejs.org/api/util.html
var util            = require('util');
// https://nodejs.org/api/fs.html
var fs              = require('fs');


var package_json    = require('../package.json');
var gulp_config     = require('./gulpfile.config');
var config          = new gulp_config();


function ng(cb) {
    try {
        spawnSync('../client/ng.sh', ['build', '--aot=true', '--progress=false', '--verbose=true', '--target=production'], { stdio: 'inherit' });
        cb(null);
    } catch (e) {
        cb(fail('ng', e, true));
    }
}

function rm(cb) {
    return del(['../../frontend/',
                '../test/',
                '../tools/',
                '../typings/',
                '../client/*',
                '../client/.*',
                '!../client/dist',
                '../build'],
        {dryRun: false, force:true}).then(paths => {
            //console.log('\nRM - DELETED FILES AND FOLDERS:\n%s\n', paths.join('\n'));
        });
}

function fail(task, msg, show) {
    throw (new gutil.PluginError(task, msg, { showStack: show }));
}

gulp.task('hello', function() {
    console.log('Hello World');
});

gulp.task('clean', function() {
    return del(['../client/**/*'],
        {dryRun: false, force:true}).then(paths => {
            //console.log('\nCLEAN - DELETED FILES AND FOLDERS:\n%s\n', paths.join('\n'));
        });
});

gulp.task('frontend', ['clean'], function() {
    return gulp.src(['../../frontend/**/*',
                     '../../frontend/.*'])
               .pipe(gulp.dest('../client'));
});

gulp.task('install', ['frontend'], function() {
    return gulp.src(['../package.json',
                     '../client/package.json'])
               .pipe(install());
});

gulp.task('ng', ['install'], function(cb) {
    //gutil.noop();
    ng(cb);
})

gulp.task('dist', ['ng'], function(cb) {
    if (fs.existsSync('../client/dist/')) {
        if (fs.existsSync('../client/dist/index.html')) {
            cb(null);
        } else {
            cb(fail('dist', 'index.html does NOT exist: swagger-api/client/dist/index.html', false));
        }
    } else {
        cb(fail('dist', 'dir does NOT exist: swagger-api/client/dist/', false));
    }
})

// task with no dependency
gulp.task('x-ng', function(cb) {
    ng(cb);
})

gulp.task('sonar', function () {
    var options = {
        sonar: {
            host: {
                url: config.sonar.url
            },
            scm: {
                provider: 'git'
            },
            projectKey: config.sonar.key,
            projectName: config.sonar.name,
            projectVersion: process.env.MILAT_BUILD_VERSION || package_json.version,
            working: {
                directory: path.join(__dirname, '.sonar')
            },
            sourceEncoding: 'UTF-8',
            exec: {
                // All these properties will be send to the child_process.exec method
                // see: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
                // Increase the amount of data allowed on stdout or stderr
                // if this value is exceeded then the child process is killed, and the gulp-sonar will fail
                maxBuffer : config.sonar.max_buffer
            },
            language: 'ts',
            projectBaseDir: path.join(__dirname, '../client'),
            ts: {
                tslintpath: './node_modules/tslint/bin/tslint',
                tslintconfigpath: './tslint.json',
                lcov: {
                    reportPath: './.sonar/lcov.info'
                }
            },
            sources: '.',
            inclusions: util.format('%s', '**/*.ts'),
            exclusions: util.format('%s,%s,%s,%s,%s,%s', 'typings/**',
                                                         'assets/**',
                                                         'node_modules/**',
                                                         'libs/**',
                                                         'components/coverage/**',
                                                         'components/istanbul/**')
        }
    };

    // gulp source doesn't matter, all files are referenced in options object above
    return gulp.src('gulpfile.js', { read: false })
        .pipe(sonar(options))
        .on('error', util.log);
});

// task with no dependency
gulp.task('rm', function(cb) {
    rm(cb);
});

gulp.task('nightwatch', function () {
    nightwatch.runner({
        config: './nightwatch.json',
        env: 'default'
    }, function (passed) {
        if (passed) {
            console.log('INFO - All tests passed successfully');
            //process.exit(0);
        } else {
            console.log('ERROR - Some/All tests failed.');
            //process.exit(1);
        }
    });
});

gulp.task('nightwatch-frontend', function () {
    process.chdir('../../frontend/nightwatch');

    nightwatch.runner({
        config: './nightwatch.json',
        env: 'default'
    }, function (passed) {
        if (passed) {
            console.log('INFO - All tests passed successfully');
            //process.exit(0);
        } else {
            console.log('ERROR - Some/All tests failed.');
            //process.exit(1);
        }
    });
});

// a tree list: gulp --tasks
// sequential tasks = each task depends on the previous task which returns a stream, a promise or calls back
gulp.task('default', ['clean', 'frontend', 'install', 'ng', 'dist']);
