const process = require('node:process');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV.trim();

// https://stackoverflow.com/a/69480225/1927014
require('dotenv').config({ path: path.join(__dirname, `${NODE_ENV}.env`) });

const environmentVariables = {
  NODE_ENV: NODE_ENV,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
};

const getEnvVariables = () => {
  if (!environmentVariables.NODE_ENV) {
    throw new Error('Missing NODE_ENV environment variable');
  }

  return environmentVariables;
};

// Check for missing environment variables
Object.entries(getEnvVariables()).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing ${key} environment variable`);
  }
});

module.exports = getEnvVariables();
