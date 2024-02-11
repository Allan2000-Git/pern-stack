const {Pool} = require('pg');

const pool = new Pool(
    // postgres will automatically look for variables (PG*)
);

module.exports = {
    query: (text, params) => pool.query(text, params)
}