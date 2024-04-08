

import jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key';

export const generateToken = (username: string, password: string) => {
  const payload = { username, password };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};
