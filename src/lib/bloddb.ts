import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("5df5acd0d48c2"); // Your project ID

const promise = databases.listDocuments(
  "65a2686f7ecaa9ecdd9f",
  "65a2687da5691bd47df6"
);

promise.then(function (response) {
  console.log(response);
}, function (error) {
  console.log(error);
});

