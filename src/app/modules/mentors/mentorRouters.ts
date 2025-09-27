import { Router } from "express";
import {
  createMentor,
  getAllMentors,
  getMentorById,
  updateMentor,
  deleteMentor,
} from "./mentorController";

const router = Router();


router.post("/create", createMentor);
router.get("/", getAllMentors);
router.get("/:id", getMentorById);
router.put("/:id", updateMentor);
router.delete("/:id", deleteMentor);

export const MentorRoutes = router;
