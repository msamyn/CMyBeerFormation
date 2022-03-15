const apiUrl = "//localhost:3001";

export default function beersFetch(route, options = {}) {
  return fetch(`${apiUrl}${route}`, {
    ...options,
    headers: { ...options.headers, "x-session": "formation" },
  });
}
