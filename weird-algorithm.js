const stdin = process.stdin;
const stdout = process.stdout;

// To Allow only valid input charset
stdin.setEncoding("utf-8");

let inputData = "";

stdin.on("data", function (input) {
    // Reading input from STDIN
    inputData += input;
});

stdin.on("end", function () {
    // Run and print to process when returned from main method
    stdout.write(main(inputData.split("\n")).toString());
});

function main([input]){
    let num = +input; // parse string to a number type
    let path = ''+num;

    while(num !== 1){ // Loop until num becomes 1
        // use % to get reminder to identify as 1 for odd and 0 for even when divided by 2;
        num = num%2 ? 3*(num)+1 : num/2;

        // append each occurrence to path string;
        path = path + ' ' + num;
    }
    return path;
}
