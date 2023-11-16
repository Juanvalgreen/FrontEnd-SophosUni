import { Courses } from "./courses.model";

export interface PrerequisiteCourse{
  prerequisite_id: number
  course_id: number
  course_details: Courses
  prerequisite_course_id: number
  course_prerequisite_details: Courses
}
