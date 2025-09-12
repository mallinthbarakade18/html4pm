// datatype check
let a = 25;
console.log(typeof a);//number
a = "prasad";
console.log(typeof a);//string
a = true;
console.log(typeof a);//boolean
a = undefined;
console.log(typeof a);//undefined
a = null;
console.log(typeof a);//object or null
a = [1, 2];
console.log(typeof a);//object or array
a = {};
console.log(typeof a);//object
function x() {}
console.log(typeof x);//function


// numbers

let num = 25.4168;
console.log(typeof num);//number
console.log(num.toFixed(2)) // it will round up for two digits after decimal
//25.42
let n = 25.4118;
console.log(typeof n);//number
console.log(n.toFixed(2))
//25.41
console.log(num.toPrecision(3))//it will round up for 3 digits from starting
//25.4
num = 25;
console.log(num.toString(2));// tostring converts number into string of any base 
//11001

//math method
console.log(Math.sqrt(16))//4
console.log(Math.cbrt(27))//3
console.log(Math.pow(2 , 3))//8
console.log(Math.abs(-10))//10
console.log(Math.max(5,3))//5
console.log(Math.min(10,20))//10
console.log(Math.ceil(7.2))//8 because 8 is nearest value of 7.2
console.log(Math.floor(7.2))//7 because nearest smaller value
console.log(Math.round(2.5))//3
console.log(Math.round(2.4))//2
console.log(Math.random())//3
console.log(Math.round(Math.random()*10000))
console.log(Math.ceil(Math.random()*6))


console.log(Math.ceil(Math.random()*6)+7)

console.log(Math.floor(Math.random()*7)+6)//7 to 14 numbers get randomally
/*---------------------------------------------------------------------------------------*/
//strings :

let j = "welcome" , h= "NareshIt";
console.log('The Gandhi said ,"Good Night"',"Welcome");
console.log(`this is also a string`)

let a1 =5 ,b1=10;
console.log(`The sum of ${a1} and ${b1} is ${a1+b1}`)

let cost = 5, quan =25;
console.log(`The total price of ${quan} apples with each cost ${cost} is ${5*25}`);

//strings methods default
let str ="Javascript";
console.log(str.length)//10
console.log(str[0])//J
console.log(str.toUpperCase())//JAVASCRIPT
console.log(str.toLowerCase())//javascript
console.log(str)//Javascript becouse strings is
console.log(str.charAt(2))//v
console.log(str.charAt(9))//t
console.log(str.indexOf('a'))//1
console.log(str.lastIndexOf("a"))//3
console.log(str.endsWith("pt"))//true
console.log(str.endsWith("op"))//false
console.log(str.startsWith("pt"))//false
console.log(str.startsWith("Ja"))//true
str = "Javascript"
console.log(str.slice(1,5))//avas 1st index to 4th no take 5th index
console.log(str.slice(6))//ript --from 6th index to till end
console.log(str.split('a'))//['J', 'v', 'script']
str = "js is so easy"
console.log(str.split(' '))//['js', 'is', 'so', 'easy']
console.log(str.split(' ').length-1)//3

str = "rushi name is chhakuli"
console.log(str.split("a").length-1+str.split("e").length-1+str.split("i").length-1+str.split("o").length-1+str.split("u").length-1)//
//8 is vhowels








