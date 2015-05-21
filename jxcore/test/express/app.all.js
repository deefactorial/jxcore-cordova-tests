if(typeof window === 'undefined') {
  var express = require('express')
      , request = require('supertest');
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

      request()
          .put(uri + '/tobi')
          .expect('PUT', function () {
            request(app)
                .get('/tobi')
                .expect('GET', done);
          });
    });

    it('should run the callback for a method just once', function (done) {
      request()
          .del(uri + '/tobi')
          .expect(404, done);
    })
  });
}