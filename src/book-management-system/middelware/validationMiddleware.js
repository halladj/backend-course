
import { z } from"zod";

const validationMiddleware = (req, res, next) => {
  const schema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    price: z.number().positive(),
    stockQuantity: z.number().int().positive(),
    category: z.string().min(1),
  });

  try {
    console.log(req.body)
    schema.parse(req.body); 
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid request data" });
  }
};

export {validationMiddleware};


