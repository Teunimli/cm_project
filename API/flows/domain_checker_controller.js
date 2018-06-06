var httpRequest = require('../actions/http_request')

module.exports = {
    CheckDomain(req, res, next) {
        if(!httpRequest.isUp(res.body.url))
        {
            
        }
    }
}