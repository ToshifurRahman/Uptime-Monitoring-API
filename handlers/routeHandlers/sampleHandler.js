/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Md. Toshifur Rahman
 * Date: 26/06/2025
 */
// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
