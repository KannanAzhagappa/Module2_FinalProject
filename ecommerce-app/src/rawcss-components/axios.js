import axios from "axios";

const options = {
  method: "GET",
  url: "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search",
  params: { keyword: "iphone", category: "aps", country: "US" },
  headers: {
    "x-rapidapi-key": "c7d6f6a47bmshca722b80ea74b4ap1937fejsn8df2152368e1",
    "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
