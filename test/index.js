const { createCustomEmoji } = require("emoji-mashup");
const { writeFile } = require("fs");

const newEmoji = { base: "🥴", mouth: "🥴", eyes: "💀", special: "🤕" };
var emojiCombined = createCustomEmoji(newEmoji);

writeFile("testSVG.svg", emojiCombined, (err) => {
	if (err) throw err;
	console.log("SVG written!");
});
