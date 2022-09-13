const { createCustomEmoji } = require("emoji-mashup")

const newEmoji = { base: "🥴", mouth: "🥴", eyes: "💀", special: "🤕" };
var emojiCombined = createCustomEmoji(newEmoji);

console.log(emojiCombined)