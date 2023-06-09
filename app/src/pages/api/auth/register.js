import { apiClient, csrf } from "@lib/apiClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { name, email, password } = req.body;
    // send request to laravel api
    try {
      await csrf();
      let r = await apiClient.post("/register", {
        name,
        email,
        password,
      });
      res.setHeader("Set-Cookie", r.headers["set-cookie"]);
      res.status(200).json({ data: r.data });
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(e.response.status).json({ message: e.response.data.message });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
}
