import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const clinet = await MongoClient.connect(
      "mongodb+srv://ahmed@cluster0.bgvji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = clinet.db();

    const meetCollection = db.collection("meetups");

    const result = await meetCollection.insertOne(data);

    console.log(result);

    clinet.close();

    res.status(200).json({
      message: "true",
    });
  }
}
