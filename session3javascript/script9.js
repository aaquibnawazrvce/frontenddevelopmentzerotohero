function doTotalForExpenses(insurance, electric, phone, rent, others){
    return insurance + electric+ phone + rent + others;
}

//let totalExpenses = doTotalForExpenses(8976, 24000, 12000, 180000, 1000);

//console.log('The total Expenses is INR: ' + totalExpenses);
console.log(doTotalForExpenses(8976, 24000, 12000, 180000, 1000));