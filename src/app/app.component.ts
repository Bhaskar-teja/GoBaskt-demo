import { Component, OnInit } from '@angular/core';
declare const koreBotChat: any;
declare const koreAnonymousFn: any;
declare const $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gobasket';
  allowLocation: true;
  myChatFun(){
    //***CODE_START
  function assertion(options, callback) {
    var jsonData = {
    "clientId": botOptions.clientId,
    "clientSecret": botOptions.clientSecret,
    "identity": botOptions.userIdentity,
    "aud": "",
    "isAnonymous": false
    };
    $.ajax({
        url: botOptions.JWTUrl,
        type: "post",
        data: jsonData,
        dataType: "json",
        success: function (data) {
        options.assertion = data.jwt;
        options.handleError = koreBot.showError;
        options.chatHistory = koreBot.chatHistory;
        options.botDetails = koreBot.botDetails;
        callback(null, options);
          setTimeout(function () {
            if (koreBot && koreBot.initToken) {
                koreBot.initToken(options);
            }
          }, 2000);
        },
            error: function (err) {
            koreBot.showError(err.responseText);
            }
        });
        }
    
    let botOptions: any = {};
    let koreBot: any = {};
    
    botOptions.logLevel = "debug";
    botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
    botOptions.koreSpeechAPIUrl = "https://speech.kore.ai/";
   // botOptions.bearer = "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLTk5NGQ1N2ZjLTNkNGItNWYzMS05ZTQ5LWIzN2M0NDBiNTc1MyIsInN1YiI6Int7NjU0OTg3fX0ifQ.Du1C_-Dapx17fqT22AIEvFp_rNUbEz_j8np3cdeF6SU";
    botOptions.ttsSocketUrl = "wss://speech.kore.ai/tts/ws";
    botOptions.recorderWorkerPath = "…/libs/recorderWorker.js";
    botOptions.assertionFn = assertion;
    botOptions.koreAnonymousFn = koreAnonymousFn;
    
    botOptions.JWTUrl ="http://localhost:3000/api/users/sts";
    botOptions.userIdentity = "bhaskar@scketch.com";// Provide users email id here"
    botOptions.botInfo = {name:"Consumer VPA","_id":"st-432ca87d-c038-5cb6-b598-df914de5083f"}; // bot name is case sensitive
    botOptions.clientId = "cs-2fbacfd5-682f-5070-af06-5a607e956855";
    botOptions.clientSecret="67uUxiIovlUrgWc3eNuQ3YlK0j2jSGyk0aBoYm+7H4M=";
    
    var chatConfig = {
    botOptions: botOptions,
    allowIframe: false,
    isSendButton: false,
    isTTSEnabled: true,
    isSpeechEnabled: true,
    allowGoogleSpeech: true,
    
    loadHistory: true,
    messageHistoryLimit: 10,
    autoEnableSpeechAndTTS: false,
    graphLib: "d3"
    };
    
    koreBot = koreBotChat();
    koreBot.show(chatConfig);
    //***CODE_END
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation
  }
  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
  ngOnInit(){
    this.getMyLocation()
  }
  
}
