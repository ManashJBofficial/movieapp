const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "d3942c0c75b4219ea9c62d5b34471101",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
