const apiUrl = "//my-json-server.typicode.com/msamyn/CMyBeerFormation";

export default function categoriesFetch(route, options = {}) {
  return fetch(`${apiUrl}${route}`, {
    ...options,
    headers: { ...options.headers, "x-session": "formation" },
  });
}
