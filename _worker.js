export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname === "www.sahajacollective.com") {
      return fetch(request);
    }
    url.hostname = "www.sahajacollective.com";
    return Response.redirect(url.toString(), 301);
  },
};
