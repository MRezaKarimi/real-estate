export function addToFavorites(id) {
  let favorites = getFavorites();
  clearFavorites();

  /// If item has already been in favorites, don't add it again
  if (favorites.findIndex((f) => f == id) == -1) {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function isInFavorites(id) {
  const favorites = getFavorites();
  return favorites.includes(id);
}

export function getFavorites(params) {
  return JSON.parse(localStorage.getItem("favorites")) ?? [];
}

export function clearFavorites(params) {
  localStorage.removeItem("favorites");
}
