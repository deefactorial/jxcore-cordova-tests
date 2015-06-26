### JXcore Cordova - Node API tests

```sh
cordova create jxcore-cordova-tests org.jxcore.jxcorecordova.jxcorecordovatests jxcore-cordova-tests
cd jxcore-cordova-tests
cordova plugin add https://github.com/apache/cordova-plugin-whitelist.git --save
```

add the line below in `config.xml` after the plugin `cordova-plugin-whitelist` not recommened for production systems

```xml
<allow-navigation href="*" />
```

get jxcore-cordova
```
git clone https://github.com/jxcore/jxcore-cordova
```

running android tests
```sh
cordova plugin add jxcore-cordova
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
