import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import graphqlHTTP from 'express-graphql';
import graphqlSchema from './src/schemas';
import mongoose from 'mongoose';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

const app = express();
const PORT = process.env.PORT || 8084;

app.use(bodyParser.json({ type: '*/*' }));

(async() => {
	try {
		const schema = graphqlSchema;

		await mongoose.connect('mongodb://palmeiras1914:palmeiras1942@ds111059.mlab.com:11059/mukaportes_palmeiras_api');
		console.log('connected');

		app.use('/graphql', graphqlHTTP(req => ({
			schema,
			graphiql: true
		})));

		const jsonSchema = await graphql(schema, introspectionQuery);
		await fs.writeFile('src/db/schema.json', JSON.stringify(jsonSchema, null, 2), err => {
			if (err) throw err;

			console.log('schema.json created successfully.');
		});

		app.listen(PORT, () => {
			console.info('==> Listening on port %s. (palmeiras-api)', PORT);
		});
	} catch (err) {
		console.log(err);
	}
})();
