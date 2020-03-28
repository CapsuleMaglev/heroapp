const knex = require("knex");
const configuration = requre("../../knexfile.js");

const connection = knex(configuration.development);

modelue.exports = connection;
