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
    
    // Formula to find the sum of n numbers without looping through them
    const sumOfN = n*((1+n)/2);
    
    // Split string to array and then use reduce for summation of each of the entries;
    const sum = entries.split(' ').reduce( (acc, curr) => {
        acc += parseInt(curr) ;
        return acc;
    },0)
    
    // Find the difference between the sum of given entries vs actual sum should have been 
    // for n numbers to get the mising number
    return (sumOfN - sum).toString();
}
