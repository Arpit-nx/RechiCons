
"use client";

import { useState } from "react";
import { User, Lock, X } from "lucide-react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function AdminDialog({ onClose }) {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        {
          username,
          password,
        }
      );

      const data = response.data;

      // Update authentication context
      // Context will also store the token and admin data
      login(data);

      // Close dialog
      onClose?.();

      // Go back to homepage
      window.location.href = "/";

    } catch (error) {
      console.log(error.response);

      setError(
        error.response?.data?.detail ||
        "Invalid username or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="fixed inset-0 flex items-center justify-center p-5">
        <div className="z-50 w-full max-w-md rounded-xl bg-white shadow-xl">

          {/* Header */}
          <div className="flex items-center justify-between border-b p-5">
            <h2 className="text-xl font-semibold">
              Admin Login
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1 hover:bg-gray-100"
            >
              <X />
            </button>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleLogin}
            className="space-y-5 p-6"
          >
            {/* Username */}
            <div>
              <label className="mb-2 block">
                Username
              </label>

              <div className="flex items-center rounded-lg border px-3">
                <User
                  size={18}
                  className="text-gray-500"
                />

                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  placeholder="Enter username"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block">
                Password
              </label>

              <div className="flex items-center rounded-lg border px-3">
                <Lock
                  size={18}
                  className="text-gray-500"
                />

                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter password"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-neutral-800 disabled:opacity-50"
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

