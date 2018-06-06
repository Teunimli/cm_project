var httpRequest = require('../actions/http_request')
var numberValidation = require('../actions/number_validation')
var sendSms = require('../actions/send_sms')

if(httpRequest.isUp('https://google.nl/'))
{
    console.log('hij returnded true')
}
else{
    console.log('hij returnded false')
}
if(numberValidation.validateNumer('0031613346141','4ECA4A54-0EE9-4B27-9775-23AB6986B542'))
{
    console.log('validation true')
}
else{
    console.log('validation false')
}
sendSms.validateNumer('4ECA4A54-0EE9-4B27-9775-23AB6986B542','api send sms werkt','+31613346141', 'domaincheck' )