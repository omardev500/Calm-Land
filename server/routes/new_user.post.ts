// ~/server/api/new_user.post.ts
import { registerNewUser } from '~/server/utils/database';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, firstName, surName, gender, password } = body;

    if (!username || !firstName || !surName || !gender || !password) {
      throw createError({ statusCode: 400, message: 'Missing required fields' });
    }
    
    const result = registerNewUser.run(username, firstName, surName, gender, passwordHash);

    return { 
      message: 'User created successfully', 
      userId: result.lastInsertRowid 
    };

  } catch (error) {
    console.error("Adding user error: ", error);
    throw createError({ statusCode: 500, message: 'Internal Server Error' });
  }
})
