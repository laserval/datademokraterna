const rows = [
    ["Givet", "en integrerad", "målsättning", "synliggörs", "potentialen", "inom ramen för", "en samlad bedömning"],
    ["Med hänsynstagande till", "en optimal", "effekt", "beaktas", "riskfaktorerna", "som en följd av", "förhållandena"],
    ["I ljuset av", "en sömlös", "struktur", "påbörjas", "fokuseringen", "med avseende på", "konceptet"],
    ["Genom", "en implicit", "agenda", "identifieras", "synergieffekten", "med hänsyn till", "resurserna"],
    ["Grundat på", "en proaktiv", "tidsaspekt", "initieras", "incitamentet", "i förhållande till", "tillhandahållandet"],
    ["Med tanke på", "en signifikant", "begrundan", "lokaliseras", "förankringen", "vad gäller", "riktlinjerna"],
    ["Oavsett", "en ökad", "mobilitet", "kommuniceras", "stimulansåtgärden", "parallellt med", "utvärderingen"],
    ["Med utgångspunkt i", "en grundläggande", "träffsäkerhet", "stärks", "insatsen", "i relation till", "implementeringen"],
    ["I förhållande till", "en inte försumbar", "insats", "realiseras", "erfarenhetsutbytet", "i anknytning till", "kärnverksamheten"],
    ["Med beaktande av", "en kostnadseffektiv", "kvalitetssäkring", "verkställs", "informationsflödet", "mot bakgrund av", "visionen"],
    ["Enligt", "en minskande", "problematik", "förankras", "kriterierna", "beroende på", "satsningsområdet"],
    ["Med tanke på", "en ihållande", "resursanvändning", "maximeras", "strategin", "vad gäller", "problemet"],
    ["Oberoende av", "en tilltagande", "avvägning", "konkretiseras", "ökningen", "eller med andra ord:", "beskaffenheten"],
    ["Sett mot bakgrund av", "en aktuell", "redovisning", "tillgängliggörs", "särarten", "på samma sätt som", "väsentligheten"],
    ["Jämfört med", "en övergripande", "implementering", "utökas", "närvaron", "till skillnad från", "särarten"],
    ["På grund av", "en bristande", "arbetsledningsinsats", "dokumenteras", "uppföljningen", "inom", "målet"],
    ["Med hänsyn till", "en särskild", "innovation", "härleds", "resultaten", "utöver", "värdena"],
    ["Förutsatt", "en löpande", "effektivisering", "erhålls", "kunskaperna", "via", "verklighetsfokuset"],
    ["Efter en helhetsbedömning av", "en långsiktig", "kvalitetshöjning", "revitaliseras", "betydelsen", "utifrån", "resultatuppnåelsen"],
    ["Utan hänsyn till", "en lönsam", "utveckling", "stabiliseras", "kompetenshöjningen", "med sikte på", "behoven"],
    ["Beroende på", "en resultatorienterad", "måluppfyllnad", "genereras", "instrumentet", "på tvärs med", "lösningen"],
    ["På grundval av", "en tvärvetenskaplig", "problemlösning", "stimuleras", "scenariot", "i linje med", "parametrarna"],
    ["I och med", "en kommunikativ", "arbetsmodell", "balanseras", "spetskompetensen", "i förlängningen av", "resursinsatsen"],
    ["Med hänvisning till", "en inkluderande", "organisation", "tillvaratas", "relationerna", "kring", "konsekvensaspekten"],
]

function generateSentence() {
    let sentence = "";
    for(let i = 0; i < rows[0].length; i++) {
        const word = rows[Math.floor(Math.random() * rows.length)][i];
        sentence += ' ' + word;
    }
    return sentence;
}

function generateParagraph() {
    const numSentences = Math.floor(Math.random() * 8) + 1
    let paragraph = "";
    for(let i = 0; i < numSentences; i++) {
        const sentence = generateSentence();
        paragraph = paragraph + sentence + ". ";
    }
    return paragraph;
    // return paragraph;
}

export {
    generateSentence,
    generateParagraph,
};