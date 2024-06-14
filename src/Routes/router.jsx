import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import TaskList from "../Pages/TaskList";
import AddTask from "../Pages/AddTask";
import EditTask from "../Pages/EditTask";
import TaskDetails from "../Components/TaskDetails/TaskDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <SignIn />
            },
            {
                path: "/register",
                element: <SignUp />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: (
                    <PrivateRouter>
                        <Dashboard />
                    </PrivateRouter>
                ),
            },
            {
                path: "task-list",
                element: (
                    <PrivateRouter>
                        <TaskList />
                    </PrivateRouter>
                ),
            },
            {
                path: "add-task",
                element: (
                    <PrivateRouter>
                        <AddTask />
                    </PrivateRouter>
                ),
            },
            {
                path: "task-list/edit/:id",
                element: (
                  <PrivateRouter>
                    <EditTask />
                  </PrivateRouter>
                ),
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/allTasks/${params.id}`),
              },
            {
                path: "task-list/:id",
                element: (
                  <PrivateRouter>
                    <TaskDetails />
                  </PrivateRouter>
                ),
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/allTasks/${params.id}`),
              }
        ]
    }
])