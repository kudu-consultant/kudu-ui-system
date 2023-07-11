import fs from "fs";
import test from "node:test";
import assert from "assert";
import { JSDOM } from "jsdom";

const indexContent = fs
  .readFileSync("./test-suite/index.html", "utf8")
  .replace(`<link href="/dist/output.css" rel="stylesheet" />`, ``);
const domWindow = new JSDOM(indexContent, {
  resources: "usable",
  runScripts: "dangerously",
}).window;
const css = fs.readFileSync("./test-suite/dist/output.css", "utf-8");
const style = domWindow.document.createElement("style");
style.textContent = css;
domWindow.document.head.appendChild(style);

test("mount DOM", (t) => {
  assert.strictEqual(
    domWindow.document.querySelector("head").outerHTML.includes("meta"),
    true
  );
});

test("background", (t) => {
  let node = domWindow.document.querySelector("body");
  let bgColor = domWindow
    .getComputedStyle(node)
    .getPropertyValue("background-color");
  assert.strictEqual(bgColor, "rgba(0, 0, 0, 0)");
});

test("theme", (t) => {
  let node = domWindow.document.querySelector(".bg-primary");
  let color = domWindow
    .getComputedStyle(node)
    .getPropertyValue("background-color");
  console.log("COLOR : ", color);
  assert.strictEqual(color, "rgb(225, 41, 108)");
});
