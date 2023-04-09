import cookie from "cookie";

export default async function handler(req, res) {
  // log sanctum cookie

  // remove cookie
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    })
  );

  res.redirect("/");
}
