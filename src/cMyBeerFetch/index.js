import responseToJson from "../responseToJson";

const apiUrl = "//my-json-server.typicode.com/msamyn/CMyBeerFormation";

export default function cMyBeerFetch(route, options = {}) {
  return () =>
    fetch(`${apiUrl}${route}`, {
      ...options,
      headers: { ...options.headers, "x-session": "formation" },
    }).then(responseToJson);
}
