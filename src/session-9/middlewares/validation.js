import * as z from "zod"

const bookSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  price: z.number(),
  stock: z.number().int(),
  category: z.string()
});

const validateBook = (req, res, next) => {
  try {
    bookSchema.parse(req.body);
    next();
  } catch (err) {
    return res.status(400).json({ error: err.errors });
  }
};


export { validateBook }