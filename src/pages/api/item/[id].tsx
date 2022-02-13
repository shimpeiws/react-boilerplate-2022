const data = [
  { id: 1, name: "Foo", description: "Foo Detail 123" },
  { id: 2, name: "Bar", description: "Bar Detail 123" },
];

export default function handler(req, res) {
  res.status(200).json(data[req.query.id - 1]);
}
