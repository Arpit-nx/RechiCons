
import { useState } from "react";
import { User, Lock, X } from "lucide-react";
import { loginAdmin } from "../api/auth";

export default function AdminDialog({
  open = true,
  onClose,
  onLogin,
}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Don't render when dialog is closed
  if (!open) {
    return null;
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.username.trim()) {
      setError("Please enter your username.");
      return;
    }

    if (!form.password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      // Call FastAPI through Axios
      const response = await loginAdmin(
        form.username,
        form.password
      );

      console.log("Login response:", response);

      /*
       * Backend response:
       *
       * {
       *   success: true,
       *   message: "Login successful.",
       *   token: {
       *     access_token: "..."
       *   },
       *   user: {...}
       * }
       */

      const accessToken =
        response?.token?.access_token;

      if (!accessToken) {
        throw new Error(
          "Access token was not returned by the server."
        );
      }

      // Store JWT token
      localStorage.setItem(
        "access_token",
        accessToken
      );

      // Store user information
      if (response.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.user)
        );
      }

      console.log("Admin login successful.");

      // Notify parent component if provided
      if (onLogin) {
        onLogin(response);
      }

      // Close dialog
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Login error:", error);

      const backendError =
        error?.response?.data?.detail;

      setError(
        backendError ||
          error.message ||
          "Login failed. Please check your username and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
        <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

          {/* Header */}
          <div className="flex items-center justify-between border-b p-5">
            <h2 className="text-xl font-semibold">
              Admin Login
            </h2>

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-md p-1 transition hover:bg-gray-100 disabled:opacity-50"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6"
          >

            {/* Username */}
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

            {/* Password */}
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

            {/* Error */}
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Login button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>
        </div>
      </div>
    </>
  );
}
