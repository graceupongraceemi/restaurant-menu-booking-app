import { jwtVerify } from 'jose';

export function getJwtSecretKey(): string {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error('JWT secret key is not defined');
  }

  return secret;
}

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    return verified.payload;
  } catch (error) {}
};
