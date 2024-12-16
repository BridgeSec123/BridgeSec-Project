const express = require('express');
const dashboardController = require('../controllers/dashboardController');
const router = express.Router();

router.get('/entityTypes',dashboardController.getEntityTypes);
router.post('/entities',dashboardController.getEntitiesByEntityType);
router.post('/entity',dashboardController.getEntity);

module.exports = router;