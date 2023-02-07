import jwt from 'jsonwebtoken';

import { Payload } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const tokengenerate = (payload: Payload) => 
  jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

export default tokengenerate;