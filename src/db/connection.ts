import { createConnection, Connection, ConnectionOptions } from "mysql2/promise";
import { getEnv } from "../utils";

const connectionOptions: ConnectionOptions = {
    database: getEnv("DB"),
    user: getEnv("USERNAME"),
    password: getEnv("PASSWORD"),
    port: parseInt(getEnv("DB_PORT")),
    host: getEnv("HOST")
};

const connection: Connection = await createConnection(connectionOptions);
export default connection;