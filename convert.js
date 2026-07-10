function convert() {

    const text = document.getElementById("input").value.trim();

    if (!text) {
        document.getElementById("output").value = "";
        return;
    }

    const lines = text.split(/\r?\n/);
    const outputLines = [];
    const seenRegistraties = new Set();

    let registratieColumn = -1;

    if (lines.length > 0) {
        const headers = lines[0].split(DELIMITER);
        registratieColumn = headers.indexOf("registratienummer");
    }

    let start = 0;

    if (SKIP_HEADER) {
        start = 1;
    }

    for (let i = start; i < lines.length; i++) {

        if (i > 0 && registratieColumn >= 0) {
            const columns = lines[i].split(DELIMITER);
            const registratie = (columns[registratieColumn] || "").trim();

            if (seenRegistraties.has(registratie)) {
                continue;
            }

            seenRegistraties.add(registratie);
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
