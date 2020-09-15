const fs = require('fs');

const wordCount = {
  _data: undefined,
  _mapData: undefined,
  get data() {
    return this._data;
  },
  set data(data) {
    this._data = data;
  },
  get mapData() {
    return this._mapData;
  },
  set mapData(mapData) {
    this._mapData = mapData;
  },
  init: (path = 'LeeJehwan/practice/sample.txt') => {
    wordCount.readData(path);
    wordCount.lowercase();
    wordCount.removeSpecial();
    wordCount.splitData();
  },
  readData: (path) => {
    const read = fs.readFileSync(path, 'utf8');
    wordCount.data = read;
    console.log('\u001b[32m%s\x1b[0m', 'read Data complete');
  },
  lowercase: () => {
    const data = wordCount.data;
    wordCount.data = data.toLowerCase();
    console.log('\u001b[32m%s\x1b[0m', 'lower case complete');
  },
  removeSpecial: () => {
    const data = wordCount.data;
    wordCount.data = data.replace(/[,|.|;|:|-]/g, '');
    console.log('\u001b[32m%s\x1b[0m', 'remove special complete');
  },
  splitData: () => {
    const data = wordCount.data;
    wordCount.data = data.split(/\s/);
    console.log('\u001b[32m%s\x1b[0m', 'splite data complete');
  },
  mapper: () => {
    const data = wordCount.data;
    wordCount.data = data.map((d) => {
      return { word: d, count: 1 };
    });
  },
  reducer: () => {
    const data = wordCount.data;
    const word = data.reduce((prev, val) => {
      if (!prev.hasOwnProperty(val.word)) {
        prev[val.word] = 0;
      }
      prev[val.word] += val.count;
      return prev;
    }, []);
    wordCount.mapData = word;
    let countedData = [];
    const key = Object.keys(word);
    key.forEach((k) => {
      countedData.push({ word: k, count: word[k] });
    });
    wordCount.data = countedData;
  },
  sortData: () => {
    const data = wordCount.data;
    wordCount.data = data.sort((a, b) => {
      return a.word < b.word ? -1 : a.word > b.word ? 1 : 0;
    });
  },
  mapReduce: () => {
    wordCount.mapper();
    wordCount.reducer();
    wordCount.sortData();
  },
  findWordCount: (word) => {
    const count = wordCount.mapData[word] || 0;
    console.log(`${word} 의 개수는 ${count}`);
  },
  maxCounter: () => {
    const data = wordCount.data;
    const maxData = data.reduce(
      (prev, val) => {
        if (prev.count < val.count) {
          return val;
        }
        return prev;
      },
      { word: '', count: 0 }
    );
    console.log(
      `가장 많은 개수를 가진 단어는 ${maxData.word}, 개수는 ${maxData.count}`
    );
  },
  maxLength: () => {
    const data = wordCount.data;
    const maxlenWord = data.reduce((prev, val) => {
      if (prev.length < val.word.length) {
        return val.word;
      }
      return prev;
    }, '');
    console.log(`가장 긴 단어는 ${maxlenWord}, 개수는 ${maxlenWord.length}`);
  },
};

module.exports = wordCount;
