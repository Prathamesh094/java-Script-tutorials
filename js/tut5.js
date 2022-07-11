// type conversion and type correction
 let myvar;
 myvar = String(34);
 console.log(myvar,(typeof myvar));

 let booleanvar = String(true);
 console.log(booleanvar,(typeof booleanvar));

 let date= String(new Date());
 console.log(date, (typeof date));

 let arr=String([1,2,3,4,5]);   // the out put showing size is 9 because it consider , as well
 console.log(arr.length,(typeof arr));

 let i= 75;
 console.log(i.toString());
 let stri =Number("3434");
 /*stri = Number('3434');
 stri=Number(false);
 stri = Number([1,2,3,4,5,6,7,8,9]);*/

 console.log(stri,(typeof stri))

// types of coresion

let mystr = "678";
let mynum = 68;    // it will convert the number into string and concanicate it with string so output will be like 67868

        // if we  use let mystr=Number("678") then it add the number
console.log(mystr + mynum);



