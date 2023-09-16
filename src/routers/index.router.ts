import { mainController } from "@/controller/main.controller";
import { validateSchema } from "@/middlewares/validateSchema";
import { savingSchema } from "@/schemas/saving.schema";
import { updateValueSchema } from "@/schemas/updateValue.schema";
import express from "express";

const router = express.Router();
router.get("/savings", mainController.getSavingsList);
router.post("/savings", validateSchema(savingSchema),mainController.postSaving);
router.put("/savings/:id",validateSchema(updateValueSchema) ,mainController.putSaving);
router.delete("/savings/:id", mainController.deleteSaving);

export default router;