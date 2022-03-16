import responseToJson from "../responseToJson";

const apiUrl = "https://my-json-server.typicode.com/msamyn/CMyBeerFormation";
// const apiUrl = "//localhost:3001";

export default function cMyBeerFetch(route, options = {}) {
  return () =>
    fetch(`${apiUrl}${route}`, {
      ...options,
      headers: { ...options.headers, "x-session": "formation" },
    }).then(responseToJson);
}
