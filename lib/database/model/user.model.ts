import {Schema, model, models } from "mongoose";

  const UserSchema = new Schema({
    clerkID: { type: String, required: true,unique:true },
    email: { type: String, required: true,unique:true },
    userName: { type: String, required: true ,unique:true},
    photoURL: { type: String, required: true },
    firstName: { type: String},
    lastName: { type: String},
    planID : { type: Number, default:1 },
    creditBalance: { type: Number,default:10 }
   
  });

const User = models?.User || model("User", UserSchema);

export default User;