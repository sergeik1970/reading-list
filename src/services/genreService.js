export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Классика" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Фантастика" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Приключения" }
];

export function getGenres() {
  return genres.filter(g => g);
}
