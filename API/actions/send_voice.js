const request = require('request');

module.exports = {

    sendVoice(token, callee, caller, anonymous, message){
        return new Promise((resolve) => {
            let headers = {
                "Content-Type": "application/json",
                "X-CM-PRODUCTTOKEN": token
            };
            let options = {
                url: 'https://api.cmtelecom.com/voiceapi/v2/Notification',
                method: 'POST',
                headers: headers,
                json: true,
                body: {
                    "callee": callee,
                    "caller": caller,
                    "anonymous": anonymous,
                    "prompt": prompt(),
                    "prompt-type": "TTS",
                    "voice": {
                        "language": "nl-NL",
                        "gender": "Female",
                        "number": 1
                    }
                }
            };
        });
}