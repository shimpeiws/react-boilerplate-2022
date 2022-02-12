export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Foo", description: "Foo Detail 123" },
    { id: 2, name: "Bar", description: "Bar Detail 123" },
  ]);
}
