/*
- payment column
date,content,price,UserId,CategoryId,MethodId
*/
const fs = require('fs');

const csvPath = '/Users/yang-yejin/VanillaBank/server/model/csv/payment.csv';
const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomDate = (start, end) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
const userIdList = Array.from({ length: 100 }, (x, i) => i + 130);
userIdList.push(1);
const rows = new Array(3000).fill().reduce((acc, cur, idx) => {
  const date = randomDate(new Date(2020, 8, 1), new Date());
  const price = randomInt(1000, 1000000);
  const content = `내용${idx + 1}`;
  const userId = userIdList[randomInt(0, userIdList.length)];
  const categoryId = randomInt(1, 10);
  const methodId = randomInt(1, 4);

  return `${acc}${date},${content},${price},${userId},${categoryId},${methodId}\n`;
}, '');

fs.appendFile(csvPath, rows, err => {
  if (err) console.error(err);
  else console.log('finish!');
});
