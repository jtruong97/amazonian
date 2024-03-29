import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import LandingPage from '../components/LandingPage/LandingPage';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import CreateReview from '../components/CreateReview/CreateReview';
import UpdateReview from '../components/UpdateReview/UpdateReivew';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path:'/products/:productId',
        element: <ProductDetails />
      },
      {
        path:'/products/:productId/review/new',
        element: <CreateReview />
      },
      {
        path:'/products/:productId/review/:reviewId/edit',
        element: <UpdateReview />
      },
      {
        path:'*',
        element: <h1>Page Not Found</h1>
      }
    ],
  },
]);
