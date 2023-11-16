import { Courses } from "./courses.model";
import { students } from "./students.model";

export interface ApprovedCourse{

  history_courses_id: number
  student_id: number
  student_details: students
  course_id: Courses
  course_details: Courses

}
