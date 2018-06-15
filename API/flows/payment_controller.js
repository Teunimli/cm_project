const getPaymentToken = require('../actions/payment_getToken');
const payment = require('../actions/payment');
var sendSms = require('../actions/send_sms');


module.exports = {
    paymentLinkGetter(req, res) {
        let json = req.body;

        getPaymentToken.getPaymentToken(json.client_id, json.client_secret).then((accessToken) => {
            if (accessToken) {
                payment.getPayment (json.amount, json.merchant_reference, accessToken).then((body) => {
                    if (!false) {
                        res.status(200);
                        sendSms.sendSMS(json.token, "De payment link is: " + body.uri, json.phoneNumber, "CM"); 
                    }
                });
            }
        });
    }
};