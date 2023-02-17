export async function fetchData(url: string): Promise<any> {
  try {
    const fetchData = await fetch(url);
    const res = await fetchData.json();
    console.log(fetchData.status, "----from fetchFunction---", url);
    return fetchData.status === 200 ? res : null;
  } catch (error) {
    console.log(error, "----from fetchFunction---", url);
    return error && null;
  }
}

export const dateFun = (date: string) => {
  const newDate = new Date(date);
  return newDate.toDateString();
};

export function checkNull(parent: any, child: string) {
  return parent ? parent[child] : null;
}

export default function setThemeFun(dispatch: any) {
  switch (localStorage.getItem("theme")) {
    case null || "light":
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      dispatch({ type: "THEME", payload: "dark" });
      break;
    default:
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      dispatch({ type: "THEME", payload: "light" });
      break;
  }
}

export function isValidURL(str: string) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
export const imgUrl: string = `https://images.unsplash.com/photo-1560942485-b2a11cc13456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80`;
