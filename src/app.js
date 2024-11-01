const express = require("express") // requiring express from installed express
const app = express() // app created with express



app.get("/api/get-fibonacci", (req, res)=>{ // we created an api with function on backend and make a get request with query params . we are taking the value from query string and calculate with the function of our backend.
    try{
        const value = parseInt( req.query.value)  // query params to get the value
        res.json({ // our response to the request
            actualValue:value,
            result:fibonacci(value)
        })
    }catch{
        res.status(422).json({message: "Invalid Value" , value: req.query.value})
    }
})

app.get("/api/toCapitalize", (req, res)=>{
    try {
        const value = req.query.value
        res.json({
            actualValue:value,
            result: toCapitalize(value)
        })
    } catch {
        res.status(422).json({message: "Invalid Value" , value: req.query.value})
    }
})

app.get("/api/factorialNumber", (req, res)=>{
    try{
        const value = req.query.value
        res.json({
            actualValue:value,
            result:factorialNumber(value)
        })
    }catch {
        res.status(422).json({message: "Invalid Value" , value: req.query.value})
    }
})









app.listen(5050,()=>{  // this is the listening port of our server
    console.log("Server is listening on Port 5050")
})
//
// const fibonacci = (num) => { // this is the backend function of our server
//     if(num < 2){
//         return num;
//     } else {
//         return (fibonacci(num - 1) + fibonacci(num - 2));
//     }
// }
function fibonacci(n){
    if (n < 0) return undefined;
    if (n === 0) return 0;
    let previous = 1;
    let sum = 1;
    for (let i = 3; i <= n; i++){
        let temp = sum;
        sum += previous;
        previous = temp;
    }
    return sum
}

function toCapitalize(name) {
    return name.toUpperCase();

}
function factorialNumber(n){
    if (n <= 1) {
        return 1
    }
    return n * factorialNumber(n - 1);
}