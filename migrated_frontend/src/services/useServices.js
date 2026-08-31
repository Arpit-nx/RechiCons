import { useEffect, useState } from "react";

import {
  getServices,
} from "../api/servicesApi";


export default function useServices() {

  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  const fetchServices = async () => {

    try {

      setLoading(true);

      setError(null);

      const data = await getServices();

      setServices(data);

    } catch (err) {

      console.error(
        "Failed to fetch services:",
        err
      );

      setError(
        err.response?.data?.detail ||
        "Failed to load services."
      );

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    fetchServices();

  }, []);


  return {
    services,
    loading,
    error,
    refetch: fetchServices,
  };
}