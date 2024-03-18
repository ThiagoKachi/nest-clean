import { UniqueIdentityID } from '@/core/entities/unique-identity-id'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'
import { Attachment as PrismaAttachment } from '@prisma/client'

export class PrismaAnswerAttachmentMapper {
  static toDomain(raw: PrismaAttachment): AnswerAttachment {
    if (!raw.answerId) {
      throw new Error('Invalid attachment type.')
    }

    return AnswerAttachment.create(
      {
        attachmentId: new UniqueIdentityID(raw.id),
        answerId: new UniqueIdentityID(raw.answerId),
      },
      new UniqueIdentityID(raw.id),
    )
  }
}
