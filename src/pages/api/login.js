export default async function handler(req, res) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...req.body,
    }),
  });

  res.status(response.status).send(response);
}
