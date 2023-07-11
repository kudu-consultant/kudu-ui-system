import { JSDOM } from "jsdom";
import test from "node:test";
import assert from "assert";

// test.describe("Esta es mi demo", undefined, () => {
//   test.it("Testeando un boton", undefined, () => {
//     const dom = new JSDOM("<p>Hello world</p>");
//     console.log(dom);
//   });
// });

const baseHTML = `
<!DOCTYPE html>
<html lang="en" data-theme="kududesign">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="../dist/output.css" rel="stylesheet" />
  </head>
  <body>
    <button class="btn">Hello world</button>
  </body>
</html>
`;

const dom = new JSDOM(baseHTML);
const node = dom.window.document.getElementsByTagName("button")[0];
const property = dom.window.getComputedStyle(node).color;
console.log("propiedad", property);
