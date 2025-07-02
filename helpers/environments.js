/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Md. Toshifur Rahman
 * Date: 26/06/2025
 *
 */
// dependecies

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'waeruqwoiecnvnkrljtjj',
    maxChecks: 5,
    twilio: {},
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'vbcvbxcvuiovbuoirwerw',
    maxChecks: 5,
    twilio: {},
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// Export Module
module.exports = environmentToExport;
