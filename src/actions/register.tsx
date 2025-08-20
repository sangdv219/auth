'use server';

import { RegisterChema } from '@/schemas';
import bcrypt from 'bcryptjs';
import { getUserByEmail } from '@/data/user';

export const register = async(value:Zod.infer<typeof RegisterChema>) =>{
    const validatedFields = RegisterChema.safeParse(value);
    if(!validatedFields.success){
        return { error: "Invalid fields!"}
    }
    const { email, password, name } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email)

    if(existingUser){
        return { error: "Email already in use!" }
    }

    // TODO: Send verification token email

    return { success: "User created!" };
} 