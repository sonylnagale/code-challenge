const csv = require('csvtojson');

const csvFilePath = process.argv[2];

class LogLine {
  constructor(id) {
    this.id = id,
      this.factories = [],
      this.pairs = [];
  }

  addEntry(factory) {
    this.factories.push(factory);
  }

  calculatePairs() {
    for (let i = 0; i < this.factories.length; i++) {
      for (let j = i + 1; j < this.factories.length; j++) {
        // we can safely do it in order since the log entries are already in order
        this.pairs.push([this.factories[i], this.factories[j]]);
      }
    }
  }
}

let factoryPairs = [];

csv({
  noheader: true,
  output: "json",
})
.fromFile(csvFilePath)
.then((csvRow) => {

  // Given that the first line of the file is the minimum number of co-occurrences and assuming there is only one log file per pass:
  const coocurrenceMinimum = csvRow[0].field1;

  // now remove the first line
  csvRow.splice(0,1);

  let logs = [];

  for (let i = 0; i < csvRow.length; i++) {
    let log = new LogLine(i);
    Object.keys(csvRow[i]).forEach(function(key) {
      log.addEntry(csvRow[i][key]);
    });
    logs.push(log);
    log.calculatePairs();
  }

  let pairs = [];

  logs.forEach(function(line) {
    line.pairs.forEach(function(pair) {
      pairs.push(pair);
    });
  });
  pairs = pairs.sort();

  let counts = [];
  pairs.forEach(function(item) {
    counts[item] = (counts[item] || 0) + 1;
  });

  for (let key in counts) {
    if (counts[key] >= coocurrenceMinimum) {
      console.log(key);
    }
  }
});
