export function fetchApiPagination(URL) {
  return fetch(URL).then((res) => {
    if (res.ok) {
      //console.log(res.headers.get("Link"));
      return res.json();
    } else {
      throw new Error("You got an error");
    }
  });
}
function parseLinkHeader(linkHeader) {
  const linkHeadersArray = linkHeader
    .split(", ")
    .map((header) => header.split("; "));
  const linkHeadersMap = linkHeadersArray.map((header) => {
    const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
    const thisHeaderUrl = header[0].slice(1, -1);
    return [thisHeaderRel, thisHeaderUrl];
  });
  return Object.fromEntries(linkHeadersMap);
}

export function paginate(direction, currentURL, dispatch) {
  fetch(currentURL).then((response) => {
    let linkHeaders = parseLinkHeader(response.headers.get("Link"));
    if (!!linkHeaders[direction]) {
      currentURL = linkHeaders[direction];
      //console.log(currentURL);
      dispatch({ type: "paging", currentUrl: currentURL });
    }
  });
}
