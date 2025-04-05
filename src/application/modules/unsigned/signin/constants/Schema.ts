import { z } from "zod";

export const schema = z.object({
  email: z
    .string({
      required_error: "O e-mail é obrigatório",
    })
    .email("E-mail inválido"),

  password: z
    .string({
      required_error: "A senha é obrigatória",
    })
    .refine((value) => value.length > 0, "A senha é obrigatória"),
});

export type FormData = z.infer<typeof schema>;
