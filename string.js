    "use strict";
    let firstName="Prathamesh";
   let age=22;

    document.write(firstName,"<br>");

    document.write(firstName[5],"<br>");
    document.write(firstName.length,"<br>");
    document.write(firstName[firstName.length-1],"<br>");
    firstName= firstName.toUpperCase();
    document.write(firstName,"<br>");
    firstName=firstName.toLowerCase();
    document.write(firstName,"<br>");

    var newStr=firstName.slice(0,3);
    document.write(newStr,"<br>");
    age=age + "";
     document.write(typeof(age),"<br>");
     let str1="17";
     let str2="77"
     let str3=str1+str2;
     document.write(str3,"<br>");

     let Name;
     document.write(Name,"<br>");
     Name="raj"
     document.write(Name,"<br>")

     document.write(typeof(null),"<br>")

    //  let number=BigInt(15)
    //  let Number=15n;
    //  document.write(number+Number)

    let no1=5;
     let no2=15;

     document.write(no1>no2,"<br>");
     document.write(no1!==no2,"<br>");