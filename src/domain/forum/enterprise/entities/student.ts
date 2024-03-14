import { Entity } from '@/core/entities/entity'
import { UniqueIdentityID } from '@/core/entities/unique-identity-id'

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueIdentityID) {
    const student = new Student(props, id)

    return student
  }
}
