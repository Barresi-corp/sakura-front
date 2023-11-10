import { useAppSelector } from '@src/hooks/store-hooks'
import { selectUser } from '@src/store/reducers/profileInfo/selectors'
import React, { useEffect, useState } from 'react'
import type socketio from 'socket.io-client'
import { SocketContext, getSocket } from './socket-context'

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<ReturnType<typeof socketio> | null>(null)
  const { id } = useAppSelector(selectUser)

  useEffect(() => {
    if (id) {
      setSocket(getSocket(id))
    } else {
      setSocket(null)
    }
  }, [id])

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}
