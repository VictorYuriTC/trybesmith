import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const generateNewJWT = (data: User) => {
  const jwtConfig = {
    expiresIn: '15d',
    algorithm: 'HS256',
  };

  const secret = process.env.JWT_SECRET;
  
  const token = jwt.sign(
    { data },
    secret as Secret,
    jwtConfig as SignOptions,
  );

  return token;
};

export default generateNewJWT;