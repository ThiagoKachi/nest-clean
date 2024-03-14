import { randomUUID } from 'node:crypto'

export class UniqueIdentityID {
  private value: string

  toString() {
    return this.value
  }

  toValue() {
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }

  equals(id: UniqueIdentityID) {
    return id.toValue() === this.value
  }
}
