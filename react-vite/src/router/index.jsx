import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import LandingPage from '../components/LandingPage/LandingPage';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import CreateReview from '../components/CreateReview/CreateReview';
import UpdateReview from '../components/UpdateReview/UpdateReivew';
import Carts from '../components/Carts/Carts';
import Categories from '../components/Categories/Categories';
import UserReviews from '../components/UserReviews/UserReviews';

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
        path:'/carts',
        element: <Carts />
      },
      {
        path: '/products/categories/:category',
        element: <Categories />
      },
      {
        path: '/userReviews',
        element: <UserReviews />
      },
      {
        path:'*',
        element: <h1>Page Not Found</h1>
      }
    ],
  },
]);
