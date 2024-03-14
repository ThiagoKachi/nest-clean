import { Entity } from '@/core/entities/entity'
import { UniqueIdentityID } from '@/core/entities/unique-identity-id'

export interface AnswerAttachmentProps {
  answerId: UniqueIdentityID
  attachmentId: UniqueIdentityID
}

export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
  get answerId() {
    return this.props.answerId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: AnswerAttachmentProps, id?: UniqueIdentityID) {
    const attachment = new AnswerAttachment(props, id)

    return attachment
  }
}
