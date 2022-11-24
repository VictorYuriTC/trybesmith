import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import Payload from '../interfaces/payload.interface';

const generateNewJWT = (data: Payload) => {
  const jwtConfig = {
    expiresIn: '15d',
    algorithm: 'HS256',
  };

  const secret = process.env.JWT_SECRET;
  
  const token = jwt.sign(
    { ...data },
    secret as Secret,
    jwtConfig as SignOptions,
  );

  return token;
};

export default generateNewJWT;