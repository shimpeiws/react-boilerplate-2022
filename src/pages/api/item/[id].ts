import { cache } from "../../../lib/LRU";

export default function handler(req, res) {
  const items = JSON.parse(cache.get("items"));
  res.status(200).json(items[req.query.id - 1]);
}
