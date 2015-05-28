# jxcore-cordova-tests
tests for jxcore-cordova

This is a test repo for the jxcore cordova project located here:
[jxcore-cordova](https://github.com/jxcore/jxcore-cordova.git)

```sh
cordova create jxcore-cordova-tests org.jxcore.jxcorecordova.jxcorecordovatests jxcore-cordova-tests
cd jxcore-cordova-tests
cordova plugin add https://github.com/apache/cordova-plugin-whitelist.git --save
```
add this line in `config.xml` after the plugin `cordova-plugin-whitelist` not recommened for production systems

```xml
<allow-navigation href="*" />
```

running android tests

```sh
cordova plugin add https://github.com/jxcore/jxcore-cordova.git
rm -Rf www
git clone https://github.com/deefactorial/jxcore-cordova-tests.git www
cd www/jxcore
npm install
cordova platform add android
cordova run
```

run tests on native node

```bash
cd www/jxcore
npm install
mocha
```

#Notes

if running cordova 5.0.0 check that your not affected by this error
http://stackoverflow.com/questions/30048429/cordova-does-not-actually-install-app-on-android-device

#Contributions

Tests from the [superagent](https://github.com/visionmedia/superagent) project have been incorporated into this project.