'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = "amzn1.ask.skill.5ddecf37-4871-4f4a-b94c-85694d344e50";

const SKILL_NAME = 'Project ststus';
const GET_FACT_MESSAGE = "Here's what happened today: ";
const HELP_MESSAGE = 'You can ask for project report... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
    'The team worked on 45 cases in the last 24 hours. There are 5 tickets which are pending of which 2 are of high priority. 1 ticket has not met the SLA. The Credit Reporting application received the highest number of tickets 30. We have scheduled deployment for tomorrow and is on track.',
    'The team worked on 53 cases in the last 24 hours. There are 4 tickets which are pending of which 1 are of high priority. 1 ticket has not met the SLA. The Credit Reporting application received the highest number of tickets 45. We have scheduled deployment for tomorrow and is on track.',
    'The team worked on 82 cases in the last 24 hours. There are 10 tickets which are pending of which 1 are of high priority. 3 ticket has not met the SLA. The Credit Reporting application received the highest number of tickets 10. We have scheduled deployment for tomorrow and is on track.',
];
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetStatusIntent');
    },
    'GetStatusIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
