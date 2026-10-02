import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });

    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({
      message: "Failed to fetch courses"
    });
  }
});

// Get featured courses
router.get("/featured", async (req, res) => {
  try {
    const courses = await Course.find({ featured: true });

    res.json(courses);
  } catch (error) {
    console.error("Error fetching featured courses:", error);
    res.status(500).json({
      message: "Failed to fetch featured courses"
    });
  }
});

// Get single course
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({
      message: "Failed to fetch course"
    });
  }
});

export default router;