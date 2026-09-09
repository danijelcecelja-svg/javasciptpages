console.log("hello")

function convertLine(line, lineNumber) {
    const lowerLine = line.toLowerCase();
    return lowerLine;
}

function convert() {
    const input = document.getElementById("input").value;
    const lines = input.split(/\r?\n/);
    const output = [];
 
    lines.forEach((line, index) => {
        output.push(convertLine(line, index + 1));
    });

    document.getElementById("output").value = output.join("\n");
}
