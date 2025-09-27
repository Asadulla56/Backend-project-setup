import { Request, Response } from "express";
import { studentRouter } from "./student.model";


export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = new studentRouter(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ message: "Error creating student", error });
  }
};

export const getAllStudents = async (_req: Request, res: Response) => {
  try {
    const students = await studentRouter.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await studentRouter.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student", error });
  }
};


export const updateStudent = async (req: Request, res: Response) => {
  try {
    const student = await studentRouter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Error updating student", error });
  }
};


export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const student = await studentRouter.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error });
  }
};
