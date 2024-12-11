import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
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
}

export default new ProgramRepository();
