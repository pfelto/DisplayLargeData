export function fetchApi(URL, willPage = false) {
  let finalURL = URL;
  if (willPage) finalURL += "?_page=1&_limit=20";
  return fetch(finalURL).then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else {
      throw new Error("Idiot");
    }
  });
}
