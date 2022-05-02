import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Adminlayout from "./pages/AdminLayout";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./auth/privateRoute";
import PrivatePage from "./pages/PrivatePage";
import Private2 from "./pages/Private2";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout />}></Route>
          <Route
            element={
              <PrivateRoute>
                <Adminlayout />
              </PrivateRoute>
            }
          >
            <Route
              path="admin/manager"
              element={
                <PrivateRoute roles={["user"]}>
                  <Private2 />
                </PrivateRoute>
              }
            />
            <Route path="private" element={<PrivatePage />} />
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<p>Not Found</p>}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
