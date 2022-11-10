const express = require('express');
const { TeamMember } = require('./model');

const app = express();
app.use(express.json());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/add_member', async (req, res, next) => {
    await TeamMember.create(req.body);
});

module.exports = app;
