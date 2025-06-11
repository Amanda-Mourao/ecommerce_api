import { z } from "zod/v4";

const userSchema = z.object({
  id: z.int().positive(),
  name: z
    .string("Name must be a string")
    .min(1, "Name must be at least 1 character")
    .max(255, "Name must be at most 255 characters"),
  email: z.email("Must be a valid email"),
  password: z
    .string("Password must be a string")
    .min(1, "Password must be at least 1 character")
    .max(255, "Password must be at most 255 characters"),
});

export default userSchema;
