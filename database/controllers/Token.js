import User from "../models/User.js";
import TokenGenerator from "../models/token_generator.js";

const SessionsController = {

  Create: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }).then(async (user) => {
      if (!user) {
        console.log("auth error: user not found")
        res.status(401).json({ message: "auth error" });
      } else if (user.password !== password) {
        console.log("auth error: passwords do not match")
        res.status(401).json({ message: "auth error" });
      } else {
        const token = await TokenGenerator.jsonwebtoken(user.id)
        res.status(201).json({ user_id: user.id, token: token, message: "OK" });
      }
    });
  }
};

export default SessionsController;
