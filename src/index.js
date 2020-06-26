/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {httpClient} from '@digitalbazaar/http-client';

async function getSomething() {
  const x = await httpClient.get('https://httpbin.org/json');
  console.log(JSON.stringify(x, null, 2));
}

getSomething();
