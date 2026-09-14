
import { useState } from "react";
import { User, Lock, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../api/auth";

export default function AdminDialog({
  open = true,
  onClose,
  onLogin,
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) {
    return null;
  }

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // =========================
  // LOGIN
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Validate username
    if (!form.username.trim()) {
      setError("Please enter your username.");
      return;
    }

    // Validate password
    if (!form.password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      // =========================
      // CALL BACKEND
      // =========================
      const response = await loginAdmin(
        form.username,
        form.password
      );

      console.log("Login response:", response);

      // =========================
      // GET ACCESS TOKEN
      // =========================
      const accessToken =
        response?.token?.access_token;

      if (!accessToken) {
        throw new Error(
          "Access token was not returned by the server."
        );
      }

      // =========================
      // SAVE TOKEN
      // =========================
      localStorage.setItem(
        "access_token",
        accessToken
      );

      // =========================
      // SAVE USER
      // =========================
      if (response?.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.user)
        );
      }

      console.log("Admin login successful.");

      // =========================
      // CALLBACK
      // =========================
      if (onLogin) {
        onLogin(response);
      }

      // =========================
      // CLOSE DIALOG
      // =========================
      if (onClose) {
        onClose();
      }

      // =========================
      // GO TO HOME PAGE
      // =========================
      navigate("/");

    } catch (error) {
      console.error("Login error:", error);

      // =========================
      // BACKEND ERROR
      // =========================
      const backendError =
        error?.response?.data?.detail;

      setError(
        backendError ||
          error?.message ||
          "Login failed. Please check your username and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =========================
          BACKDROP
      ========================== */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
      />

      {/* =========================
          DIALOG
      ========================== */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
        <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

          {/* =========================
              HEADER
          ========================== */}
          <div className="flex items-center justify-between border-b p-5">

            <h2 className="text-xl font-semibold">
              Admin Login
            </h2>

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-md p-1 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <X size={20} />
            </button>

          </div>

          {/* =========================
              FORM
          ========================== */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6"
          >

            {/* =========================
                USERNAME
            ========================== */}
            <div>

              <label className="mb-2 block text-sm font-medium">
                Username
              </label>

              <div className="flex items-center rounded-lg border px-3 focus-within:border-black">

                <User
                  size={18}
                  className="text-gray-500"
                />

                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="w-full p-3 outline-none"
                  disabled={loading}
                  autoComplete="username"
                />

              </div>

            </div>

            {/* =========================
                PASSWORD
            ========================== */}
            <div>

              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <div className="flex items-center rounded-lg border px-3 focus-within:border-black">

                <Lock
                  size={18}
                  className="text-gray-500"
                />

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full p-3 outline-none"
                  disabled={loading}
                  autoComplete="current-password"
                />

              </div>

            </div>

            {/* =========================
                ERROR
            ========================== */}
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* =========================
                LOGIN BUTTON
            ========================== */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

        </div>
      </div>
    </>
  );
}
