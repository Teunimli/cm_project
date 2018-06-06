var request = require('request');

module.exports = {
    isUp(url) {
        request(url, function (err, res, body) {
            if (res) {
                if (res.statusCode !== 200) {
                    console.log('hij komt bij de false in http')
                    return false;
                }
                else{
                    console.log('hij komt bij de true in hahahahttp')
                    return true;

                }
            } else {
                console.log('hij komt bij de true in http')
                return true;
            }
        });
    },
}