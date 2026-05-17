const { MongoClient } = require('mongodb');

// Connection URL (adjust port/credentials if using Atlas)
const uri = "mongodb+srv://AnmolServer:ANMOLSINGH1992@cluster0.5sintih.mongodb.net/";
const client = new MongoClient(uri);

// Database Name
const dbName = 'FirstDataBase';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Users');

    // the following code examples can be pasted here...
    // 1. Fetch the documents from the collection

    const findResult = await collection.find({}).toArray();

    // 2. Print the results to your terminal
    console.log('Found documents =>', findResult);


    return 'done.';
}

// Execute and handle the return/errors
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

// Replace the uri string with your connection string

