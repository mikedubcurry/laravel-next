export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { email, password } = req.body;
    // send request to laravel api
    const response = await fetch("http://localhost/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      // return error
      return res
        .status(response.status)
        .json({ message: "Something went wrong" });
    }
    const data = await response.json();
    // return response
    return res.status(response.status).json(data);
  } else {
    // return bad request
    return res.status(400).json({ message: "Bad request" });
  }
}
