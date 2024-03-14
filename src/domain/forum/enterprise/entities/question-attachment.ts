import { Entity } from '@/core/entities/entity'
import { UniqueIdentityID } from '@/core/entities/unique-identity-id'

export interface QuestionAttachmentProps {
  questionId: UniqueIdentityID
  attachmentId: UniqueIdentityID
}

export class QuestionAttachment extends Entity<QuestionAttachmentProps> {
  get questionId() {
    return this.props.questionId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: QuestionAttachmentProps, id?: UniqueIdentityID) {
    const attachment = new QuestionAttachment(props, id)

    return attachment
  }
}
