/*
 * Title: Routes
 * Description: Application Routes
 * Author: Md. Toshifur Rahman
 * Date: 26/06/2025
 */
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
