import { type RootState } from '@src/store/store'
import { type IFriend } from '@src/types/api'
import { type IUser } from '@src/types/types'

export const selectAllUsers: (store: RootState) => IUser[] = (store) =>
  store.friends.allUsers

export const selectFriends: (store: RootState) => IFriend[] = (store) =>
  store.friends.friends

export const selectSended: (store: RootState) => IFriend[] = (store) =>
  store.friends.sended

export const selectReceived: (store: RootState) => IFriend[] = (store) =>
  store.friends.received

export const selectFriendsIsLoading: (store: RootState) => boolean = (store) =>
  store.friends.isLoading

export const selectFriendsError: (store: RootState) => string = (store) =>
  store.friends.error
