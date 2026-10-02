import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import Course from "../models/Course.js";

const courses = [
  { title:"Complete Web Development", category:"Web Development", level:"Beginner", description:"Learn HTML, CSS, JavaScript and build modern responsive websites.", duration:"40 hrs", instructor:"LearnHub Team", lessons:32, featured:true, image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" },
  { title:"React.js Masterclass", category:"Web Development", level:"Intermediate", description:"Learn React.js and build modern interactive web applications.", duration:"32 hrs", instructor:"LearnHub Team", lessons:26, featured:true, image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80" },
  { title:"C++ Programming", category:"Programming", level:"Beginner", description:"Learn C++ programming from basics to object-oriented programming.", duration:"28 hrs", instructor:"LearnHub Team", lessons:24, image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80" },
  { title:"Python for Beginners", category:"Programming", level:"Beginner", description:"Build a strong Python foundation with practical examples.", duration:"24 hrs", instructor:"LearnHub Team", lessons:20, image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80" },
  { title:"UI/UX Design Fundamentals", category:"Design", level:"Beginner", description:"Understand design principles, wireframes and user-centered interfaces.", duration:"18 hrs", instructor:"LearnHub Team", lessons:16, image:"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80" },
  { title:"Data Science Essentials", category:"Data Science", level:"Intermediate", description:"Explore data analysis, visualization and essential data science concepts.", duration:"36 hrs", instructor:"LearnHub Team", lessons:30, image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
  { title:"JavaScript Advanced", category:"Web Development", level:"Advanced", description:"Deepen your JavaScript knowledge with modern patterns and APIs.", duration:"30 hrs", instructor:"LearnHub Team", lessons:25, image:"https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1200&q=80" },
  { title:"Git & GitHub Essentials", category:"Programming", level:"Beginner", description:"Learn version control and collaborative development workflows.", duration:"10 hrs", instructor:"LearnHub Team", lessons:12, image:"https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=80" }
];

await connectDB();
await Course.deleteMany({});
await Course.insertMany(courses);
console.log(`Seeded ${courses.length} courses`);
await mongoose.connection.close();