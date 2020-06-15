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
    const lengthOfString = input.length;
    let localCount = 1, maxCount = 1, start=0, end=0;

    // Loop through string until end of the string
    while(end < lengthOfString){
        if(input[start] === input[++end]){
            // Increase the counter until the first and current characters are same
            localCount++;
        } else {
            // Move to the index position where the mis-match happened and check from there
            start = end;

            // Check and update the maxCount with Maximum of current string (repetition) length
            // and Maximum length so far
            maxCount = maxCount < localCount ? localCount : maxCount;

            // Reset local count to 1
            localCount = 1;
        }
    }
    return maxCount;
}
