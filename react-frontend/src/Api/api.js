import axios from "axios";

const api = async ({ url, method, data, headers }) => {
  const config = {
    method: method,
    url: "http://127.0.0.1:5000" + url,
    headers: headers,
    data: data,
  }
  try {
    console.log(config);
    const results = await axios(config);
    console.log(results);
    return results.data;
  } catch (err) {
    console.log(err);
  }
};

export default api;
