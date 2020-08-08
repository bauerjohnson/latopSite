
//alert 

// alert('hrllo');

// var age = 50;

// if (age > 30) {
//     document.write('i am over 30');
// } else if (age > 20) {
//     document.write('i am over 20');
// } else if (age > 10) {
//     document.write('i am over 10');
// } else {
//     document.write('too young');
// }


//logical operator
// var myage = 26;

// if (myage < 15 || myage > 30 || myage ===25) {
//     document.write('you arent coming')
// } else {
//     document.write("you can come")
// }


//while loops(doctor strange)

// var age = 5;
// while (age < 10) {
//     console.log('your age is less than 10')
//     age++;
// }

// document.write('you are over 10')

//for loops (same as while loop jst a different way)

// for (age = 5; age < 10; age++) {
//     console.log('your age is less than 10')
//     age++;
// }

// document.write('you are over 10'); 

// var links = document.getElementsByTagName('a');

// for (i = 1; i <= links.length; i++) {
//     console.log('this is link number ' + i);
// }

// document.write('all numbers looped');

//break and continue

// for (i = 0; i < 10; i++) {

// if(i ===11  || i ===3 ) {
//     continue;
// }
//     console.log(i);

//     if (i ===7) {
//         break;
//     }
// }

//functions

// function getaverage (a,b,c,d,e) {
//  var average = (a + b + c + d + e)/2;
//  return average;
//  console.log(average)
// }

// var myresult = getaverage(1,2,3,4,5);
// console.log('the number is' + myresult)

//variable scope

// var average = 0;

// function getaverage (a,b) {
//     average = (a + b) / 2;
//     console.log(average);
//     return average;
// }

// var myresult = getaverage(1,1);

// function logresult() {
//     console.log(' the average is ' + myresult  + " inside the fucntion ")
// }

// logresult();


//numbers

// var a = 2
// var b = '5'
// console.log(a + b); //  = 25 becos b is string

// console.log(Math.round(2.4)) //round up to 3, if less 2.4 = 2
// console.log(Math.floor(3.8)) //round up to 3
// console.log(Math.ceil(3.2)) //round up to 4 
// console.log(Math.max(3, 4, 6, 10, 2)) //gives highest no.
// console.log(Math.PI) // gives us pi

//strings

// var mystrings = 'i\'m "fun" stringss'; //escaping strings

// console.log(mystrings);
// console.log(mystrings.length); //no. of letters
// console.log(mystrings.toUpperCase()); //uppercase letter
// console.log(mystrings.toLocaleLowerCase()); //lowercase letters
// console.log(mystrings.indexOf("strings")); //point where the letter is
// console.log(mystrings.indexOf("toba")); //if letter not found = -1 

// //can also use that for an if statement 
// if(mystrings.indexOf('fun') === -1 ) {
//     console.log('name not found')
// } else {
//    // console.log('name found');
//     console.log('name found at '+ mystrings.indexOf('fun'));
   
// }

// var string1 = 'abc';
// var string2 = 'ABC';

// console.log(string1 === string2);
// console.log(string1.toLocaleLowerCase() === string2.toLocaleLowerCase());


// var string1 = 'cbc';
// var string2 = 'bcd';

// console.log(string1 < string2);

//slice and split strings
//slice
// var str = 'helbo, word';

// var str2 = str.slice(2, 9) //starts from l and end in o
// var str2 = str.slice(2) //starts from l 

// console.log(str2);

// //split 
// var tags = "meat, salad, chicken, prok, beef"

//arrays
// var array = [];

// array[0] = 25;
// array[1] = true;
// array[2] = 'toba';
// console.log(array);
// console.log(array.sort()); //to sort all
// console.log(array.reverse());
//more at netninja description

//objects
// var mystring = new String() //var mystring = 'hello'; also the same
// mystring = "hello";
// console.log(mystring.length)
// console.log(mystring.toUpperCase());

//crrating a new object

// var myarray = new Array();
// myarray[0] = 8;
// myarray[1] = 'hello';

// var myCar = new Object();
// myCar.maxspeed = 50;
// myCar.driver = 'jerry';
// console.log(myCar.driver);
// myCar.drive = function(){ console.log('now driving')}

// myCar.drive();

// var mycar2 = {maxspeed :70,
//               driver : 'bauer',
//                drive:function(){
    //console.log('now driving')}};

// console.log(mycar2.maxspeed);
// mycar2.drive();
// //or
// var mycar3 = {maxspeed :70,
//     driver : 'bauer',
//      drive:function(speed, time){
    //console.log(speed * time)}};

// console.log(mycar3.maxspeed);
// mycar3.drive(50, 3);

//this keyword

// var mycar3 = {maxspeed :70,
//     driver : 'bauer',
//      drive:function(speed, time){
//          console.log(speed * time)},
//         test:function() {
//             console.log(this); //can be added if we have more functions , this = mycar3 or any other variable created
//         }
//         };

// mycar3.test();
// console.log(mycar3.maxspeed);
// mycar3.drive(50, 3)

//        //also same

//        var mycar3 = {maxspeed :70,
//         driver : 'bauer',
//          drive:function(speed, time){
//              console.log(speed * time)},
           
//             logdriver : function() {
//                 console.log('driver name is ' + this.driver)
//             }
//             };
    
//    mycar3.logdriver();
//     console.log(mycar3.maxspeed);
//     mycar3.drive(50, 3)   

//contructor function

// var Car = function(maxspeed, driver){
    
//     this.maxspeed = maxspeed;
//     this.driver = driver;
//     this.drive = function () {
//     console.log('driver name is ' + this.driver  +  this.maxspeed) ;   
//     };
//     this.logdriver = function(speed, time){
//         console.log(speed * time)
//     }
// }

// var myCar = new Car(7, 'toba');
// var myCar1 = new Car(6,'ife');
// var myCar2 = new Car(8, 'jerry');


// myCar2.logdriver(5, 5);
// myCar.drive();

//the date object
// var mydate = new Date();
// console.log(mydate);

// var mypastdate = new Date (1994, 11, 2, 12, 45, 01);
// var myfuturedate = new Date (2020, 11, 2, 1, 00, 01);

// console.log(mypastdate);
// console.log(myfuturedate);

var birthday = new Date(2017, 0, 16, 11, 15, 25); //year month date, hour , minuite, secs
var birthday2 = new Date(2017, 0, 16, 11, 15, 25); //year month date, hour , minuite, secs

// //get the month of the date(0 - 11)
// console.log(birthday.getMonth());

// //get the year
// console.log(birthday.getFullYear());

// //get the date of the month(1 - 31)
// console.log(birthday.getDate());

// //get the day of the week(0 - 6)
// console.log(birthday.getDay());

// //get the hour of the date(0 - 23)
// console.log(birthday.getHours());

// //get the number of milliseconds since 1st jan 1970
// console.log(birthday.getTime());

// if(birthday == birthday2) {
//     console.log('birthday is equal');
// } else
// {
//     console.log('birthday is not equal');
// }


//or

if(birthday.getTime() == birthday2.getTime()) {
    console.log('birthday is equal');
} else
{
    console.log('birthday is not equal');
}

//traversing the DOM













