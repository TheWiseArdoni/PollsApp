import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './LoginPage.jsx'
import PollsPage from './PollsPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Link to app: <a href="/app">App</a></div>,
  },

  {
    path: "app",
    element: <App/>
  },

  {
    path: "login",
    element: <LoginPage/>
  },

  {
    path: "polls",
    element: <PollsPage/>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
