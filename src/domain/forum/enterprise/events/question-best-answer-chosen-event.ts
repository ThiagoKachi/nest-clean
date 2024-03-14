import { UniqueIdentityID } from '@/core/entities/unique-identity-id'
import { DomainEvent } from '@/core/events/domain-event'
import { Question } from '../entities/question'

export class QuestionBestAnswerChosenEvent implements DomainEvent {
  public ocurredAt: Date
  public question: Question
  public bestAnswerId: UniqueIdentityID

  constructor(question: Question, bestAnswerId: UniqueIdentityID) {
    this.question = question
    this.bestAnswerId = bestAnswerId
    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueIdentityID {
    return this.question.id
  }
}
