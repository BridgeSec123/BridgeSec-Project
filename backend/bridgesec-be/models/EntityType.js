const mongoose = require('mongoose');

const EntityTypeSchema = new mongoose.Schema({
    entityTypeId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    entityPropertyName: { type: String },
    storageType: { type: String },
}, { collection: 'EntityType' });

const EntityType = mongoose.model('EntityType', EntityTypeSchema);

async function initializeEntityTypeCollection() {
    const EntityTypeCollectionExists = await mongoose.connection.db.listCollections({ name: 'EntityType' }).toArray();
    if (EntityTypeCollectionExists.length === 0) {
        await mongoose.connection.db.createCollection('EntityType');
        console.log('EntityType Collection created');
    } else {
        console.log('EntityType Collection already exists');
    }

    // Updated entityTypes array with 'label' as entityPropertyName and 'Object' as storageType
    const entityTypes = [
        { entityTypeId: 1, name: 'Administrator roles', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 2, name: 'Advanced server access', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 3, name: 'API Access Management (OAuth 2.0)', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 4, name: 'Applications', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 5, name: 'Authentication', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 6, name: 'Authenticators', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 7, name: 'Authorization Servers', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 8, name: 'Brands', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 9, name: 'CAPTCHAs', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 10, name: 'Client secret rotation and key management', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 11, name: 'Custom templates', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 12, name: 'Devices', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 13, name: 'Domains', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 14, name: 'Dynamic client registration', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 15, name: 'Event hooks', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 16, name: 'Factors', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 17, name: 'Features', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 18, name: 'Groups', entityPropertyName: 'label', storageType: 'Array' },
        { entityTypeId: 19, name: 'Identity Providers', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 20, name: 'Identity Sources', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 21, name: 'Inline hooks', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 22, name: 'Linked objects', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 23, name: 'Log streaming', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 24, name: 'Mappings', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 25, name: 'MyAccount', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 26, name: 'OpenID Connect', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 27, name: 'Org', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 28, name: 'Policy', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 29, name: 'Push providers', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 30, name: 'Risk integration', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 31, name: 'Schemas', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 32, name: 'Sessions', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 33, name: 'System Log', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 34, name: 'UI schema', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 35, name: 'User types', entityPropertyName: 'label', storageType: 'Object' },
        { entityTypeId: 36, name: 'Users', entityPropertyName: 'profile.email', storageType: 'Array' },
    ];

    for (const entityType of entityTypes) {
        const exists = await EntityType.findOne({ name: entityType.name });
        if (!exists) {
            try {
                await EntityType.create(entityType);
                console.log(`Inserted entityTypeId:`);
            } catch (err) {
                console.error(`Error inserting : ${entityType.name}`, err);
            }
        } else {
            console.log(`entityTypeId: ${entityType.name} already exists, skipping.`);
        }
    }
}

module.exports = { EntityType, initializeEntityTypeCollection };
