import type { Actions, PageServerLoad } from "./$types";

// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export const load: PageServerLoad = async ({ fetch }) => {
  // await sleep(2000);
  // throw new Error("banana");
  // await fetch("http://joyofcode.xyz/");
};

export const actions: Actions = {
  default: async ({ locals }) => {
    console.log(locals);
  },
};
