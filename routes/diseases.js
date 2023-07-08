const axios = require('axios')
const express = require('express')
const fs = require('fs');
const router = express.Router()
const { Disease } = require('../models')

router.get('/getDiseases', async (req, res) => {
  try {
    const diseases = await Disease.findAll();
    res.json(diseases);
  }
  catch (error) {
    console.log("The error", error)
  }
});

router.post('/populate', async (req, res) => {
  try {
    // const data = JSON.parse(fs.readFileSync('C:/Users/User/Desktop/Y4S1/FYP/coding/server/routes/diseaseData.json', 'utf8'));
    const data = JSON.parse(fs.readFileSync('./diseaseData.json', 'utf8'));
    for (const item of data) {
      for (const disease of item.diseases) {
        await Disease.create({
          country: item.country,
          disease: disease.disease,
          vaccine: disease.vaccine,
          cases: disease.cases
        });
      }
    }
    res.status(200).send('Database populated successfully.');
  } catch (error) {
    console.log("The error", error);
    res.status(500).send('An error occurred while populating the database.');
  }
});

router.get('/getDisease', async (req, res) => {
  const diseaseId = req.query.diseaseId;
  if (!diseaseId) {
    return res.status(400).json({ message: 'Disease ID is required.' });
  }

  try {
    const disease = await Disease.findByPk(diseaseId);
    if (!disease) {
      return res.status(404).json({ message: 'No disease found with this ID.' });
    }

    res.status(200).json({
      disease: disease,
    });
  } catch (error) {
    console.error('Error fetching disease:', error);
    res.status(500).json({ message: 'Error fetching disease' });
  }
});

router.patch('/updateDisease', async (req, res) => {
  const { disease, country, vaccine, cases } = req.body;
  const idisease = await Disease.findByPk(req.query.diseaseId);

  try {
    if (!idisease) {
      return res.status(400).json({ message: 'Disease not found' });
    }
    idisease.disease = disease || idisease.disease;
    idisease.country = country || idisease.country;
    idisease.vaccine = vaccine || idisease.vaccine;
    idisease.cases = cases || idisease.cases;

    await idisease.save();

    res.status(200).json({
      message: 'Disease updated successfully',
      disease: disease,
    });
  } catch (error) {
    console.error('Error updating disease:', error);
    res.status(500).json({ message: 'Error updating disease' });
  }
});

router.post('/removeDisease', async (req, res) => {
  const disease = await Disease.findByPk(req.query.diseaseId);
console.log(req.query.diseaseId);
  try {
    if (!disease) {
      return res.status(400).json({ message: 'Disease not found' });
    }

    await disease.destroy();

    res.status(200).json({
      message: 'Disease removed successfully',
    });
  } catch (error) {
    console.error('Error removing disease:', error);
    res.status(500).json({ message: 'Error removing disease' });
  }
});

router.post('/addDisease', async (req, res) => {
  const { disease, country, vaccine, cases } = req.body;
  
  try {
    if (!disease || !country || !vaccine || !cases) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newDisease = await Disease.create({
      disease: disease,
      country: country,
      vaccine: vaccine,
      cases: cases
    });

    res.status(201).json({
      message: 'Disease added successfully',
      disease: newDisease,
    });
  } catch (error) {
    console.error('Error adding disease:', error);
    res.status(500).json({ message: 'Error adding disease' });
  }
});


module.exports = router;
