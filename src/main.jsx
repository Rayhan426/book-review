
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routs from './Components/Routs'
import Error from './Components/Error/Error'
import Home from './Components/Pages/Home'
import ListedBooks from './Components/ListedBooks'
import PageToRead from './Components/PageToRead'
import About from './Components/About'
import BookDetails from './Components/BookDetails/BookDetails'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Routs></Routs>,
    errorElement: <Error></Error>,

    children:[
      {
        path: '/',
        element: <Home></Home>
      },
  
      {
        path: '/',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('../books.json')
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('../books.json')
      },
      {
        path: '//page-to-read',
        element: <PageToRead></PageToRead>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}></RouterProvider>

)
