/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Md. Toshifur Rahman
 * Date: 26/06/2025
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
