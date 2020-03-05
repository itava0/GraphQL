const express = require('express');
const graphqlHTTP = require("express-graphql");

const app = express();

app.listen(8888, () => {
  console.log("Now listing for request on port 8888")
});