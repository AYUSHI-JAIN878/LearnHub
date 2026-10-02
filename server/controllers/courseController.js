
import Course from "../models/Course.js";

export async function getCourses(req, res) {
  try {
    const {
      search = "",
      category = "",
      level = "",
    } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (level) {
      filter.level = level;
    }

    if (search) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
        {
          category: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const courses = await Course.find(filter).sort({
      createdAt: -1,
    });

    res.json({
      courses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);

    res.status(500).json({
      message: "Failed to fetch courses",
    });
  }
}

export async function getCourse(req, res) {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.json({
      course,
    });
  } catch (error) {
    console.error("Error fetching course:", error);

    res.status(500).json({
      message: "Failed to fetch course",
    });
  }
}

export async function createCourse(req, res) {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      course,
    });
  } catch (error) {
    console.error("Error creating course:", error);

    res.status(500).json({
      message: "Failed to create course",
    });
  }
}