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

const edit: RequestHandler = async (req, res, next) => {
  try {
    const program = {
      id: Number(req.params.id),
      title: req.body.title,
    };

    const affectedRows = await programRepository.update(program);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newProgram = {
      title: req.body.title,
    };
    const insertId = await programRepository.create(newProgram);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const programId = Number(req.params.id);
    await programRepository.delete(programId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
