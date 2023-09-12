// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "John Doe",
    method: req.method,
    url: req.url,
    params: req.params ?? "Nothing",
    query: req.query,
    body: req.body,
  });
}
