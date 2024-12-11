import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis?: string;
  poster?: string;
  country?: string;
  year?: number;
};

class ProgramRepository {
  // R of BREAD
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from program where id = ?",
      [id],
    );
    return rows[0] as Program;
  }

  // B of BREAD
  async readAll() {
    //
    const [rows] = await databaseClient.query<Rows>("select * from program");

    return rows as Program[];
  }

  async update(program: Program) {
    //
    const [result] = await databaseClient.query<Result>(
      "update program set name = ? where id = ?",
      [program.title, program.id],
    );
    return result.affectedRows;
  }

  async create(program: Omit<Program, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into program (title) values (?)",
      [program.title],
    );
    return result.insertId;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from program where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new ProgramRepository();
