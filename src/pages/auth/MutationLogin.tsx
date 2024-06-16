export const mutationLogin = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
        Authorization: "",
      },
    }
  );

  console.log(res);

  return res.json();
};
