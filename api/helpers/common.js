var express = require('express');
var path = require('path');
var fs = require('fs');

exports.is_obj = function (obj) {
    return (typeof obj === 'object');
}

exports.is_obj_empty = function (obj) {
    return ((typeof obj === 'undefined') || (obj === null) || (Object.keys(obj).length === 0));
}

exports.is_empty = function (str) {
    return (!str || (str.length == 0));
}

exports.is_date = function (obj) {
    return (Object.prototype.toString.call(obj) === "[object Date]" && !Number.isNaN(obj.getTime()));
}

exports.is_number = function (num) {
    return (!isNaN(parseFloat(num)) && isFinite(num));
}

exports.is_array = function (obj) {
    return ({}.toString.call(obj).indexOf('Array') >= 0);
}

// http://ejohn.org/blog/javascript-array-remove/
// Array Remove - By John Resig (MIT Licensed)
exports.remove_array = function (array, from, to) {
    var rest = array.slice((to || from) + 1 || array.length);
    array.length = from < 0 ? array.length + from : from;
    return array.push.apply(array, rest);
}

exports.contains = function (str, val) {
    return (str ? (str.indexOf(val) != -1) : false);
}

exports.replace_at = function (str, index, val) {
    if (str) {
        if ((index < 0) || (index > (str.length - 1))) {
            return str;
        } else {
            return str.substr(0, index) + val + str.substr(index + val.length);
        }
    } else {
        return '';
    }
}

exports.trim = function (str) {
    return (str ? str.replace(/^\s+|\s+$/g, '') : '');
}

exports.trim_body = function (html) {
    return html.replace(/\t/g, '')
        .replace(/\s{4}/g, '')
        .replace(/\s{3}/g, '')
        .replace(/\s{2}/g, '')
        .replace(/\r\n/g, '')
        .replace(/\n/g, '')
        .replace(/\r/g, '');
}

exports.starts_with = function (str, val) {
    return (str ? (str.lastIndexOf(val, 0) === 0) : false);
}

exports.ends_with = function (str, val) {
    return (str ? (str.slice(-val.length) === val) : false);
}

exports.left_truncate = function (str) {
    return (str ? str.substr(1, str.length) : '');
}

exports.right_truncate = function (str) {
    return (str ? str.substr(0, str.length - 1) : '');
}

exports.left = function (str, num) {
    if (str) {
        if ((num <= 0) || (num > str.length)) {
            return str;
        } else {
            return str.substring(0, num);
        }
    } else {
        return '';
    }
}

exports.right = function (str, num) {
    if (str) {
        var len = str.length;

        if ((num <= 0) || (num > len)) {
            return str;
        } else {
            return str.substring(len, len - num);
        }
    } else {
        return '';
    }
}

exports.parse_int = function (str, val) {
    var num = parseInt(str, 10);

    if (isNaN(num)) {
        num = val;
    }

    return num;
}

exports.parse_float = function (str, val) {
    var num = parseFloat(str, 10);

    if (isNaN(num)) {
        num = val;
    }

    return num;
}

// http://unicode.org/glossary/#control_codes
exports.escape_json = function (str) {
    return str.replace(/(\n)+$/, '\n')               /*   0A : trailing line feed           */
        .replace(/(\\n)+$/, '\n')               /*   0A : trailing line feed           */
        .replace(/\t/g, '&#09;')            /*   09 : horizontal tab               */
        .replace(/\n/g, '&#10;')            /*   0A : line feed                    */
        .replace(/\\n/g, '&#10;')            /*   0A : line feed                    */
        .replace(/'/g, '&#39;')            /*   "                                 */
        .replace(/"/g, '&#34;')            /*   "                                 */
        .replace(/\//g, '&#47;')            /*   \                                 */
        .replace(/\\/g, '&#92;')            /*   /                                 */
        .replace(/[\u0000-\u001F]/g, ' ')                /*   the first 32 control charcters    */
        .replace(/[\u007F-\u009F]/g, ' ');
    /*   the remaining control charcters   */
}

exports.gen_random = function (min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

exports.gen_nonce = function (len) {
    var nonce_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var nonce_len = nonce_chars.length - 1;
    var nonce = '';
    var i = 0;

    for (i = 0; i < len; i++) {
        nonce += nonce_chars.charAt(this.gen_random(0, nonce_len));
    }

    return nonce;
}

exports.get_formatted_timestamp = function (date, time_sep, hm_sep, include_ms, ms_sep) {
    function pad(n, d) {
        return exports.right(Array(n + 1).join('0') + d, n);
    }

    var formatted = date.getFullYear() + '-'
        + pad(2, date.getMonth() + 1) + '-'
        + pad(2, date.getDate()) + time_sep
        + pad(2, date.getHours()) + hm_sep
        + pad(2, date.getMinutes()) + hm_sep
        + pad(2, date.getSeconds());

    if (include_ms) {
        formatted += ms_sep + pad(3, date.getMilliseconds());
    }

    return formatted;
}

exports.format_seconds = function (seconds, precision) {
    if (!precision) {
        precision = 0;
    }

    var days = Math.floor(seconds / 86400);
    var hours = this.right('0' + Math.floor((seconds % 86400) / 3600), 2);
    var mins = this.right('0' + Math.floor((seconds % 3600) / 60), 2);
    var secs = '';
    var msecs = '';
    var output = ['', ''];

    output[0] = seconds.toFixed(precision).toString();

    if (precision == 0) {
        secs = this.right('0' + Math.ceil(seconds % 60), 2);

        output[1] = days.toString() + '-' + hours.toString() + ':' + mins.toString() + ':' + secs.toString();
    } else {
        secs = this.right('0' + Math.floor(seconds % 60), 2);
        msecs = this.left_truncate((seconds % 1).toFixed(precision).toString());

        output[1] = days.toString() + '-' + hours.toString() + ':' + mins.toString() + ':' + secs.toString() + msecs.toString();
    }

    return output;
}

exports.is_local_host = function (host) {
    return (this.starts_with(host, 'localhost')
    || this.starts_with(host, '127.0.0.1') // ipv4
    || this.ends_with(host, '127.0.0.1')   // ipv6
    || this.starts_with(host, '::1'));     // ipv6
}

exports.get_ip_address = function () {
    var interfaces = require('os').networkInterfaces();

    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }

    return '0.0.0.0';
}

exports.get_debug_port = function (argv, isRemove) {
    if (argv && argv.length > 0) {
        for (var i = 0; i < argv.length; i++) {
            var param = argv[i];
            if (param.indexOf('--debug-brk') !== -1) {
                var parts = param.split("=");
                if (isRemove) {
                    argv.splice(i, 1);
                }
                return exports.parse_int(parts[1]);
            }
        }
    }

    return null;
}

exports.get_path_and_file = function () {
    var distPath = path.join(__dirname, '/../../dist');
    var devPath = path.join(__dirname, '/../../client');
    var distMode = fs.existsSync(distPath);
    return {
        distMode: distMode,
        path: distMode ? distPath : devPath,
        file: distMode ? 'index.html' : 'src/index_dev.html',
        assets: distMode ? path.join(distPath, 'assets') : path.join(devPath, 'src/assets'),
        static: distMode ? path.join(distPath, 'static') : path.join(devPath, 'src/static'),
        libs: distMode ? path.join(distPath, 'libs') : path.join(devPath, 'src/libs'),
        prognetnm: distMode ? distPath : path.join(devPath, 'src')
    }
}

exports.adjustRunMode = function (app) {
    var paths = exports.get_path_and_file();

    //INFO: map 'assets' folder to correct location if not in distMode
    if (!paths.distMode) {
        app.use('/assets', express.static(paths.assets));
        app.use('/static', express.static(paths.static));
        app.use('/libs', express.static(paths.libs));
        app.use('/prognetnm', express.static(paths.prognetnm));
    }

    app.use(express.static(paths.path));
}


