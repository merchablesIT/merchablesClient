import { NextApiRequest,  } from "next";
import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";
/**
 * Retrieves a list of characters from the characters.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the characters data.
 */

// export const config = {
//   api: {
//     bodyParser: true,
//   },
// };


const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.5p9q1bk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

async function run(email: string) {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
        await client.db("merchablesCustomerInvites").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const connect = await client.db("merchablesCustomerInvites");
        const databaseCollection = await connect.collection("merchablesCustomers")
        const emailData = { email: email }; 
        await databaseCollection.insertOne(emailData);
        console.log(`Email data added successfully`);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

export async function POST(req: any, res: NextResponse) {
    try {
            const email = await req.json()
            await run(email);
            return NextResponse.json({message: `Email submitted successfully!`})
        } catch {
            return console.log("failed");
        }
    // console.log(req)
}