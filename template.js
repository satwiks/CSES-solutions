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
    // TODO Here
    return input;
}
