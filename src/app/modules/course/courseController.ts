import { Request, Response } from "express";
import { CourseModel } from "./courseModel";


export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = new CourseModel(req.body);
    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: "Error creating course", error });
  }
};


export const getAllCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await CourseModel.find().populate("category").populate("mentors");
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
};


export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await CourseModel.findById(req.params.id).populate("category").populate("mentors");
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error });
  }
};


export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await CourseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Error updating course", error });
  }
};


export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await CourseModel.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting course", error });
  }
};
