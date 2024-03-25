import { UniqueIdentityID } from '@/core/entities/unique-identity-id'
import { Attachment } from '@/domain/forum/enterprise/entities/attachment'
import { Attachment as PrimsaAttachment, Prisma } from '@prisma/client'

export class PrismaAttachmentMapper {
  static toDomain(raw: PrimsaAttachment): Attachment {
    return Attachment.create(
      {
        title: raw.title,
        url: raw.url,
      },
      new UniqueIdentityID(raw.id),
    )
  }

  static toPrisma(
    attachment: Attachment,
  ): Prisma.AttachmentUncheckedCreateInput {
    return {
      id: attachment.id.toString(),
      title: attachment.title,
      url: attachment.url,
    }
  }
}
