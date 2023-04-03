const User = require('../models/User')
const TokenGenerator = require('../models/token_generator')

const UserController = {
  Create: async (req, res) => {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    const title = req.body.title;
    const name = req.body.name;
    const number = req.body.number;

    try {
      const user = await User.signup(email, password, title, name, number)

      res.status(201).json({email, user})
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  },

  Find: async (req, res) => {
    try {
      const user = await User.findOne({_id: req.get('User_ID')}, {password: 0})

      res.status(201).json({user: user})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },

  Update: async (req, res) => {
    try { 
      await User.updateOne({_id: req.params.id}, {$push: {child: req.body}})
      const token = await TokenGenerator.jsonwebtoken(req.user_id);

      res.status(201).json({ message: "OK", token: token })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;