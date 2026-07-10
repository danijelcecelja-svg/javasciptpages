const DELIMITER = ";";
const SKIP_HEADER = false;
const UNIQUE_KEY = "registratienummer";

function convertLine(line, lineNumber) {

    const columns = line.split(DELIMITER);

    if (lineNumber === 0) {
        return line;
    }

    const langEmailAdres = (columns[13] || "").trim();

    if (langEmailAdres !== "") {
        return line;
    }

    return null;
}

function convert() {

    const text = document.getElementById("input").value.trim();

    if (!text) {
        document.getElementById("output").value = "";
        return;
    }

    const lines = text.split(/\r?\n/);
    const outputLines = [];
    const seenKeys = new Set();

    let uniqueKeyColumn = -1;

    if (lines.length > 0) {
        const headers = lines[0].split(DELIMITER);
        uniqueKeyColumn = headers.indexOf(UNIQUE_KEY);
    }

    let start = 0;

    if (SKIP_HEADER) {
        start = 1;
    }

    for (let i = start; i < lines.length; i++) {

        if (i > 0 && uniqueKeyColumn >= 0) {

            const columns = lines[i].split(DELIMITER);
            const key = (columns[uniqueKeyColumn] || "").trim();

            if (key !== "") {
                if (seenKeys.has(key)) {
                    continue;
                }

                seenKeys.add(key);
            }
        }

        const result = convertLine(lines[i], i);

        if (result === null || result === undefined) {
            continue;
        }

        if (Array.isArray(result)) {
            outputLines.push(...result);
        } else {
            outputLines.push(result);
        }
    }

    document.getElementById("output").value = outputLines.join("\n");
}

function download() {

    const content = document.getElementById("output").value;

    const blob = new Blob([content], {
        type: "text/plain;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "output.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}
