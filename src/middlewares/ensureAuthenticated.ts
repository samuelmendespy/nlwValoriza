import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
sub: string
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  // Status 401 é o erro de acesso não autorizado
  if(!authToken){
    return response.status(401).end();
  }

// A vírgula nessa posição ignora o primeiro elemento do array
    const [,token]= authToken.split(" ");
    
    try{
      const { sub } = verify(
        token,
        "585eb7abc4219a9b40eb8f3f1e9793bfda221d0ae9444c28a32516fc34e9dd4b"
        ) as IPayload

        request.user_id = sub;

      return next();
    } catch(err){
      return response.status(401).end();
    }

}