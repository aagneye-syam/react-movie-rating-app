export const mutationLogin = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDhlMDZkZWI1MGI5MjQwY2U1MTFkNjcwYzAxOTg4NyIsInN1YiI6IjY1YjRiY2U5NGYzM2FkMDEzMTBiNTk5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wOu-BM0SUpkGzCNwSXktkFFhv8Vd7LtKssxbJhADxtY",
      },
    }
  );

  console.log(res.json());
  return res.json();
};
