const config = {
  DEV: {
    API_URL: "http://43.201.68.5:8080",
  },
  LOCAL: {
    API_URL: "http://localhost:3000",
  },
  PROD: {
    API_URL: "http://43.201.68.5:8080",
  },
};

module.exports = config[process.env.NEXT_PUBLIC_ENV];
