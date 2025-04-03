import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    FirstName: String,
    LastName : [String],
    Birthday : Date,
    PhoneNumber: Number,
    isAlive  : {type: Boolean, default: true}
});
const UserModel = mongoose.model("User", UserSchema);
export {UserModel}