var fs = require('fs');

(function copyCordova(){

    console.log('Copy to cordova www...');

    copyFile('./index.html', './cordova/www/index.html', function(err,success){
        if(err) return console.log(err);

        copyFile('./bundle.js', './cordova/www/bundle.js', function (err, success){
            if (err) return console.log(err);

            completed();
        })
    });

})();

function completed(){
    console.log('Copy completed');
}


function copyFile(source, target, cb) {
    var cbCalled = false;

    var rd = fs.createReadStream(source);
    rd.on("error", function (err) {
        done(err);
    });
    var wr = fs.createWriteStream(target);
    wr.on("error", function (err) {
        done(err);
    });
    wr.on("close", function (ex) {
        done();
    });
    rd.pipe(wr);

    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }
}