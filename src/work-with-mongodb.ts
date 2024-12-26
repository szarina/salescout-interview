// Write a script that:
// 1. Connects to MongoDB.
// 2. Creates the 'users' collection.
// 3. Adds new users.
// 4. Finds users with duplicate emails.

// Use Mongoose library

import mongoose from 'mongoose';

type DuplicatedUsers = {
    email: string
}
// interface UserI{
//     name: String,
//     email: String
// };
//
// const userSchema = new mongoose.Schema<UserI>({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//
// });
//
//
// const User = mongoose.model('User', userSchema);

async function manageUsers(): Promise<DuplicatedUsers[]> {


    // //connecting to db
    // await mongoose.connect('mongodb+srv://admin:admin@cluster0.gnav3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    //
    //
    // const user1 = new User({
    //     name:"Smit",
    //     email:"smit@mail.ru"
    // })
    // const user2 = new User({
    //     name:"Angel",
    //     email:"angel@mail.ru"
    // })
    // const user3 = new User({
    //     name:"Smit",
    //     email:"smit@mail.ru"
    // })
    // await  user1.save();
    // await  user2.save();
    // await user3.save();
    //
     return []
}

module.exports = { manageUsers }