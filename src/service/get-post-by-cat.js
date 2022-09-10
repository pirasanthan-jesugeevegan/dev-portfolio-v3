export const getPostbyCat = async (cat) => {
  let newArray = [];

  for (const element of cat) {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20%22${element.title}%22%20in%20categories%5B%5D-%3Etitle%5D%20%7B%0A%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20_createdAt%2C%0A%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20%20likes%2C%0A%20%20%20%20%20%20%20%20author-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20image%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20slug%2C%0Abody%0A%20%20%20%20%7D%0A`
    ).then((response) => response.json());
    newArray = newArray.concat(response.result);
  }
  const arrayUniqueByKey = [
    ...new Map(newArray.map((item) => [item['_id'], item])).values(),
  ];
  return arrayUniqueByKey;
};
