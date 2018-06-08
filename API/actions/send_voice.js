const request = require('request');

module.exports = {

    sendVoice(callee, caller, anonymous, message){
        return new Promise((resolve) => {
            let headers = {
                "Content-Type": "application/json",
            };
            let options = {
                url: 'https://api.cmtelecom.com/voiceapi/v2/Notification',
                method: 'POST',
                headers: headers,
                json: true,
                body: {
                    "callee": "0031642338343",
                    "caller": "0031657618707",
                    "anonymous": false,
                    "prompt": "Hoe gaat het? Hoe gaat het? Hoe gaat het? Hoe gaat het? Hoe gaat het? Hoe gaat het? Hoe gaat het? Hoe gaat het? Hoe gaat het? Hoe gaat het? Hoe gaat het? Hoe gaat het? ",
                    "prompt-type": "TTS",
                    "voice": {
                        "language": "nl-NL",
                        "gender": "Male",
                        "number": 1
                    }
                }
            };
        });
}