import { UniqueIdentityID } from '@/core/entities/unique-identity-id'
import { Answer, AnswerProps } from '@/domain/forum/enterprise/entities/answer'
import { faker } from '@faker-js/faker'

export function makeAnswer(
  override: Partial<AnswerProps> = {},
  id?: UniqueIdentityID,
) {
  const answer = Answer.create(
    {
      authorId: new UniqueIdentityID(),
      questionId: new UniqueIdentityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answer
}
