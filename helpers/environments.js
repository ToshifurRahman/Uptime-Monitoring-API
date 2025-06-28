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
    twilio: {
        fromPhone: '+13515298385',
        accountSid: 'AC1a338f6d9d1808a7be3833172e394cd9',
        authToken: '7555d65a2fc78798cc7261ffedc3a1b0',
    },
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'vbcvbxcvuiovbuoirwerw',
    maxChecks: 5,
    twilio: {
        fromPhone: '+13515298385',
        accountSid: 'AC1a338f6d9d1808a7be3833172e394cd9',
        authToken: '7555d65a2fc78798cc7261ffedc3a1b0',
    },
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
