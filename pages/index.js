import LoadingSpinner from "@/components/LoadingSpinner";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <HomePage />
    </>
  );
};

export default index;
