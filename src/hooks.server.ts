import type { Handle, HandleFetch, HandleServerError } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
// import { parseFormData } from "parse-nested-form-data";

//? ACTS LIKE A MIDDLEWARE IN NEXT.JS
// export const handle: Handle = async ({ event, resolve }) => {
// if (event.url.pathname.startsWith("/banana")) {
//   return new Response("🍌");
// }
// // handle user's session
// event.locals.user = "Test";
// return resolve(event);
// // /src/app.html <html lang="%lang%">
// const locale = "fr";
// event.locals.locale = locale;
// return resolve(event, {
//   transformPageChunk: ({ html }) => html.replace("%lang%", locale),
// });
// measuring performance
// const route = event.url;
// const start = performance.now();
// const response = await resolve(event);
// const end = performance.now();
// const responseTime = end - start;
// if (responseTime > 2000) {
//   console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`);
// }
// if (responseTime < 1000) {
//   console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`);
// }
// return response;
//   return resolve(event);
// };

// export const handleError: HandleServerError = async ({ error, event }) => {
//   console.log(error);

//   return {
//     message: "Yikes! 💩",
//   };
// };

// handleFetch hook: to modify our fetch request inside load or action function which runs on the server
// export const handleFetch: HandleFetch = ({ request, fetch }) => {
//   if (request.url.startsWith("http")) {
//     const url = request.url.replace("http", "https");
//     request = new Request(url, request);

//     console.log(request.url);
//   }

//   return fetch(request);
// };

// tried this example, but it seems like the package is not working anymore
// export const handle: Handle = async ({ event, resolve }) => {
//   if (event.request.method === "POST") {
//     const formData = await event.request.formData();
//     const data = parseFormData(formData);
//     event.locals.formData = data;
//   }

//   return resolve(event);
// };

//use multiple hooks together
const auth: Handle = async ({ event, resolve }) => {
  console.log("auth hook");
  return resolve(event);
};

const i18n: Handle = async ({ event, resolve }) => {
  console.log("internationalizatton hook");
  return resolve(event);
};

export const handle = sequence(auth, i18n);
