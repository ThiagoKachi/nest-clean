import { Entity } from '@/core/entities/entity'
import { UniqueIdentityID } from '@/core/entities/unique-identity-id'

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueIdentityID) {
    const instructor = new Instructor(props, id)

    return instructor
  }
}
