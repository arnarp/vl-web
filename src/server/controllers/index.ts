import * as express from 'express';
import { config, DynamoDB } from 'aws-sdk';

config.update({
  region: 'eu-west-1',
});
const db = new DynamoDB();

export const router = express.Router();

router.post('/test', (req, res) => {
  const params = {
    TableName: 'Movies',
    KeySchema: [
      { AttributeName: 'year', KeyType: 'HASH' },  // Partition key
      { AttributeName: 'title', KeyType: 'RANGE' },  // Sort key
    ],
    AttributeDefinitions: [
      { AttributeName: 'year', AttributeType: 'N' },
      { AttributeName: 'title', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  db.createTable(params, (err, data) => {
    if (err) {
      console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
    }
  });
  res.status(200).send('Ok');
});
