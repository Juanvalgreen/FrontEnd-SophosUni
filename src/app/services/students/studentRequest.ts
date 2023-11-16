export interface studentRequest {

  student_id?: number
  student_full_name: string
  faculty: string
  available_credits: number
  enrolled_credits: number
  student_email: string | null
  student_phone: string | null
}
