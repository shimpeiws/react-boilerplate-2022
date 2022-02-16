import { cache } from "../../../lib/LRU";

export default function handler(req, res) {
  console.info("req", req.body);
  const { name, description } = req.body;
  console.info("name", name);
  const items = JSON.parse(cache.get("items"));
  items.push({
    id: items.length + 1,
    name,
    description,
  });
  console.info("items", items);
  cache.set("items", JSON.stringify(items));
  res.status(200).json({});
}
