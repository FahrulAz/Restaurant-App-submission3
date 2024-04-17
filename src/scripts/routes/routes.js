import Home from '../view/pages/home';
import Detail from '../view/pages/detail';
import Favourite from '../view/pages/favourite';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/favourites': Favourite,
};

export default routes;
