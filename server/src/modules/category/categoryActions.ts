// Import access to data
import categoryRepository from "./categoryRepository";

// Some data
const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-fiction",
  },
];

// Declare the actions

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const catgegoriesFromDB = await categoryRepository.readAll();

  res.json(catgegoriesFromDB);
};

const read: RequestHandler = (req, res) => {
  const catId = Number.parseInt(req.params.id);
  const category = categories.find((c) => c.id === catId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
