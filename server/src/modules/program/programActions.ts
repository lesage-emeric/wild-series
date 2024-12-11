import type { RequestHandler } from "express";

import programRepository from "./programRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const programsFromDB = await programRepository.readAll();

    res.json(programsFromDB);
  } catch (err) {
    next(err);
  }
};

// ********************************************

const read: RequestHandler = async (req, res, next) => {
  try {
    const programId = Number.parseInt(req.params.id);
    const program = await programRepository.read(programId);

    if (program != null) {
      res.json(program);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
