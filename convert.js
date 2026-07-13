const ALLOWED_EMAILS = [
    "lahoucine.timperman@vdab.be",
    "yeliz.struys@vdab.be",
    "irene.kerremans@vdab.be",
    "chelsea.coeckelberghs@vdab.be",
    "ramona.debruycker@vdab.be",
    "songul.meire@vdab.be",
    "vic.coninx@vdab.be",
    "jan.vandergucht@vdab.be",
    "marius.cambre@vdab.be",
    "sarina.cloots@vdab.be",
    "rosanne.raets@vdab.be",
    "kenji.goovaerts@vdab.be",
    "hafida.wullaert@vdab.be",
    "najim.degroote@vdab.be",
    "enis.vanuffelen@vdab.be",
    "celia.hillen@vdab.be",
    "josephus.cops@vdab.be",
    "ken.mannaerts@vdab.be",
    "robbert.vangorp@vdab.be",
    "maaike.vanaerde@vdab.be"
];

function convertLine(line, lineNumber) {

    if (lineNumber === 0) {
        return line;
    }

    const lowerLine = line.toLowerCase();

    for (const email of ALLOWED_EMAILS) {
        if (lowerLine.includes(email)) {
            return line;
        }
    }

    return null;
}
