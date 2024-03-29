import { describe, expect, it } from "vitest";
import { createCustomEmoji } from "../src";

const mashedUpEmojis = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><circle fill="#292F33" cx="11" cy="14" r="5"/><circle fill="#292F33" cx="25" cy="14" r="5"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#664500" d="M23.186 29.526c-.993 0-1.952-.455-2.788-1.339-2.816-2.985-3.569-2.333-4.817-1.251-.781.679-1.754 1.523-3.205 1.523-2.351 0-3.969-2.302-4.036-2.4a1 1 0 0 1 1.644-1.14c.301.429 1.317 1.54 2.393 1.54.704 0 1.256-.479 1.895-1.033 1.816-1.578 3.764-2.655 7.583 1.388.823.873 1.452.774 1.908.592 1.659-.665 3.205-3.698 3.197-5.15a1 1 0 0 1 .994-1.005h.006a1 1 0 0 1 1 .995c.012 2.103-1.854 5.976-4.454 7.017a3.601 3.601 0 0 1-1.32.263z"/></svg>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 0 36 36"
   version="1.1"
   id="svg12"
   sodipodi:docname="1f915.svg"
   inkscape:version="1.0.1 (3bc2e813f5, 2020-09-07)">
  <metadata
     id="metadata18">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs16" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1920"
     inkscape:window-height="1053"
     id="namedview14"
     showgrid="false"
     inkscape:zoom="23.305556"
     inkscape:cx="18"
     inkscape:cy="18"
     inkscape:window-x="1920"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg12" />
  <path
     fill="#E6E7E8"
     d="M34.979 12.068c-.136-.389-.271-.779-.432-1.155-.357-.831-.787-1.621-1.259-2.382-.262-.422-.54-.83-.835-1.228-.402-.542-.831-1.06-1.29-1.553-.293-.315-.596-.618-.911-.911l-.123-.112c-.647-.592-1.324-1.151-2.053-1.645-.439-.297-.895-.57-1.361-.828-1.125-.624-2.323-1.128-3.579-1.501l-7.421 1.351-4.41-.803c-1.08.434-2.107.968-3.072 1.593-.373.242-.731.501-1.083.769l-.12.089C6.32 4.3 5.649 4.894 5.029 5.54c-.247.257-.488.52-.72.792-.039.045-.082.086-.12.132-.301.36-.58.738-.852 1.121-.182.255-.355.516-.524.781-.335.527-.64 1.072-.92 1.634-.192.386-.381.774-.545 1.176L9.8 9.638l25.825 4.7c-.161-.779-.388-1.532-.646-2.27z"
     id="path6" />
  <path
     fill="#BCBEC0"
     d="M34.546 10.912L18.671 8.023l5.914-1.076 2.956-.538 3.621-.659c-.293-.315-.596-.618-.911-.911l-5.668 1.032-2.956.538-5.914 1.076-2.957.538-5.913 1.076-4.95.901c-.192.386-.381.774-.545 1.176L9.8 9.638l5.914-1.076 19.265 3.506c-.136-.39-.271-.779-.433-1.156z"
     id="path8" />
  <path
     fill="#D1D3D4"
     d="M27.541 6.409l4.912.894c.295.397.573.806.835 1.228l-8.702-1.584 2.955-.538zM8.232 2.895c-.372.241-.73.5-1.082.768L9.8 3.18l-1.568-.285zm18.483-.641l-5.087.926-5.914 1.076-2.956.538-5.914 1.077-2.535.461c-.039.045-.082.086-.12.132-.301.36-.58.738-.852 1.121l3.505-.638L9.8 6.409l5.914-1.076 2.956-.538 5.914-1.076 3.492-.635c-.44-.298-.896-.571-1.361-.83z"
     id="path10" />
</svg>
</svg>`

describe("createCustomEmoji", () => {
    it("should be defined", () => {
        expect(createCustomEmoji).toBeDefined;
    });

    it("should mashup emojis", () => {
        const mashedUp = createCustomEmoji({ base: "🥴", mouth: "🥴", eyes: "💀", special: "🤕" })
        expect(mashedUp).toBe(mashedUpEmojis);
    });
});
