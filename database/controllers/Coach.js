import Coach from '../models/Coach.js';
import TokenGenerator from '../models/token_generator.js';

const CoachController = {
  Create: async (req, res) => {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    const title = req.body.title;
    const name = req.body.name;
    const number = req.body.number;

    try {
      const coach = await Coach.signup(email, password, title, name, number)

      res.status(201).json({email, coach})
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  },

  Find: async (req, res) => {
    try {
      const coach = await Coach.findOne({_id: req.get('Coach_ID')}, {password: 0})

      res.status(201).json({user: user})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },

  Update: async (req, res) => {
    try { 
      const token = await TokenGenerator.jsonwebtoken(req.user_id);

      res.status(201).json({ message: "OK", token: token })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default CoachController;