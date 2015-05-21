if(typeof window === 'undefined') {
  var express = require('express')
      , request = require('superagent')
      , assert = require('assert');
  var app = express();

  app.all('/tobi', function(req, res){
    res.end(req.method);
  });

  var n = 0;
  app.all('/*', function(req, res, next){
    if (n++) return done(new Error('DELETE called several times'));
    next();
  });

  var server = app.listen(5001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });
}

if(typeof describe !== 'undefined') {
  var uri = "http://localhost:5001";
  describe('app.all()', function () {
    it('should add a router per method', function (done) {
      request('PUT',uri + '/tobi')
          .end(function (err, res) {
              assert(res.ok, 'response should be ok');
              request('GET',uri + "/tobi")
                  .end(function (err, res) {
                      assert(res.ok, 'response should be ok');
                      done();
                  });
          });
    });

    it('should run the callback for a method just once', function (done) {
      request('DELETE',uri + '/tobi').end(function(err,res){
          assert(res.status == 404, "response should be 404 Not Found");
      });
    });
  });
}