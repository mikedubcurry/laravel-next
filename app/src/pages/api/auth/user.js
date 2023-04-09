import {apiClient, csrf} from "@/lib/apiClient";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Process a POST request
    // send request to laravel api
    try {
      await csrf();
      const {token} = cookie.parse(req.headers.cookie);
      let r = await apiClient.get("http://localhost/api/user",{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

        res.status(200).json({ data: r.data });
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(e.response.status).json({ message: e.response.data.message });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
}

