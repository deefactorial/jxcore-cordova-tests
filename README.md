# jxcore-cordova-tests
Tests For jxcore-cordova

follow installation instructions at
[jxcore-cordova](https://github.com/jxcore/jxcore-cordova.git)

in project root

```sh
cd www
mv jxcore jxcore_stash
git clone https://github.com/deefactorial/jxcore-cordova-tests.git jxcore
cd jxcore
mv index.html ../
npm install
grunt server
google-chrome http://localhost:3030
cordova run android
```

make changes to www/jxcore/app.js

```sh
cordova run android
```