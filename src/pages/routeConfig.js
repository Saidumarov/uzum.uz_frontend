import AboutPage from "./AboutPage";
import CartPage from "./CartPage";
import CategoryPage from "./CategoryPage";
import CheckoutPage from "./CheckoutPage";
import Hompage from "./HomPage";
import NotFoutPage from "./NotFound";
import { SignInRoute, ProfileRoute, AccountRoute } from "./Route/index";
import WishesPage from "./WishesPage";
export const routes = [
  {
    id: 1,
    path: "/",
    element: <Hompage />,
  },
  {
    id: 2,
    path: "/uzum/product/:id",
    element: <AboutPage />,
  },
  {
    id: 3,
    path: "/signup",
    element: <SignInRoute />,
  },
  {
    id: 4,
    path: "/profil",
    element: <ProfileRoute />,
  },
  {
    id: 5,
    path: "/account",
    element: <AccountRoute />,
  },
  {
    id: 6,
    path: "/cart",
    element: <CartPage />,
  },
  {
    id: 7,
    path: "/wishes",
    element: <WishesPage />,
  },
  {
    id: 8,
    path: "*",
    element: <NotFoutPage />,
  },
  {
    id: 9,
    path: "/search",
    element: <CategoryPage />,
  },
  {
    id: 9,
    path: "/category/:elemnt",
    element: <CategoryPage />,
  },
  {
    id: 10,
    path: "/checkout",
    element: <CheckoutPage />,
  },
];
