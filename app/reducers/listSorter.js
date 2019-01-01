const listSorter = (listArray, key) => {
  for (let i = 0; i < listArray.length - 1; i++) {
    for (let j = i; j < listArray.length - 1; j++) {
      if (listArray[j][key] > listArray[j + 1][key]) {
        let temp = listArray[j];
        listArray[j] = listArray[j + 1];
        listArray[j + 1] = temp;
      }
    }
  }
  console.log('List sorting');
  return listArray;
};

module.exports = listSorter;
