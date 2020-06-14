
const stdin = process.openStdin(); // Open input stream

const stdout = process.stdout;
let content = [];

stdin.addListener('data', data => {
    // Read data here and store each new line as an array
    content.push(data.toString());
});

stdin.addListener('end', () => {
    // Press ctrl+D to end input stream
    stdout.write(main());
});

function main(){
    // TODO Here
    return 'Welcome';
}
