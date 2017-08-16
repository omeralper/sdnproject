/**
 * Created by omeroz on 5/10/2017.
 */
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things

    var map = {
        'app': 'src/app', // 'dist',
        '@angular': 'npm:@angular',
        'rxjs': 'npm:rxjs',
        'angular2-uuid' : 'npm:angular2-uuid',
        'crypto-js' : 'npm:crypto-js'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-uuid' : {main: 'index.js',defaultExtension: 'js'},
        'crypto-js' : {main: 'index.js', defaultExtension: 'js'},
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'platform-server',
        'router',
        'router-deprecated'
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages,
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        }
    };
    System.config(config);
})(this);