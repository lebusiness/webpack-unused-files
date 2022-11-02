const fs = require('fs');

export function isFile(fileName: string): boolean {
  return fs.lstatSync(fileName).isFile();
};