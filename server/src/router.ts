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

// Declaration of a welcome Route
import sayActions from "./modules/say/sayActions";
router.get("/welcome", sayActions.sayWelcome);

/* ************************************************************************* */

// Declaration of a programs Route
import browse from "./modules/program/programActions";
router.get("/api/programs", browse);

/* ************************************************************************* */

export default router;
