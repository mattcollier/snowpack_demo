import {httpClient} from "/web_modules/@digitalbazaar/http-client.js";
async function getSomething() {
  const x = await httpClient.get("https://httpbin.org/json");
  console.log(JSON.stringify(x, null, 2));
}
getSomething();
