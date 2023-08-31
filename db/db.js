const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'db.json');

function readData() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = {
  readData,
  writeData
};
