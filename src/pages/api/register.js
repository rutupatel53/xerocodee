import { account, database } from "../../lib/appwrite";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, password } = req.body;

    try {
      // Create user account
      const user = await account.create(
        email,
        password,
        `${firstName} ${lastName}`
      );

      // Add user data to the database
      const userData = {
        firstName,
        lastName,
        email,
      };
      const databaseId = "665980c4003183f01c8d";
      const collectionId = "665980de002a89749d1e";

      await database.createDocument(databaseId, collectionId, [], userData);

      // Return a 200 OK response with a success message and user data
      res.status(200).json({ message: "Registration successful", user });
    } catch (error) {
      // Return a 500 Internal Server Error response with the error message
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
