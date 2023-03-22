const User = require('../models/User')

const UserController = {
  Create: async (req, res) => {
    const {email, password, name} = req.body
    try {
      const user = await User.signup(email, password, name)

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
      await User.updateOne({_id: req.params.id},
  
      res.status(201).json({ message: "OK"})
    )} catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;