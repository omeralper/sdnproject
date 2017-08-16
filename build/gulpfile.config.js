'use strict';

var gulp_config = (function () {
    function config() {
        this.source = './../client';
        this.source_app = this.source;

        this.ts_output_path = this.source_app;
        this.all_java_script = [this.source_app + '/**/*.js'];
        this.all_type_script = this.source_app + '/**/*.ts';

        this.maps_enabled = true;
        // https://www.npmjs.com/package/gulp-sourcemaps
        this.maps_options = {
                                addComment: true,
                                includeContent: true
                            };

        this.typings = this.source + '/typings';
        this.lib_ts_defs = this.typings + '/**/*.ts';

        this.sonar = {
            url: 'http://192.168.20.202:8081/sonar',
            key: 'MilatAYB',
            name: 'MILAT_AYB',
            max_buffer: 1024 * 1024
        }
    }

    return config;
})();

module.exports = gulp_config;
