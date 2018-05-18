const ACCESS_TOKEN = "2dd8e50f7e0827017761efef07e76ffd7513ebbe";

const searchUsers = searchPhrase => {
  if (searchPhrase === "") {
    return new Promise(success => {
      success([]);
    });
  }
  return fetch(
    `https://api.github.com/search/users?access_token=${ACCESS_TOKEN}&q=${searchPhrase}+in:login`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(`error response status: ${response.status}`);
        return { items: [] }; //TODO: handle response errors
      }
    })
    .then(result => result.items)
    .catch(err => {
      console.log("error while downloading data"); //TODO: handle response errors in user friendly way
      return [];
    });
};

export { searchUsers };
