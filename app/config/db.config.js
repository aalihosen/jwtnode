//for local
module.exports = {
    HOST: "localhost",
    PORT: 27017,
    DB: "nodejwthomerun_db"
  };

// for docker
  // const {
  //   DB_USER,
  //   DB_PASSWORD,
  //   DB_HOST,
  //   DB_PORT,
  //   DB_NAME,
  // } = process.env;
  
  // module.exports = {
  //   url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
  // };