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

function main([num, entries]){
    const n = +num;
    const sumOfN = n*((1+n)/2);
    const sum = entries.split(' ').reduce( (acc, curr) => {
        acc += parseInt(curr) ;
        return acc;
    },0)
    return (sumOfN - sum).toString();
}
