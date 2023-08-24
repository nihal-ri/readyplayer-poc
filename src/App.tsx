/* eslint-disable @typescript-eslint/no-explicit-any */
import { AvatarCreator } from '@readyplayerme/rpm-react-sdk'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const subdomain = import.meta.env.VITE_READY_PLAYER_SUBDOMAIN

export default function App() {
  const navigate = useNavigate()

  const handleOnAvatarExported = (url: string) => {
    console.log(`Avatar URL is: ${url}`)
  }

  const handleOnUserSet = (userId: string) => {
    console.log(`User ID is: ${userId}`)
  }

  useEffect(() => {
    const handleMessage = (event: any) => {
      const pattern = 'https://models.readyplayer.me/'
      const url = event.data as string

      if (url.startsWith(pattern)) {
        console.log('Found a model!')
        navigate(`/avatar?url=${url}`)
      }
    }

    window?.addEventListener('message', handleMessage)

    return () => {
      window?.removeEventListener('message', handleMessage)
    }
  }, [])
  return (
    <div className='app'>
      <div className='container'>
        <AvatarCreator
          subdomain={subdomain}
          onUserSet={handleOnUserSet}
          onAvatarExported={handleOnAvatarExported}
        />
      </div>
    </div>
  )
}
