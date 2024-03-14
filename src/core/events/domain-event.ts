import { UniqueIdentityID } from '../entities/unique-identity-id'

export interface DomainEvent {
  ocurredAt: Date
  getAggregateId(): UniqueIdentityID
}
