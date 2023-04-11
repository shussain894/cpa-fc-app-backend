const Fixtures = require('../models/Fixtures')
const TokenGenerator = require('../models/token_generator')

const FixturesController = {
  Index: (req, res) => {
    // Fixtures.find(async (err, group) => {
    //   if (err) {
    //     console.log('jwt error', err)
    //     throw err;
    //   }
    //   res.status(200).json({ group: group, opponent: opponent, date: date, time: time, venue: venue, confirmed: confirmed, result: result });
    // });
    res.status(200).json({message: 'why aint this working'})
  },

  Create: async (req, res) => {
    const { authorization } = req.headers
    const token = authorization.split(' ')[1]
    try {
      const group = req.body.group;
      const opponent = req.body.opponent;
      const date = req.body.date;
      const time = req.body.time;
      const venue = req.body.venue;
  
      const FixtureObject = { group, opponent, date, time, venue }
  
      const fixture = new Fixtures(FixtureObject);
  
      await fixture.save();
      // const token = await TokenGenerator.jsonwebtoken(req.fixture_id);
      
  
      res.status(201).json({ message: "OK" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    // fixture.save(async (err) => {
    //   if (err) {
    //     throw err;
    //   }
    //   res.status(201).json({ message: "OK" });
    // });
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