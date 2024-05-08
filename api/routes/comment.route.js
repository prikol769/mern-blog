import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createComment,
  getPostComments,
  likeComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/getPostComments/:postId", getPostComments);
router.post("/create", verifyToken, createComment);
router.put("/likeComment/:commentId", verifyToken, likeComment);

export default router;
