import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TaskBoard from './components/TaskBoard';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    completed: []
  });

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleAddTask = (newTask) => {
    setTasks(prev => ({
      ...prev,
      todo: [...prev.todo, { ...newTask, id: Date.now() }]
    }));
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar onLogout={() => setUser(null)} />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home tasks={tasks} />} />
            <Route path="/tasks" element={<TaskBoard tasks={tasks} setTasks={setTasks} />} />
            <Route path="/create-task" element={<AddTaskForm onAddTask={handleAddTask} />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 