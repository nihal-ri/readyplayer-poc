import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import AvatarComponent from '../components/AvatarComponent'

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={
            <Suspense fallback={<></>}>
              <App />
            </Suspense>
          }
        />
        <Route
          path={'/avatar'}
          element={
            <Suspense fallback={<></>}>
              <AvatarComponent />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteComponent
