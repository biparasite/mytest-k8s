import express from "express";
import os from "os";

const app = express();
const PORT = 3000;

#build version 0.0.1
app.get("/", (req, res) => {
  const helloMessage = `<h1>Hello from the ${os.hostname()}</h1>`;
  console.log(helloMessage);
  res.send(helloMessage);
});

#build version 0.0.2
app.get("/nginx", async (req, res) => {
  const url = "http://nginx";
  const response = await fetch(url);
  const body = await response.text();
  res.send(body);
});

#build version 0.0.3
app.get("/json", async (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const response = await fetch(url);
  const body = await response.text();
  res.header("Content-Type", "application/json");
  res.send(body);
});

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`);
});
