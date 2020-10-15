/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 04/03/2020
 * Author: Glaucia Lemos
 */

const { Pool } = require('pg-promise');
const dotenv = require('dotenv');

dotenv.config();


const pgp = require('pg-promise')(/* initialization options */);

const cn = {
    host: 'ec2-34-233-43-35.compute-1.amazonaws.com', // server name or IP address;
    port: 5432,
    database: 'dbhage2pm6tt9t',
    user: 'zwwkmoelrvjrde',
    password: '54c978763ef278c544a42b10618dc22f8f79b1c5deba5d5761467098bbc5bf2f',
    ssl: {
    rejectUnauthorized: false
  }
};

const db = pgp(cn); // database instance;


module.exports = {
  query: (text, params) => db.many(text, params),
};
