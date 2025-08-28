import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProtectedRoute from "./ProtectedRouter";
import { AuthProvider } from "../Contexts/Auth/AuthContext";

const LockScreen = lazy(() => import("../Pages/LockScreen/LockScreen"));
const AuthForm = lazy(() => import("../Components/LockScreen/AuthForm"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));
import OGAnimationLoading from "../Components/Animations/OGAnimationLoading";

export default function Router() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<OGAnimationLoading />}>
          <Routes>
            <Route
              path="/login"
              element={
                <div
                  className="position-relative overflow-hidden vh-100"
                  style={{ backgroundColor: "#111130" }}
                >
                  <AnimatePresence mode="wait">
                    {!unlocked ? (
                      <LockScreen onUnlock={() => setUnlocked(true)} />
                    ) : (
                      <motion.div
                        key="auth-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="postiion-absolute w-100 h-100"
                      >
                        <AuthForm />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}
