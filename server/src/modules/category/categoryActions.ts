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

const edit: RequestHandler = async (req, res, next) => {
  try {
    // Update a specific category based on the provided ID
    const category = {
      id: Number(req.params.id),
      name: req.body.name,
    };

    const affectedRows = await categoryRepository.update(category);

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
    // Extract the category data from the request body
    const newCategory = {
      name: req.body.name,
    };

    // Create the category
    const insertId = await categoryRepository.create(newCategory);

    // Repond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(210).json({ insertId });
  } catch (err) {
    //Pass any errors to the error handling middleware
    next(err);
  }
};
export default { browse, read };
