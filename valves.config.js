// valves.config.js
const config = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    valveTimeout: 5000,
    debugMode: true,
  },
  production: {
    apiUrl: 'https://api.valves-control.com',
    valveTimeout: 10000,
    debugMode: false,
  }
};

const currentEnv = process.env.NODE_ENV || 'development';
export default config[currentEnv];
