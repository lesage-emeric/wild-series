import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Declaration of programs Route
import programActions from "./modules/program/programActions";
router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);

/* ************************************************************************* */

// Declaration of categories Route
import categoryActions from "./modules/category/categoryActions";
router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);

// Declaration of a welcome Route
import sayActions from "./modules/say/sayActions";
router.get("/welcome", sayActions.sayWelcome);

/* ************************************************************************* */

export default router;
