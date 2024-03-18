import { UniqueIdentityID } from '@/core/entities/unique-identity-id'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'
import { Attachment as PrismaAttachment } from '@prisma/client'

export class PrismaQuestionAttachmentMapper {
  static toDomain(raw: PrismaAttachment): QuestionAttachment {
    if (!raw.questionId) {
      throw new Error('Invalid attachment type.')
    }

    return QuestionAttachment.create(
      {
        attachmentId: new UniqueIdentityID(raw.id),
        questionId: new UniqueIdentityID(raw.questionId),
      },
      new UniqueIdentityID(raw.id),
    )
  }
}
