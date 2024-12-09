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

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategory = categories.filter((cat) =>
      cat.name.includes(req.query.q as string),
    );
    res.json(filteredCategory);
  } else {
    res.json(categories);
  }
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
