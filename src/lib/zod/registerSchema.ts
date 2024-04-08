import {string, z} from "zod";

export const registerSchema = z.object({
  name: string({required_error: 'Name is required'}).min(
    1,
    'Name is required'
  ),
  email: string({required_error: 'Email is required'})
    .min(1, 'Email is required')
    .email('Invalid email'),
  photo: string().optional(),
  password: string({required_error: 'Password is required'})
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string({
    required_error: 'Please confirm your password',
  }).min(1, 'Please confirm your password'),
  secret: string().min(1, 'Secret is required'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

export type RegisterType = z.infer<typeof registerSchema>;
