import { Route, Routes as RouterRoutes } from "react-router-dom";
import BillCalculationContainer from "../containers/BillCalculationContainer";
import FarAwayContainer from "../containers/FarAwayContainer";
import HomeContainer from "../containers/HomeContainer";
import { ROUTE_PATH } from "../util/constants";
import NotFoundContainer from "../containers/NotFoundContainer";
import MainLayout from "../layouts/MainLayout";
import EatNSprintContainer from "../containers/EatNSplitContainer";

const indexRoutes = [
  {
    path: ROUTE_PATH.HOME,
    element: <HomeContainer />,
  },
  {
    path: ROUTE_PATH.FAR_AWAY,
    element: <FarAwayContainer />,
  },
  {
    path: ROUTE_PATH.BILL_CALCUATION,
    element: <BillCalculationContainer />,
  },
  {
    path: ROUTE_PATH.Eat_N_SPLIT,
    element: <EatNSprintContainer />,
  },
];

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<MainLayout />}>
        {indexRoutes.map((route, i) => {
          return <Route key={i} element={route.element} path={route.path} />;
        })}
        <Route path="*" element={<NotFoundContainer />} />
      </Route>
    </RouterRoutes>
  );
};
export default Routes;
