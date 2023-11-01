export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  friends: IFriendsRequestResponse[]
  friended: IFriendsRequestResponse[]
}

export interface IFriendsRequestResponse {
  id: number
  fromId: number
  toId: number
  status: FriendsRequestStatus
  createdAt: string
}

export enum FriendsRequestStatus {
  pending = 'PENDING',
  accepted = 'ACCEPTED',
  rejected = 'REJECTED',
}

export enum AuthStatus {
  pending = 'pending',
  authorized = 'authorized',
  notAuthorized = 'not authorized',
}

export interface IFriend {
  img: string
  imgFallback: string
  name: string
}
