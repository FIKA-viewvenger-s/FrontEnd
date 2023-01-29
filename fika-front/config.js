const config = {
  DEV: {
    API_URL: "",
  },
  LOCAL: {
    API_URL: "http://localhost:3000/api",
  },
  PROD: {
    API_URL: "",
  },
};

module.exports = config[process.env.NEXT_PUBLIC_ENV];
