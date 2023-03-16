const connection = require("../config/connection");
const { User, Thoughts } = require("../models");
const { getRandomName, getRandomAssignments } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thoughts.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const User = [];

  // Loop 20 times -- add user to the user array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughts = getRandomThoughts(20);

    const userName = getRandomUser();
    const first = fullName.split(" ")[0];
    const last = fullName.split(" ")[1];

    User.push({
      first,
      last,
      thoughts,
    });
  }

  // Add users to the collection and await the results
  await userName.collection.insertMany(User);

  // Add thoughts to the collection and await the results
  await Thoughts.collection.insertOne({
    thoughts: "",
    inPerson: false,
    userName: [...User],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(User);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
