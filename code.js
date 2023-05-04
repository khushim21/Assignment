function solution(inputDict) {
    
    // output Dictionary with all values initially zero
    let outputDict = {'Mon': 0, 'Tue' : 0, 'Wed' : 0, 'Thus' : 0, 'Fri' : 0, 'Sat' : 0 , 'Sun' : 0};
    // as getDay() method return interger value for any date with 0 being
    // sunday, 1 is monday and so on we create array of day's to match the method
    let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat'];
    
    // iterating through dictionary
   for (let [key, value] of Object.entries(inputDict)) {
       
       // storing key and typecasting it to Date from string
       let date = new Date(key);
       
       // adding value in output Dictionary using getDay() method
       outputDict[day[date.getDay()]] += value
  } 
  
  // returning final output dictionary
  return outputDict;
}

// input 
let inputDict = {'2020-01-01' : 4, '2020-01-02' : 4, '2020-01-03' : 6,'2020-01-04' : 8, '2020-01-05' : 2, '2020-01-06' : -6, '2020-01-07' : 2, '2020-01-08' : -2}

// calling function
console.log(solution(inputDict))