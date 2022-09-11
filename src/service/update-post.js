export const updatePost = async (mutations) => {
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return response;
};
