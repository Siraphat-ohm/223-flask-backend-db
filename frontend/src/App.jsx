import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx';
import LoginForm from './components/LoginForm.jsx';
import './App.css'

import TodoList from './components/TodoList.jsx'
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  const TODOLIST_API_URL = 'http://localhost:5000/api/todos/';
  const TODOLIST_LOGIN_URL = 'http://localhost:5000/api/login/';

  return (
    <>
          <a href="/about">About</a>
          &nbsp;|&nbsp;
          <a href="/login">Login</a>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <TodoList apiUrl={TODOLIST_API_URL} />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <h1>About</h1>
                <p>This is a simple todo list application built with React and Flask.</p>
                <a href="/">Back to Home</a>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <LoginForm loginUrl={TODOLIST_LOGIN_URL} />
            }
          />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
