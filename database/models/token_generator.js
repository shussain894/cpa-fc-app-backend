import JSonwebtoken from "jsonwebtoken";
const options = {expiresIn: "10m"};
const secret = process.env.JWT_SECRET;

class TokenGenerator {
  static jsonwebtoken(user_id) {
    return JSonwebtoken.sign({user_id: user_id, iat: Date.now()}, secret, options);
  }
}

export default TokenGenerator;
