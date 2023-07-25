import './App.css';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import ZLanding from './pages/ZLanding';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path="/zland" element={<ZLanding/>} />
      {/* <Route path="/Contact" element={<Contact/>} />
      <Route path="/Setup/:setupid" element={<SingleSetup/>} /> */}
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
