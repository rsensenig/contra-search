const body = {
    title: 'TestEvent123',
    organization: 'TestOrg123',
    street: '255 Highland Ave',
    city: 'Somerville',
    zipCode: '02143',
    frequency: 'RRule.YEARLY',
    startDatetime: '2023-01-01T19:00',
    endDatetime: '2023-12-31T22:30',
    interval: '1',
    sunday: [ 'RRule.SU', 'RRule.SU' ],
    february: '2',
    march: '3',
    april: '4',
    may: '5',
    june: '6',
    september: '9',
    october: '10',
    november: '11',
    december: '12',
    description: '',
    website: 'https://'
  }

// store all the months of the year in a variable
const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

// console.log(body.hasOwnProperty('february'));

// write a function that takes a form and returns a list of months selected [2,3,4,5,7,8,9,11]

// function findMonths(form){
//     // have the checked months start out as an empty array
//     let checkedMonths = [];
    
//     // if the form has a month
//     if(form.hasOwnProperty('february')) {
//         // add the value of the month to the array checkedMonths
//         checkedMonths.push(parseInt(form['february']));
//     }

//     // if the form has a month
//     if(form.hasOwnProperty('march')) {
//         // add the value of the month to the array checkedMonths
//         checkedMonths.push(parseInt(form['march']));
//     }

//     return checkedMonths;
// }

// console.log(findMonths(body));

// make an array of the number of characters in each month
months.map(month => month.length);
console.log('months.map(month => month.length): ', months.map(month => month.length));

// make an array of Boolean of values of whether a month was selected in the form
months.map(month => body.hasOwnProperty(month));
console.log('months.map(month => body.hasOwnProperty(month)): ', months.map(month => body.hasOwnProperty(month)));

// map over the months, and for each month that was selected in the form, return the integer for that month
const checkedMonths = months.map(month => parseInt(body[month])).filter(Number);

console.log(checkedMonths);

// convert the string of interval into an integer
console.log(parseInt(body.interval));