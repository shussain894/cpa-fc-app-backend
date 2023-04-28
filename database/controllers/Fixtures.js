const Fixtures = require('../models/Fixtures')
const TokenGenerator = require('../models/token_generator')

const FixturesController = {
  Index: async (req, res) => {
    try { 
      const response = await Fixtures.find({});
      console.log('LINE EIGHT IS WORKING', response)
      res.status(200).json(response)
    // res.status(200).json({message: 'finally working'})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

  Create: async (req, res) => {
    try {
      const group = req.body.group;
      const opponent = req.body.opponent;
      const date = req.body.date;
      const time = req.body.time;
      const venue = req.body.venue;
  
      const FixtureObject = { group, opponent, date, time, venue }
  
      const fixture = new Fixtures(FixtureObject);
  
      await fixture.save();
  
      res.status(201).json({ message: "OK" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  Update: async(req, res) => {
    try {
      await Fixtures.updateOne({_id: req.params.id},
  
        res.status(201).json({ message: "OK"})
      )} catch (error) {
        res.status(400).json({ error: error.message });
    }
  },

  Delete: async (req, res) => {
    try {
      const fixture = await Fixtures.findOneAndDelete({ _id: req.get("Fixture_ID") });

      res.status(200).json({ message: "DELETED" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

}

module.exports = FixturesController