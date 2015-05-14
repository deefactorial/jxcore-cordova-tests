# jxcore-cordova-tests
Tests For jxcore-cordova

follow installation instructions at
[jxcore-cordova](https://github.com/jxcore/jxcore-cordova.git)

in project root

```sh
cd jxcore-cordova/io.jxcore.node/app
mv jxcore jxcore_stash
git clone https://github.com/deefactorial/jxcore-cordova-tests.git jxcore
cd jxcore
mv index.html ../../../../www
npm install
grunt server
google-chrome http://localhost:3030
cd ../../../../
cordova plugin remove io.jxcore.node
cordova plugin add jxcore-cordova/io.jxcore.node/
cordova run android
```

make changes to jxcore-cordova/io.jxcore.node/app/jxcore/

```sh
cordova plugin remove io.jxcore.node
cordova plugin add jxcore-cordova/io.jxcore.node/
cordova run android
```