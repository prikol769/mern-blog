import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createComment,
  getPostComments,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/getPostComments/:postId", getPostComments);
router.post("/create", verifyToken, createComment);

export default router;
