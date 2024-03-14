import { UniqueIdentityID } from '@/core/entities/unique-identity-id'
import {
  AnswerAttachment,
  AnswerAttachmentProps,
} from '@/domain/forum/enterprise/entities/answer-attachment'

export function makeAnswerAttachment(
  override: Partial<AnswerAttachmentProps> = {},
  id?: UniqueIdentityID,
) {
  const answerAttachment = AnswerAttachment.create(
    {
      answerId: new UniqueIdentityID(),
      attachmentId: new UniqueIdentityID(),
      ...override,
    },
    id,
  )

  return answerAttachment
}
