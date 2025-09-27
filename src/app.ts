
import express, { type Application, type Request, type Response } from "express"
import  cors from "cors"

import dotenv from "dotenv";
import { CourseRoutes } from "./app/modules/course/courseRouter";
import { MentorRoutes } from "./app/modules/mentors/mentorRouters";
import { StudentRoutes } from "./app/modules/students/student.router";

const app:Application = express()

app.use (express.json());
app.use(cors());
dotenv.config();

// custom middleware 
app.use ("api/Course",CourseRoutes);
app.use ("api/Mentor",MentorRoutes);
app.use ("api/Student",StudentRoutes)



app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


export default app;


