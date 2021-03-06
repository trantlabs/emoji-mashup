import { readFileSync } from "fs";

const bases = {
	"1f633": "blush",
	"263a": "blush",
	"1f60a": "blush",
	"1f608": "imp",
	"1f47f": "imp",
	"1f383": "pumpkin",
	"1f630": "pale",
	"1f628": "pale",
	"1f92c": "red",
	"1f621": "red",
	"1f63a": "cat",
	"1f63b": "cat",
	"1f63c": "cat",
	"1f63d": "cat",
	"1f63e": "cat",
	"1f63f": "cat",
	"1f638": "cat",
	"1f639": "cat",
	"1f915": "regular",
	"1f600": "regular",
	"1f601": "regular",
	"1f602": "regular",
	"1f603": "regular",
	"1f604": "regular",
	"1f605": "regular",
	"1f606": "regular",
	"1f609": "regular",
	"1f60b": "regular",
	"1f60c": "regular",
	"1f60d": "regular",
	"1f60e": "regular",
	"1f60f": "regular",
	"1f610": "regular",
	"1f611": "regular",
	"1f612": "regular",
	"1f613": "regular",
	"1f614": "regular",
	"1f615": "regular",
	"1f616": "regular",
	"1f617": "regular",
	"1f618": "regular",
	"1f619": "regular",
	"1f61b": "regular",
	"1f61c": "regular",
	"1f61d": "regular",
	"1f61e": "regular",
	"1f61f": "regular",
	"1f620": "regular",
	"1f622": "regular",
	"1f623": "regular",
	"1f624": "regular",
	"1f625": "regular",
	"1f626": "regular",
	"1f627": "regular",
	"1f629": "regular",
	"1f62a": "regular",
	"1f62b": "regular",
	"1f62c": "regular",
	"1f62d": "regular",
	"1f62e": "regular",
	"1f62f": "regular",
	"1f632": "regular",
	"1f634": "regular",
	"1f635": "regular",
	"1f636": "regular",
	"1f637": "regular",
	"1f641": "regular",
	"1f642": "regular",
	"1f643": "regular",
	"1f644": "regular",
	"1f910": "regular",
	"1f911": "regular",
	"1f912": "regular",
	"1f913": "regular",
	"1f914": "regular",
	"1f917": "regular",
	"1f923": "regular",
	"1f924": "regular",
	"1f925": "regular",
	"1f927": "regular",
	"1f928": "regular",
	"1f929": "regular",
	"1f92a": "regular",
	"1f92b": "regular",
	"1f92d": "regular",
	"1f92e": "regular",
	"1f970": "regular",
	"1f971": "regular",
	"1f972": "regular",
	"1f973": "regular",
	"1f974": "regular",
	"1f978": "regular",
	"1f97a": "regular",
	"2639": "regular",
	"1f435": "monkey",
	"1f649": "monkey",
	"1f648": "monkey",
};

function importFile(path: string) {
	try {
		return readFileSync(__dirname + "/" + path, "utf8").toString();
	} catch (error) {
		throw error;
	}
}

export function createCustomEmoji({ base, mouth, eyes, special }: { base: string; mouth?: string; eyes?: string; special?: string }) {
	if (!base) throw new Error("No base emoji provided!");

	// Format Emojis to Code
	mouth = (mouth || base).codePointAt(0)!.toString(16);
	eyes = (eyes || base).codePointAt(0)!.toString(16);
	special = (special || base).codePointAt(0)!.toString(16);
	base = base.codePointAt(0)!.toString(16);

	// @ts-ignore
	let baseName = bases[base];

	// Import needed SVG Texts
	let baseFile = importFile(`./data/base/${baseName ? "shared/" + baseName : base}.svg`);
	let eyesFile = importFile(`./data/eyes/${eyes}.svg`);
	let mouthFile = importFile(`./data/mouth/${mouth}.svg`);
	let specialFile = importFile(`./data/special/${special}.svg`);

	// Replace XML Tags with RegEx
	mouthFile = mouthFile.replace(/<\?xml.+>/, "");
	eyesFile = eyesFile.replace(/<\?xml.+>/, "");
	specialFile = specialFile.replace(/<\?xml.+>/, "");

	// Merge File Texts
	baseFile = baseFile.replace(/(<\/svg>)/, eyesFile + mouthFile + specialFile + "$1");

	return baseFile;
}
