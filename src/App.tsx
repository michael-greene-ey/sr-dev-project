import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import HealthContent from "./pages/HealthContent";
import { Routes, Route } from "react-router-dom";
import MealPlan from "./pages/MealPlan";
import ToDoList from "./pages/ToDoList";
import Workouts from "./pages/Workouts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/health-content" element={<HealthContent />} />
        <Route path="/to-do" element={<ToDoList />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/meal-plan" element={<MealPlan />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
