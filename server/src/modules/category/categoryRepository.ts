import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Category = {
  id: number;
  name: string;
};

class CategoryRepository {
  // R of BREAD
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from category where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the category
    return rows[0] as Category;
  }

  // B of BREAD
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("select * from category");

    // Return the array of categories
    return rows as Category[];
  }
}

export default new CategoryRepository();
