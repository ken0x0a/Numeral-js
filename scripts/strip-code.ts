// https://github.com/nacholibre/node-readlines
// https://github.com/nickewing/line-reader

import * as readline from "readline";
import * as fs from "fs";

const FILENAME = "/path/to/file";
const stripStart = "(function (global, factory) {";
const stripEnd = "}(this, function () {";
const stripLines = ["}));"];

const read = fs.createReadStream("a");

const rl = readline.createInterface({
  input: fs.createReadStream(FILENAME),
  output: process.stdout
});
fs.write;

let shouldIgnore: boolean = false;
rl.on("line", function(line) {
  if (line.includes(stripEnd)) return (shouldIgnore = false);
  if (shouldIgnore) return;
  if (line.includes(stripStart)) return (shouldIgnore = true);

  for (const str of stripLines) {
    if (line.includes(str)) return;
  }

  return;
  // rl.close();
});
