const express = require("express")
const fibonacci = (num) => {
    if(num < 2){
        return num;
    } else {
        return (fibonacci(num - 1) + fibonacci(num - 2));
    }
}
console.log(fibonacci(25))