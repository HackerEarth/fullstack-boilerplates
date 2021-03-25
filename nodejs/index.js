const { request } = require("express");

const app = require("./app");
const port = process.env.PORT || 8000;

app.listen(port, "0.0.0.0", () => {
    console.log(`backend app is listening on http://0.0.0.0:${port}/`);
});