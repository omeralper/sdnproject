
# 1. BUILD

2016-07-20

----------

## • Jenkins
See GIT module **devops/ui**


## • Manual Build Requirements
```
$ sudo npm install -g gulp
```

## • Manual Build
```
$ npm install
$ gulp
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# 2. TESTS

End-to-End Tests with [Nightwatch.js](http://nightwatchjs.org/api)
----------
2016-06-23

----------

## •  Xvfb

Info on [Xvfb](https://en.wikipedia.org/wiki/Xvfb)

```
$ sudo apt-get update
$ sudo apt-get install xvfb
```

## • Firefox v46

The current configuration file, nightwatch.json, requires Firefox version 46 or prior.
Later versions work only with the new [Marionette driver](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Marionette).

**ATTENTION**: Do not update Firefox.

```
$ wget http://ftp.mozilla.org/pub/firefox/releases/46.0b11/firefox-46.0b11.linux-x86_64.sdk.tar.bz2
$ tar -xjf firefox-46.0b11.linux-x86_64.sdk.tar.bz2
$ sudo ln -s /home/me/tools/firefox-sdk/bin/firefox /usr/bin/firefox
$ which firefox
$ firefox -v
```

## • Google Chrome

For further info: [Chrome Setup](https://github.com/nightwatchjs/nightwatch/wiki/Chrome-Setup)


Basically, the Nightwatch.js config file, **nightwatch.json**, should be configured for Google Chrome.

```
selenium.cli_args.webdriver.chrome.driver = "/path/to/chromedriver"
test_settings.default.desiredCapabilities.browserName = "chrome"
```

## • Run Tests

### Without Xvfb
```
$ gulp nightwatch
```

### With Xvfb
Reports and screenshots, both success and failure cases, are saved into their respective folders.
```
$ xvfb-run -a --server-args="-screen 0 1600x900x24+32" gulp nightwatch
```

## • Just One Test
```
$ node node_modules/nightwatch/bin/nightwatch -t tests/05_show_topology.js
```
