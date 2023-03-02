import express from "express";
import { userDelete,
         userGet,
         userPatch,
         userPost,
         userPut } from "../controllers/userController.js";

const router = express.Router();

router.get("/", userGet);

router.put("/:id", userPut);

router.post("/", userPost);

router.delete("/", userDelete);

router.patch("/", userPatch);

export default router;