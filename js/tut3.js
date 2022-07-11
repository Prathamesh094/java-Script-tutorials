console.log('tut3')
// variables in js
// var,let,const
var Name = 'prathamesh';
var channel;
// channel='hi'

var marks = 876;
console.log(Name,channel,marks)
// rules for creating java Script variable
/*
1. You cannot start with numbers.
2.  you can start with letter,numbers, or $
3. variable names are case sensitive
*/
var city = 'mumbai';
console.log(city)
// firstname='hari';  we cannot do this
const firstName = 'hari'; 
console.log(firstName)

// let variable is use as local
{
  let city='rampur';
 city='pune'
 console.log(city)

}
 console.log(city)
 const no1= [1,2,3,4,5,6]; 
//  no1=[11,22,33,44];  cannot use it because we have already decleare array in consatant
console.log(no1)
/*
most common programming case type:-
1. camleCase:-  ex camleCase
2.kababcase:- ex kabak-case
3.snakecase:- ex snake_case
4pasclecase:-ex PascalCase 