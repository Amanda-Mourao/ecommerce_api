import { z } from "zod/v4";

const orderSchema = z.object({
  id: z.int().positive(),
  userId: z.int().positive(),
  productId: z.int().positive(),
  quantity: z.int().positive(),
  total: z.int().positive(),
});

export default orderSchema;
