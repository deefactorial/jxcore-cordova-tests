# jxcore-cordova-tests
Tests For jxcore-cordova

follow installation instructions at
[jxcore-cordova](https://github.com/jxcore/jxcore-cordova.git)

in project root

```sh
cordova plugin add https://github.com/apache/cordova-plugin-whitelist.git --save
vi config.xml
```
add this line in config.xml after the plugin cordova-plugin-whitelist

```xml
<allow-navigation href="http://localhost:3030/*" />
```

```sh
git clone https://github.com/jxcore/jxcore-cordova
cordova plugin add jxcore-cordova/io.jxcore.node/
cd www
mv jxcore jxcore_stash
git clone https://github.com/deefactorial/jxcore-cordova-tests.git jxcore
cd jxcore
mv index.html ../
npm install
grunt server
google-chrome http://localhost:3030
cordova platform add android
cordova run android
```

make changes to www/jxcore/app.js

```sh
cordova run android
```

#Notes

if running cordova 5.0.0 check that your not affected by this error
http://stackoverflow.com/questions/30048429/cordova-does-not-actually-install-app-on-android-device