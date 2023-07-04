import Child from '../models/Child.js';
import User from '../models/User.js';
import TokenGenerator from '../models/token_generator.js';

const ChildController = {
  Create: async (req, res) => {
    const {name, dob, address, group, school,relationshipToChild, 
      nokName, nokNumber, doctorName, surgeryName, surgeryNumber, user_id } = req.body
    
    try {
      if (!req.body) throw new Error('req.body has not been found')
      const child = await Child.create({name, dob, address, group, school,relationshipToChild, 
        nokName, nokNumber, doctorName, surgeryName, surgeryNumber, userID: user_id})
      res.status(201).json({child})
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  },

  Find: async (req, res) => {
    try {
      const child = await Child.findOne({_id: req.get('Child_ID')})

      res.status(201).json({child: child})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },
  // THIS IS A TO DO AS WE DONT WANT TO SAVE EACH FIELD JUST WHAT HAS BEEN UPDATED
  //
  // Update: async (req, res) => {
  //   const {name, dob, address, group, school,relationshipToChild, 
  //     nokName, nokNumber, doctorName, surgeryName, surgeryNumber } = req.body

  //   try { 
  //     await User.updateOne({_id: req.params.id}, {$push: {child: req.body}})
  //     const token = await TokenGenerator.jsonwebtoken(req.user_id);

  //     res.status(201).json({ message: "OK", token: token })
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }
}

export default ChildController;