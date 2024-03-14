import { UniqueIdentityID } from '@/core/entities/unique-identity-id'
import {
  AnswerComment,
  AnswerCommentProps,
} from '@/domain/forum/enterprise/entities/answer-comment'
import { faker } from '@faker-js/faker'

export function makeAnswerComment(
  override: Partial<AnswerCommentProps> = {},
  id?: UniqueIdentityID,
) {
  const answerComment = AnswerComment.create(
    {
      authorId: new UniqueIdentityID(),
      answerId: new UniqueIdentityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answerComment
}
