// simple if
// let x=+prompt("enter any value");
// if(x>5){
//     console.log(`${x} is grether then 5`);
// }
//if-else
// let x=+prompt("enter any value");
// if(x>=18){
//     console.log(`eligible for voting`);
// }else{
//     console.log(`not eligible for voting`)
// }
// let age=+prompt("enter your age : ");
// if(age>0 && age<=12){
//     console.log(`Kid`);
// }
// else if(age>12 && age<=21){
//     console.log(`teen ager`);
// }
// else if(age>21 && age<=30){
//     console.log(`Young`);
// }
// else if(age>30 && age<=60){
//     console.log(`mid age`);
// }
// else{
//     console.log(`old`);
// }

//nested if:
// let age=+prompt("enter your age : ");
// let gender=+prompt("enter your gender : ");
// if(age>20){
//     if(gender==m){
//         console.log(`male`);
//     }
// }


// let n=+prompt("enter number : ");
// let x=Math.ceil(Math.random()*14);
// if(n==x){
//     console.log(`you won`);
// }
// else if(n>x){
//     console.log(`grether num`);
// }
// else{
//     console.log(`less num`);
// }

// let day=+prompt("enter day num : ");
// switch(day){
//     case 0: console.log(`Sunday`);break;
//     case 1: console.log(`Monday`);break;
//     case 2: console.log(`Tuesday`);break;
//     case 3: console.log(`Wednesday`);break;
//     case 4: console.log(`Thursday`);break;
//     case 5: console.log(`Friday`);break;
//     case 6: console.log(`Saturday`);break;
//     default: console.log(`invalid choice`);
// }
// let i=1;
// while(i<=10){
// console.log(`${i} `);
// i++;
// }                            

//                             let s="prasad"
//                             for(i=0;i<=s.length-1;i+=2){
//                                     console.log(s.charAt(i));
//                             }
                            // let arr=[5,4,3,2,1];
                            // for(i=0;i<arr.length;i++){
                            //     console.log(arr[i])
                            // }
            //                 let arr=[5,4,3,2,1];
            //  for(let i of arr){
            //     console.log(i)
            //  }
// for(i=2;i<=20;i+=2){
//     console.log(i+" ")
// }


// let x=3
// for(i=1;i<=10;i++){
//     console.log(x*i)
// }

// let num=121,rev=0
// let temp=num

// while(num!=0){
//     let rem=num%10;
//     rev=rev*10+rem;
//     num=Math.floor(num/10);
// }
// if(temp==rev){
//     console.log("palindrom")
// }else{
//     console.log("not palindrom")
// }

// //1. write js code to print sum of array elements

// let arr=[5,4,3,2,1];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(`Sum of array elements : `+sum);

// //2. write a js code to check wether sum of digit is eqaual to product of digit for a given num

// let n = +prompt("enter num");
// sum=0;
// let prod=1;
// while(n!=0){
//     let rem=n%10;
//     sum+=rem;
//     prod*=rem;
//     n=Math.floor(n/10);
// }
// console.log("sum:"+sum);
// console.log("prod:"+prod)
// if(sum==prod){
//     console.log("spy num");
// }
// else{
//     console.log("not spy num");
// }

//using loops find the sum of nested arrays and print them
            //eg : [[10,20,10,50],[0,10,30,40],[10,10,10,10]]

             arr = [[10,20,10,50],[0,10,30,40],[10,10,10,10]]
             for(let i=0;i<arr.length;i++){
                let sum=0
                for(let j=0;j<arr[i].length;j++){
                    sum+=arr[i][j]
                }
                console.log(sum+" ")
             }
// second type
             for(let i of arr){
                let sum=0
                for(let j of i){
                    sum+=j;
                }
                console.log(sum)
             }

         