function convertLine(line, lineNumber) {
      
      const columns = line.split(";");

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

      for (let i = 0; i < lines.length; i++) {
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


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("version").textContent =
     "Last Modified: " + response.headers.get("Last-Modified");
});

    

   
