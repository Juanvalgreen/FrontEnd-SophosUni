import { students } from "./students.model"
import { teachers } from "./teachers.model"

export interface Courses{
  course_id: number
  teacher_details: teachers
  course_name: string
  amount_credits: number
  available_places: number
  student_monitor_details: students

}


