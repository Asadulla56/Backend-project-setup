import { Request, Response } from "express";
import { mentorRouter } from "./mentorModel";


export const createMentor = async (req: Request, res: Response) => {
  try {
    const mentor = new mentorRouter(req.body);
    const savedMentor = await mentor.save();
    res.status(201).json(savedMentor);
  } catch (error) {
    res.status(500).json({ message: "Error creating mentor", error });
  }
};


export const getAllMentors = async (_req: Request, res: Response) => {
  try {
    const mentors = await mentorRouter.find();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching mentors", error });
  }
};


export const getMentorById = async (req: Request, res: Response) => {
  try {
    const mentor = await mentorRouter.findById(req.params.id);
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });
    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching mentor", error });
  }
};


export const updateMentor = async (req: Request, res: Response) => {
  try {
    const mentor = await mentorRouter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });
    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ message: "Error updating mentor", error });
  }
};

export const deleteMentor = async (req: Request, res: Response) => {
  try {
    const mentor = await mentorRouter.findByIdAndDelete(req.params.id);
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });
    res.status(200).json({ message: "Mentor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting mentor", error });
  }
};
