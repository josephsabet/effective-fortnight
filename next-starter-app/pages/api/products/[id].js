export default function handler(req, res) {
  res.status(200).json({
    status: true,
    method: req.method,
    url: req.url,
    params: req.params,
    body: req.body,
    query: req.query,
  });
}
