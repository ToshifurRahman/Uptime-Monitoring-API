/*
 * Title: Utilities
 * Description: Important utility function
 * Author: Md. Toshifur Rahman
 * Date: 27/06/2025
 *
 */
// dependecies

// module scaffolding
const crypto = require('crypto');

const utilities = {};
const environments = require('./environments');

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output;
    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }
    return output;
};

// hash string
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};

// Export Module
module.exports = utilities;
