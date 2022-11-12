module.exports = function getFlag(string) {
    let i=0
    while(1) {
        if (process.argv[i] == string) break; // poderia usar o IndexOf + 1
        i++;
    }
    return process.argv[i+1]
}