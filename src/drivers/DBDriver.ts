import { Response } from "../types/Response";

export abstract class DBDriver {
    
    /**
     * Initialize the database
     */
    abstract initialize(): Promise<boolean>;
    /**
     * Read the entire database
     */
    abstract read(): Promise<Response[]>;
    /**
     * Write to the database. This method appends to the database.
     * @param content The content to write to the database
     */
    abstract write(content: Response[]): Promise<boolean>;

    /**
     * Close the database connection.
     */
    abstract close(): Promise<boolean>;
}