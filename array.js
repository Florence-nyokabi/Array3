/*
Question 1

Write a function that accepts an array of strings and console.logs each element using a for loop.

*/

function stringArray(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
let arr = ["My", "name", "is", "Florence", "Wangui"]
stringArray(arr);

/*
Question 2

Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

*/ 

 function forEach(arr1){
    arr1.forEach(num => {console.log(num * 2); 
    });
}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
forEach(num);

/* 
Question 3

Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

*/
 function numArray(num1){
    const fourItems = num1.slice(0, 4).map(number => number * 8);
    const twoItems = num1.slice(-2).map(number => number + 5);
    const combined = [...fourItems, ...twoItems];
    console.log(combined);
}
let my_array= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numArray(my_array);


/*
Question 4

Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];

*/ 

function whileLoopArray(arrNum) {
    let i = 0;
    while (i < arrNum.length) {
      if (i === 4) {
        break;
      }
      console.log(arrNum[i]);
      i++;
    }
}
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
whileLoopArray(arrNum);
 
/* 
Question 5

Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']

*/

function logArrayElements(arr3) {
    for (let i = 0; i < arr3.length; i++) {
      if (i === 1) {
        continue;
      }
      console.log(arr3[i]);
    }
}
let fruits= ['apple','plum','banana','strawberries','kiwi'];
logArrayElements(fruits);