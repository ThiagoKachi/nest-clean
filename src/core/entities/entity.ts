import { UniqueIdentityID } from './unique-identity-id'

export abstract class Entity<Props> {
  private _id: UniqueIdentityID
  protected props: Props

  get id() {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueIdentityID) {
    this.props = props
    this._id = id ?? new UniqueIdentityID(id)
  }

  public equals(entity: Entity<any>) {
    if (entity === this) {
      return true
    }

    if (entity.id === this._id) {
      return true
    }

    return false
  }
}
