/**
 * env
 */
export const ENV = process.env.NODE_ENV || 'development';
export const isProduction = (): boolean => process.env.NODE_ENV === 'production';
/**
 *  DB/Sequelize config
 */
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || '3306';
export const DB_NAME = process.env.DB_NAME || 'sequelize_demo';
export const DB_USERNAME = process.env.DB_USERNAME || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root';
