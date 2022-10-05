import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import NotFound from './components/NotFound/NotFound';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { index: true, element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        {
          path: '/products',
          loader: async () => {
            return fetch('products.json');
          },
          element: <Products></Products>
        },
        { path: '/about', element: <About></About> },
      ]
    },
    { path: '*', element: <NotFound></NotFound> }

  ])
  return (
    <div className="App">

      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
