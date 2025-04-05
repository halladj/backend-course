import{films}from"../models/films.js";
import { ObjectId } from "mongodb";
const  GetAllfilms= async (req,res)=>{
    const  Films = await films.find({})
    res.status(200);
    res.send(Films);
}


    const GetfilmsById =async(req,res) =>{
        const Films= await films.findById(req,params.id);
        if(films === null){
            res.sendStatus(404);
        }
       res.status(200);
       res.send(Films);  }

      const creeteFilms=(req,res)=>{
        const Films = films({
            title:req.body.title,
            director: req.body.director, 
            year:req.body.year, 
            actors :req.body.actors,
            rating:req.body.rating
        })
        Films.Save();
        res.status(201);
        res.send(Films);}


        const Updatefilms = async (req, res) => {
            const id = req.params.id;  // تأكد من أنك تحصل على المعرف بشكل صحيح
            const updatedFilm = await films.updateOne(
                { "_id": ObjectId(id) },  // تأكد من أنك تستخدم ObjectId هنا
                { "$set": { "title": req.body.title } }  // استخدم $set لتحديث الحقول
            );
            
            if (updatedFilm.matchedCount === 0) {
                return res.status(404).send("Film not found");
            }
        
            res.status(200).send("Update successful");
        };
        

            const Deletefilms = async (req, res) => {
                const id = req.params.id;  // تأكد من أنك تحصل على المعرف بشكل صحيح
                const result = await films.deleteOne({ "_id": ObjectId(id) });  // استخدم ObjectId هنا
                
                if (result.deletedCount === 0) {
                    return res.status(404).send("Film not found");
                }
            
                res.status(200).send("Delete successful");
            };

        export{ GetfilmsById,GetAllfilms,creeteFilms,Updatefilms,Deletefilms}