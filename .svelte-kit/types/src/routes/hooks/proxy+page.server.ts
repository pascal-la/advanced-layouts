// @ts-nocheck
import type { Actions, PageServerLoad } from "./$types";

// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
  // await sleep(2000);
  // throw new Error("banana");
  // await fetch("http://joyofcode.xyz/");
};

export const actions = {
  default: async ({ locals }: import('./$types').RequestEvent) => {
    console.log(locals);
  },
};
;null as any as Actions;