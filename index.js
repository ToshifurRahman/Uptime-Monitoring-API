/*
 * Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Md. Toshifur Rahman
 * Date: 26/06/2025
 *
 */
// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const { sendTwilioSms } = require('./helpers/notifications');

// app object - module scaffolding
const app = {};

// Twilio Send Request
// sendTwilioSms('01700540970', 'Hello World', (err) => {
//     console.log('This is the error', err);
// });

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
