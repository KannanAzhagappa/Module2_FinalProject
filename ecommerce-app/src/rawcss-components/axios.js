import axios from "axios";

const options = {
  method: "GET",
  url: "https://asos2.p.rapidapi.com/products/v2/list",
  params: {
    offset: "0",
    categoryId: "1935",
    limit: "12",
    store: "US",
    country: "US",
    currency: "USD",
    sort: "freshness",
    lang: "en-US",
    sizeSchema: "US",
  },
  headers: {
    "x-rapidapi-key": "c7d6f6a47bmshca722b80ea74b4ap1937fejsn8df2152368e1",
    "x-rapidapi-host": "asos2.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    localStorage.setItem("myproduct", JSON.stringify(response.data.products));
  })
  .catch(function (error) {
    console.error(error);
  });
