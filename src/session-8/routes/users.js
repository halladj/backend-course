import { UserModel } from "../models/User.js";

const GetAllUsers = async (req, res) => {
    const users = await UserModel.find({})
    res.status(200);
    res.send(users);
}

const GetUserById = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    if (user === null){
        res.sendStatus(404);
    }
    res.status(200);
    res.send(user);
}

const CreateNewUser = (req, res)=> {
    const user  = UserModel({
        FirstName: req.body.FirstName,
        LastName : req.body.LastName,
        Birthday : req.body.Birthday,
        PhoneNumber: req.body.PhoneNumber,
    })
    user.save();

    res.status(201);
    res.send(user);
}


const UpdateUserById = async (req, res)=> {
    const id = req.params.id;
    await UserModel.updateOne({"_id": id}, {"FirstName": req.body.FirstName});
    res.status(204);
    res.send("Updated Succesfuly")
}

const DeleteUserByID = async(req, res) => {
    const id = req.params.id;
    await UserModel.deleteOne({"_id": id});
    res.status(204);
    res.send("Deleted Succesfuly")
}

export {GetAllUsers, GetUserById, CreateNewUser, UpdateUserById, DeleteUserByID}