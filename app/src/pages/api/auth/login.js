import { apiClient, csrf } from "@/lib/apiClient";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { email, password } = req.body;
    // send request to laravel api
    try {
      await csrf();
      let r = await apiClient.post("/login", {
        email,
        password,
      });

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", r.data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 3600,
          path: "/",
        })
      );

      res.status(200).json({ data: r.data });
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(e.response.status).json({ message: e.response.data.message });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
}
