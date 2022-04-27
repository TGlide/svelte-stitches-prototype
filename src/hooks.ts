import { getCssText } from "$lib/StitchesUI/stitches.config";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  return await resolve(event, {
    transformPage: async ({ html }) => {
      const cssText = getCssText();
      console.log(cssText);
      return html.replace(
        "<!-- STITCHES_CSS_ENTRY_POINT -->",
        `<style>${cssText}</style>`
      );
    },
  });
};
