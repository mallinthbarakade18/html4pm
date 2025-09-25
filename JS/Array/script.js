// let arr=[5,9,6,7,3];
// console.log(arr,arr[5],);
// arr[20]=49;
// console.log(arr)

// console.log(arr.length)
// arr=[21,22,23,24];
// arr.push("raj");
// console.log(arr)

// arr.pop("raj");
// console.log(arr)

// arr=[21, 22, 23, 24, 'raj'];
// arr.unshift(20);
// console.log(arr)

// arr=[21, 22, 23, 24, 'raj'];
// arr.shift(20);
// console.log(arr)

// arr=[1,2,3,4,5]
// arr.splice(1,2)
// console.log(arr)

// arr=["sheldon","monica","rachal","ross","phoebe","shinchan"];

// arr.pop()
// console.log(arr)//['sheldon', 'monica', 'rachal', 'ross', 'phoebe']

// arr.push("joey")
// console.log(arr)// ['sheldon', 'monica', 'rachal', 'ross', 'phoebe', 'joey']

// arr.shift();
// console.log(arr)// ['monica', 'rachal', 'ross', 'phoebe', 'joey']

// arr.unshift("chandler")
// console.log(arr)//['chandler', 'monica', 'rachal', 'ross', 'phoebe', 'joey']

// arr.splice(3,0,"emma")
// console.log(arr)//['sheldon', 'monica', 'rachal', 'emma', 'ross', 'phoebe', 'joey']

// arr=[1,2,3,4,5]
// arr.forEach(function(e,i){
//     console.log(e);//1 2 3 4 5
// })

// arr=[1,2,3,4,5]
// arr.forEach(function(e,i){
//     console.log(e*e);//1 4 9 16 25
// })

// arr=[1,2,3,4,5]
// let sum=0;
// arr.forEach(function(e,i){
//     sum+=e;
// })
// console.log("Sum is : "+sum);//Sum is : 15

// let str="World Health Organization";
// let words=str.split(' ');
// console.log(words)
// let abbr= ' ';
// words.forEach(function(e,i){
//     abbr=abbr+e.charAt(0);
// })
// //or

// words.forEach((e,i)=>abbr=abbr+e.charAt(0))
// console.log(abbr+" ")//WHO

// arr=[1,2,3,4,5]
// arr.forEach(function(e,i){
//     console.log(e*e*e);
//         //or
//     console.log(e**3);//1 8 27 64 125
// })

// arr=[1,2,3,4,5]
// let values=arr.forEach(function(e,i){
//     console.log(e%2==0);//false true false ture false
// })

// let value=arr.map((e,i)=>{
//     return e % 2==0;
// })

// console.log(value)

// let value1=arr.filter((e,i)=>{
//     return e % 2==0;
// })

// console.log(value1);

// arr=[1,2,3,4,5,6,4]
// console.log(arr.indexOf(4),arr.lastIndexOf(4));

//     let x=arr.find((e,i)=>{
//     return e%2==0;
// })
// console.log(x)//3 6

// let actor=["kajal agarwal","some agrwal","aishraya"];
// let res=actor.find((e,i)=>{
//     return e.endsWith("agarwal");
// })
// console.log(res)

// arr=[1,2,3,4,5,7]
// arr.filter((e,i)=>{
//     if(e%2!=0){
//         console.log(i);//find odd index
//     }
// })

// arr=[1,2,3,4,5,7]
// let y=arr.map((e,i)=>{
//  return e%2!=0 ? i : 'null';
// })
//  console.log(y);//find odd index

//  let z=y.filter((e,i)=> e != 'null')
//  console.log(z);
// //----------------------------------------------------
// let names=["raja","puja","john","maaja"];
// x =names.map((e,i)=>{
//     return e.endsWith('a') ? e[0] : 'null';
// })
// z=x.filter((e,i)=> e!='null')
// console.log(z)

// //--------------------------------------------
// names=["raja","puja","john","maaja"];
// let x1 = names.filter((e,i)=>e.endsWith('a'))
// console.log(x1)

// x1.forEach((e,i)=>console.log(e.charAt(0)))
// //---------------------------------------
// arr=[5,8,7,6,1,9,3]
// //print first odd num that is grether then 5
// x=arr.find((e,i)=> e%2!=0 && e>5)
// console.log(x)//7
// //-----------------------------------------------
// arr=[1,2,3,4,5,6,7]
// arr.reverse();
// console.log(arr)

// let str1 = "prasad";
// console.log(str1
//     .split(' ').reverse().join(' '))

// res =arr.reduce((p,c)=>{
//     return p+c
// },0)
// console.log(res)//28 //previes + current value sum and return it

// let arr=[]
// for(let i=0;i<10;i++){
//     arr[i]=prompt("Enter a array element");
//     console.log(arr[i]);
// }

//-------------------------------------------------------------------------
// let arr=[45, 3, 25, 78, 12];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let t=arr[i]
//             arr[i]=arr[j]
//             arr[j]=t
//         }
//     }
// }
// console.log("Ascending Order: "+arr);
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             let t=arr[i]
//             arr[i]=arr[j]
//             arr[j]=t
//         }
//     }
// }
// console.log("Descending Order"+arr);
//--------------------------------------------------
//array element strings or numbers
// let mixedArray = [12, "apple", 45, "banana", "cherry", 78, "orange"];
// let numbers=[];
// let strings=[];
// mixedArray.forEach((e,i) => {
//     if (typeof e === "number") {
//         numbers.push(e);
//     }
//     else if (typeof e === "string") {
//         strings.push(e);
//     }
// });
// console.log("Numbers : ", numbers);
// console.log("Strings : ", strings);
//----------------------------------------------------------------
//array element even or odd
// let orgArray = [1,2,3,4,5,6,7,8,9,10,11];
// let evenArr=[];
// let oddArr=[]

// orgArray.filter((e,i)=>{
//     if(e%2==0){
//         evenArr.push(e);
//     }
//     else{
//         oddArr.push(e);
//     }
// });
// console.log("Even Array : "+evenArr);
// console.log("Odd Array : "+oddArr)
//------------------------------------------------
//sum of array element
// let arr=[];
// let sum=0;
// let n =(prompt("enter size :"));// Number of elements to input
// for(let i=0;i<n;i++){
//     arr[i] = Number(prompt("enter array element :"));
// }
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }
// console.log("Sum of array elements is : "+sum);


//----------------------------------------------------------------------------------------
//decending array

// let arr = [];
// let n=prompt("enter array size : ");
// for(let i=0;i<n;i++){
//     arr[i]=Number(prompt("Enter array element : "));
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let t=arr[i];
//             arr[i]=arr[j];
//             arr[j]=t;
//         }
//     }
// }
// console.log("Decending Array : "+arr+" ");
//-------------------------------------------------------------------------

//    Write a 'JavaScript' program to Separate Strings and Numbers and print array using the forEach method.
// let numbers =[];
// let string =[];
// let mixedArr = ['apple', 10, 'banana', 20, 'cherry', 30];

// mixedArr.filter((e,i)=>{
//     if(typeof e==='string'){
//         string.push(e);
//     }
//     else{
//         numbers.push(e);
//     }
// })
// console.log("Numbers element : "+numbers)
// console.log("String element : "+string);

//--------------------------------------------------------------------------
//    Write a 'JavaScript' program to Filter Even and Odd Numbers from array in separate arrays using predefined method.
// let numberArray = [2,3,4,5,6,7,8,10,12,13];
// let evenArr=[];
// let oddArr=[];

// numberArray.filter((e,i)=>{
//     if(e%2==0){
//         evenArr.push(e);
//     }
//     else{
//         oddArr.push(e);
//     }
// })
// console.log("Even Array Element : "+evenArr);
// console.log("Odd Array Element : "+oddArr);
 //------------------------------------------------------------------
 // Write a 'JavaScript' program to print Sum of All array elements using predefined method.
//  let numberArr = [1,2,3,4,5,6,7,8,9];
//  let sum=numberArr.reduce((p,c)=>{
//     return p+c;
//  },0)
//  console.log("Sum of Array element : "+sum);
//---------------------------------------------------------------
// Write a 'JavaScript' program Convert Names to Uppercase in array using predefined method. 
// let namesArray = ["ravindra","rohit","aniket"];
//  let upper=namesArray.map((e,i)=>{
//     return e.toUpperCase();
//  })
//  console.log(" uppercase names : "+upper)
//------------------------------------------------------------------------------------------------------
//Write a 'JavaScript' program to Calculate Average from an Array elements using the predefined method.
// const nums = [10, 20, 30, 40, 50];
// let avg=nums.reduce((p,c)=>{
//     return (p+c)
// },0)
// console.log("average of the array elements : "+avg/nums.length);


