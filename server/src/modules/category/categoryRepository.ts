import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Category = {
  id: number;
  name: string;
};

class CategoryRepository {
  // R of BREAD // R of CRUD
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from category where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the category
    return rows[0] as Category;
  }

  // B of BREAD // R of CRUD
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("select * from category");

    // Return the array of categories
    return rows as Category[];
  }

  // E of BREAD // U of CRUD
  async update(category: Category) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "update category set name = ? where id = ?",
      [category.name, category.id],
    );
    return result.affectedRows;
  }

  // A of BREAD // C of CRUD
  async create(category: Omit<Category, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into category (name) values (?)",
      [category.name],
    );
    return result.insertId;
  }

  // D of BREAD // D of CRUD
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from category where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new CategoryRepository();
