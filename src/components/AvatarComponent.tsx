import { Avatar } from '@readyplayerme/visage'
import { useSearchParams } from 'react-router-dom'

const AvatarComponent = () => {
  const [searchParams] = useSearchParams({ url: '' })
  const params = searchParams.get('url') || ''

  return (
    <section className='avatar-container'>
      <Avatar modelSrc={params} />
    </section>
  )
}
export default AvatarComponent
