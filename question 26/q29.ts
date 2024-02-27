//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favourite_fruits: string[] = ['apple', 'banana', 'mango'];
if(favourite_fruits.includes('banana')){
    console.log("banana is in array")
}
if(favourite_fruits.includes('orange')){
    console.log("orange is not in array")
}
else{
    console.log("not in array")
}
if(favourite_fruits.includes('mango')){
    console.log("mango is in array")
}
if(favourite_fruits.includes('apple')){
    console.log("apple is in array")
}
if(favourite_fruits.includes("guava")){
    console.log("this fruit is not in array")
}
else{
    console.log("not in list")
}