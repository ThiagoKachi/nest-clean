import { Entity } from '@/core/entities/entity'
import { UniqueIdentityID } from '@/core/entities/unique-identity-id'

interface AttachmentProps {
  title: string
  link: string
}

export class Attachment extends Entity<AttachmentProps> {
  get title() {
    return this.props.title
  }

  get link() {
    return this.props.link
  }

  static create(props: AttachmentProps, id?: UniqueIdentityID) {
    const attachment = new Attachment(props, id)

    return attachment
  }
}
