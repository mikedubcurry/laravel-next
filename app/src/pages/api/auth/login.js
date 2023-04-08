import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { email, password } = req.body;
    // send request to laravel api
    const response = await axios
      .get("http://localhost/sanctum/csrf-token")
      .then(async (response) => {
        let res = await axios.post("http://localhost/api/login", {
          email,
          password,
        });
        return res;
      });

    if (response.status === 200) {
      // set cookie
      res.setHeader("Set-Cookie", response.headers["set-cookie"]);
    }

    return res.status(response.status).json(response.data);
  } else {
    // return bad request
    return res.status(400).json({ message: "Bad request" });
  }
}
