import { getCssText } from "$lib/UI/stitches.config";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  return await resolve(event, {
    transformPage: async ({ html }) => {
      const cssText = getCssText();

      return html.replace(
        "<!-- STITCHES_CSS_ENTRY_POINT -->",
        `<style>${cssText}</style>`
      );
    },
  });
};
