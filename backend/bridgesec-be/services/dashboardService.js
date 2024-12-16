const { Entity } = require('../models/Entity');
const { EntityType } = require('../models/EntityType');
const { format } = require('date-fns');

const formatDate = (date) => {
    // Format date as 'YYYY-MM-DD' or as required by your backend
    return format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"); // ISO 8601 format
};

//helper function to create date
// const getStartOfDay = (createDate) => {
//     console.log("Received createDate:", createDate);   
//         const parsedDate = new Date(format(createDate, "yyyy-MM-dd"));
//         console.log("parsedDate :: "+parsedDate);
//         const startOfDay = formatDate(parsedDate);
//         console.log("startdate after format:", startOfDay);
//         parsedDate.setUTCHours(23, 59, 59, 999); 
//         const endOfDay = formatDate(parsedDate);;  
//         console.log("enddate after format:", endOfDay);    
//         return { 
//         startOfDay, 
//         endOfDay 
//         };
    
// };
//helper function to create date
 const getStartOfDay = (createDate) => {    
     const startOfDay = new Date(format(createDate, "yyyy-MM-dd")); 
     startOfDay.setUTCHours(0, 0, 0, 0);     
     const endOfDay = new Date(format(createDate, "yyyy-MM-dd")); 
     endOfDay.setUTCHours(23, 59, 59, 999);    
    return { startOfDay,endOfDay};        
 };

//get nested json property
const getNestedProperty = (obj, path) => {
    // Split the path into individual keys
    const keys = path.split('.');

    // Reduce the keys array to access the property in a nested manner
    return keys.reduce((acc, key) => {
        return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
};

// Helper function to map entity names
const getEntityName = (entities, entityPropertyName) => {
    return entities.map(item => {
        if (item.storageType === 'Object') {
            // Handle case when json is a single object
            return {
                id: item.jsonId,
                label: item.json?.[entityPropertyName],
                storageType: item.storageType
            };
        } else if (item.storageType === 'Array' && Array.isArray(item.json)) {
            return item.json.map(json => {
                return {
                    id: json.id,
                    label: getNestedProperty(json, entityPropertyName),
                    storageType: item.storageType
                };
            });
        } else {
            return {};
        }
    }).flat(); // Use flat() to ensure we get a flat array if there are nested results
};


// get entity type 
exports.getEntityTypes = async () => {
    console.log("fetchAllEntityTypes ");
    try {
        const entityType = await EntityType.find();
        return entityType; // Return the fetched entityType
    } catch (error) {
        console.error('Error fetching entity types:', error);
        throw error; // Rethrow the error for further handling
    }

}

// fetch entity name 
exports.getEntitiesByEntityType = async (entityTypeId, entityPropertyName) => {
    console.log("fetchAllEntityName:  " + entityTypeId, entityPropertyName);
    // Get the start of the day (UTC)
    
    const { startOfDay, endOfDay } = getStartOfDay(new Date());
    // Build the query object
    const query = {};
    if (entityTypeId) query.entityTypeId = entityTypeId;
    if (startOfDay && endOfDay) query.createDate = {
        $gte: startOfDay,
        $lt: endOfDay
    };
    try {
        // Fetch the entities based on the query
        const entities = await Entity.find(query);
        // Map the fetched entities to the required structure

        const entityNames = getEntityName(entities, entityPropertyName);
        return entityNames;
    } catch (error) {
        console.error('Error fetching entity types:', error);
        throw error; // Rethrow the error for further handling
    }

}

exports.getEntity = async (entityTypeId, entityId, createDate, storageType) => {
    const effectiveDate = createDate ? createDate : new Date();
    const { startOfDay, endOfDay } = getStartOfDay(effectiveDate);
    const query = {};
    if (entityTypeId) {
        query.entityTypeId = entityTypeId;
        
    }
    if (storageType === 'Object') {
        query.jsonId = entityId;
        
    }
    if (startOfDay && endOfDay) {
        query.createDate = {
            $gte: startOfDay,
            $lt: endOfDay
        };
        
    }
    try {
        const entity = await Entity.find(query);        
        let result={};
        if(entity!=""){
        result = getEntity(entity, entityId);
        
    }
    return result;     

    } catch (error) {
        console.error("10. Error fetching entity types:", error);
        throw error; // Rethrow the error for further handling
    }
};

// Helper function to map entity
const getEntity = (entity, entityId) => {  
    console.log("getEntity ---------------------:: "+entity) 
    const result = entity.map((item, index) => {  
        if (item.storageType === 'Object') {           
            return item.json;
        } else if (item.storageType === 'Array') {      
            const jsonMatch = item.json.find(json => json.id === entityId);
            if (jsonMatch) {                
                return jsonMatch;
            }
        } else {            
            return null;
        }
    }).filter((result, index) => {        
        return result !== null;
    }); 
    return result.length > 0 ? result[0] : null;
};
