import { Router } from "express";
import {
  getAllCourses,
  getCourseById,
  getCoursesByCategory
} from "../controllers/courses.controllers.js";

const coursesRouter = Router();

coursesRouter.get("/cursos", (req, res) => {
  const filter = req.query;
  const courseList = getAllCourses(filter);
  res.status(200).json({ courseList });
});

coursesRouter.get("/cursos/:id", (req, res) => {
  const { id } = req.params;
  const course = getCourseById(id);
  if (course) {
    return res.status(200).json({ course });
  }
  return res.status(404).json({ error: "Curso não encontrado" });
});

coursesRouter.get("/cursos/categoria/:categoria", (req, res) => {
  const { categoria } = req.params;
  const courses = getCoursesByCategory(categoria);
  if (courses.length > 0) {
    return res.status(200).json({ courses });
  }
  return res.status(404).json({ error: "Nenhum curso encontrado para essa categoria" });
});

export { coursesRouter };