const request = require('request');

module.exports = {
    validateNumer(number, producttoken) {
        let headers = {
            "Content-Type": "application/json",
            "X-CM-PRODUCTTOKEN": producttoken,
        };
        let options = {
            url: 'https://api.cmtelecom.com/v1.1/numbervalidation',
            method: 'POST',
            headers: headers,
            json: true,
            body: { "phonenumber": number }
        };

        request(options, function (err, res, body) {
            if (res) {
                if (res.statusCode !== 200) {
                    console.log('hij komt bij de false in validation')
                    return false;

                }
                else
                {
                    if (body.valid_number === true)
                    {
                        console.log('hij komt bij detrue  in valid dationhttp')
                        return true;

                    }
                }
            }

        }
        );
    }
}
