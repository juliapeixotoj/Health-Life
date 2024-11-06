import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  return SQLite.openDatabase({ name: 'MenstrualCycleDB', location: 'default' });
};

export const createTables = async (db: SQLiteDatabase): Promise<void> => {
  const query = `
    CREATE TABLE IF NOT EXISTS cycle (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      startDate TEXT
    );
  `;
  await db.executeSql(query);
};


