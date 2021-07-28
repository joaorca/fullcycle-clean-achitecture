import pgPromise from "pg-promise";

const pgp = pgPromise({});

const db = pgp({
    user: "postgres",
    password: "secret",
    host: "localhost",
    port: 5432,
    database: "youtube_parkinglot",
    idleTimeoutMillis: 100
});

export default db;