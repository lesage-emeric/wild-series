// Import access to data
import categoryRepository from "./categoryRepository";

// Declare the actions

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all categ
    const catgegoriesFromDB = await categoryRepository.readAll();
    // Res in json format
    res.json(catgegoriesFromDB);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const categoryId = Number.parseInt(req.params.id);
    const category = await categoryRepository.read(categoryId);

    if (category != null) {
      res.json(category);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
