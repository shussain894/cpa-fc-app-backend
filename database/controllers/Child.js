import Child from '../models/Child.js';
import TokenGenerator from '../models/token_generator.js';

const ChildController = {
  Create: async (req, res) => {
    const {name, dob, address, group, school,relationshipToChild, 
      nokName, nokNumber, doctorName, surgeryName, surgeryNumber } = req.body
    console.log(req.body)
    // const name = req.body.name;
    // const dob = req.body.dob;
    // const address = req.body.address;
    // const group = req.body.group;
    // const school = req.body.school;
    // const relationshipToChild = req.body.relationshipToChild;
    // const nokName = req.body.nokName;
    // const nokNumber = req.body.nokNumber;
    // const doctorName = req.body.doctorName;
    // const surgeryName = req.body.surgeryName;
    // const surgeryNumber = req.body.surgeryNumber;

    try {
      const child = await Child.create({name, dob, address, group, school,relationshipToChild, 
        nokName, nokNumber, doctorName, surgeryName, surgeryNumber})

      res.status(201).json({email, child})
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

export default UserController;