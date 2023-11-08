import { useEffect, type FC } from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers, selectReceived } from '@src/store/reducers/friends/selectors'
import { getReceivedThunk } from '@src/store/reducers/friends/async-thunks'
import { selectUser, selectUserStatus } from '@src/store/reducers/profileInfo/selectors'
import FriendsCard from '../../friends-card/friends-card'
import { type IBaseTabProps } from '@src/types/props'
import { filterRequests } from '@src/utils/friends/filters'
import { AuthStatus } from '@src/types/api'

interface IReceivedTabProps extends IBaseTabProps {}

const ReceivedTab: FC<IReceivedTabProps> = ({ search }) => {
  const dispatch = useAppDispatch()
  const received = useAppSelector(selectReceived)
  const users = useAppSelector(selectAllUsers)
  const status = useAppSelector(selectUserStatus)
  const { id: currentId } = useAppSelector(selectUser)

  useEffect(() => {
    if (status === AuthStatus.authorized) dispatch(getReceivedThunk())
  }, [status])

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {received
          .filter((item) => filterRequests(users, Number(currentId), item, search))
          .map((friend, index) => {
            const dataId =
              Number(currentId) === friend.fromId ? friend.toId : friend.fromId

            return (
              <FriendsCard
                key={index}
                type='requests'
                id={Number(dataId)}
                isMine={Number(dataId) === Number(currentId)}
              />
            )
          })}
      </div>
      {received?.length < 1 ? (
        <span className='text-lg flex justify-center'>Здесь пока ничего нет</span>
      ) : null}
    </>
  )
}

export default ReceivedTab
