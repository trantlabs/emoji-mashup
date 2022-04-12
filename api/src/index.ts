import uWS from "uWebSockets.js";
import { createCustomEmoji } from "emoji-mashup";
import { URLSearchParams } from "url";

const app = uWS.App({});
const PORT = Number(process.env.PORT) || 3000;

app.get("/", (res, req) => {
	try {
		const params = new URLSearchParams(req.getQuery());

		res.end(
			createCustomEmoji({
				base: params.get("base")!,
				eyes: params.get("eyes")!,
				mouth: params.get("mouth")!,
				special: params.get("special")!,
			})
		);
	} catch (e) {
		res.writeStatus("400").end((e as Error).toString());
	}
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
