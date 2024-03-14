import { UniqueIdentityID } from '@/core/entities/unique-identity-id'
import {
  QuestionComment,
  QuestionCommentProps,
} from '@/domain/forum/enterprise/entities/question-comment'
import { faker } from '@faker-js/faker'

export function makeQuestionComment(
  override: Partial<QuestionCommentProps> = {},
  id?: UniqueIdentityID,
) {
  const questionComment = QuestionComment.create(
    {
      authorId: new UniqueIdentityID(),
      questionId: new UniqueIdentityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return questionComment
}
