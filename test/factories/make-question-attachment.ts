import { UniqueIdentityID } from '@/core/entities/unique-identity-id'
import {
  QuestionAttachment,
  QuestionAttachmentProps,
} from '@/domain/forum/enterprise/entities/question-attachment'

export function makeQuestionAttachment(
  override: Partial<QuestionAttachmentProps> = {},
  id?: UniqueIdentityID,
) {
  const questionAttachment = QuestionAttachment.create(
    {
      questionId: new UniqueIdentityID(),
      attachmentId: new UniqueIdentityID(),
      ...override,
    },
    id,
  )

  return questionAttachment
}
