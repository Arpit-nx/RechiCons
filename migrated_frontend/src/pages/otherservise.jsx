import React from "react";
import useServices from "../services/useServices";

export default function OtherServices() {
  const {
    services,
    loading,
    error,
  } = useServices();

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fff8ef] flex items-center justify-center">
        <p>Loading services...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#fff8ef] flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#4f2b12] p-10">

      <h1 className="text-4xl font-bold mb-10">
        Other Services
      </h1>

      {services.map((service) => (
        <div
          
          className="mb-10 p-6 border rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            {service.title}
          </h2>

          <p className="text-lg">
            {service.content}
          </p>

          <p className="mt-4 text-sm">
            ID: {service.id}
          </p>
        </div>
      ))}

    </main>
  );
}