import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { name, email, password } = req.body;
    // send request to laravel api
    console.log(name)
    try {
      const csrf = await axios.get("http://localhost/sanctum/csrf-cookie");
      if (csrf.status === 204) {
        let r = await axios.post("http://localhost/api/register", {
          name,
          email,
          password,
        });
        res.setHeader("Set-Cookie", r.headers["set-cookie"]);
        res.status(200).json({ data: r.data });
      } else {
        throw csrf
      }
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(e.response.status).json({ message: e.response.data.message });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
}

