// controllers/userController.js
const dashboardService = require('../services/dashboardService');
const logger = require('../utils/logger');

// Get all entity types
exports.getEntityTypes = async (req, res) => {
  console.log("fetchAllEntityTypes controller");
  try {
    const entityTypes = await dashboardService.getEntityTypes(); // Call the async method
    res.json(entityTypes);
  } catch (error) {
    logger.error('Error fetching entity types:', error);
    res.status(500).json({ error: 'Failed to fetch entity types' });
  }
};

exports.getEntitiesByEntityType = async (req, res) => {
  console.log("fetchAllEntityTypes controller");
  try {
    let entityTypeId, entityPropertyName, storageType;
    if (req.body && Object.keys(req.body).length > 0) {
      entityTypeId = req.body.entityTypeId;
      entityPropertyName = req.body.entityPropertyName;
      console.log("Data received from body:", { entityTypeId, entityPropertyName });
    } else {
      return res.status(400).json({ error: 'entityTypeId is required in body or params' });
    }
    const entityName = await dashboardService.getEntitiesByEntityType(entityTypeId, entityPropertyName, storageType); // Call the async method
    res.json(entityName);
  } catch (error) {
    logger.error('Error fetching entity types:', error);
    res.status(500).json({ error: 'Failed to fetch entity types' });
  }
};

//get entity 
exports.getEntity = async (req, res) => {
  console.log("fetchEntity controller");
  try {
    let entityTypeId, entityId, createdDate, storageType;

    // Check if data is in the request body
    if (req.body && Object.keys(req.body).length > 0) {
      entityTypeId = req.body.entityTypeId;
      entityId = req.body.entityId;
      createdDate = req.body.createdDate;
      storageType = req.body.storageType;
      console.log("Data received from body:", { entityTypeId, entityId, createdDate, storageType });
    }

    // Validate required fields
    if (!entityTypeId || !entityId) {
      return res.status(400).json({ error: 'entityTypeId and entityId are required' });
    }

    const entity = await dashboardService.getEntity(entityTypeId, entityId, createdDate, storageType);
    if (entity) {
      res.json(entity);
    } else {
      res.status(404).json({ error: 'Entity not found' });
    }
  } catch (error) {
    logger.error('Error fetching entity:', error);
    res.status(500).json({ error: 'Failed to fetch entity' });
  }
};