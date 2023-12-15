import DashBoard from "./components/dashboardpage/dashboard";
import Login from "./components/loginpage/login";
import StartQuiz from "./components/quizapp/quizapp.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./components/routerpage/router";
import { HistoryPage } from "./components/historypage/history";
import LeaderBoardPage from "./components/leaderboardpage/leaderboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    // path: "/signup",
    // element: <SignIn />,
  },
  {
    path: "/components",
    element: <Routes />,
    children: [
      {
        path: "/components/dashboardpage",
        element: <DashBoard />,
      },
      {
        path: "/components/historypage",
        element: <HistoryPage />,
      },
      {
        path: "/components/leaderboardpage",
        element: <LeaderBoardPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
