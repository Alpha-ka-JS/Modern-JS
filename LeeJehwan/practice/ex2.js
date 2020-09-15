const wordCount = require('./ex1.js');

wordCount.init('LeeJehwan/practice/sample2.txt');
wordCount.mapReduce();

wordCount.findWordCount('existence');
wordCount.findWordCount('and');
wordCount.findWordCount('a');
wordCount.findWordCount('two');
wordCount.maxCounter();
wordCount.maxLength();

console.log(wordCount.data);
