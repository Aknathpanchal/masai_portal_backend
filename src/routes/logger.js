const { createLogger, transports, format } = require("winston");
require("winston-mongodb");

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.MongoDB({
      level: "info",
      //db: process.env.DATABASE,
      db:"mongodb+srv://aknath_08:9H4BTiN8yKn3EvHT@cluster0.hfkca9p.mongodb.net/?retryWrites=true&w=majority",
      options: { useUnifiedTopology: true },
      collection: "serverdata",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
