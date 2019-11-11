const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');

const ABOUT = 'about';

exports.about_handle = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    let operator = request.body.queryResult.parameters.operator;

    function about(agent) {
        if (operator.toLowerCase() == "verizon") {
            agent.add('verizon is an American multinational telecommunications conglomerate.')
            console.log('user asked about verizon');
        }
        if (operator.toLowerCase() == "at&t") {
            agent.add('att&t is an American multinational telecommunications.')
            console.log('user asked about at&t');
        }
        if (operator.toLowerCase() == "t-mobile") {
            agent.add('t-mobile is an American multinational telecommunications.')
            console.log('user asked about t-mobile');

        }
    }

    let intentMap = new Map();
    intentMap.set(ABOUT, about);

    agent.handleRequest(intentMap);
});