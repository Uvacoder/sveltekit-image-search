export const categories = [
    "all",
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music"
]

export const types = [
    "all",
    "photo",
    "illustration",
    "vector"
]

export const orientation = [
    "horizontal",
    "vertical"
]

export const order = [
    "popular",
    "latest"
]

export const stringify = (obj: {[key: string]: string}): string => {
    const str = [];
    for (const p in obj)
      if (obj.hasOwnProperty(p) && p !== 'searchTerm') {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
}
  