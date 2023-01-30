"use strict";

module.exports.test = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "IASQL Test!",
        input: event,
      },
      null,
      2
    ),
  };
  callback(null, response);
};
