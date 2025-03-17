import dbConnect from "../../lib/dbConnect";
import Author from "../../models/Author";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const authors = await Author.find({});
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}