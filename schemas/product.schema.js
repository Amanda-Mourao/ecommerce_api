import { z } from 'zod/v4';

const productSchema = z.object({
  id: z.int().positive(),
  name: z
    .string('Name must be a string')
    .min(1, 'Name must be at least 1 character')
    .max(255, 'Name must be at most 255 characters'),
  description: z.string().min(1, 'Description must not be empty'),
  price: z.int().positive(),
  categoryId: z.int().positive(),
});

export default productSchema;