import { students } from "./students.model";
import { Courses } from "./courses.model";

export interface Enrollment{

  enrollment_id: number
  student_id: number
  student_details: students
  course_id: number
  course_details: Courses
  enrollment_date: Date
}
