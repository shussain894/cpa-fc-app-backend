const Fixtures = require('../models/Fixtures')

const FixturesController = {
  Index: (req, res) => {
    Fixtures.find(async (err, group) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ group: group, opponent: opponent, date: date, time: time, location: location, confirmed: confirmed, result: result });
    });
  },

  Create: async (req, res) => {
    const group = req.body.group;
    const opponent = req.body.opponent;
    const date = req.body.date;
    const time = req.body.time;
    const location = req.body.location;

    const FixtureObject = { group, opponent, date, time, location }

    const fixture = new Fixtures(FixtureObject)

    fixture.save(async (err) => {
      if (err) {
        throw err;
      }
      res.status(201).json({ message: "OK" });
    });
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