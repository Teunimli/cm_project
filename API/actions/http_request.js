var request = require('request');

module.exports = {
    isUp(url) {
        request(url, function (err, res, body) {
            if (res) {
                if (res.statusCode !== 200) {
                    return (false);
                }
            } else {
                return (true);
            }
        });
    },
}