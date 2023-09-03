import HomeSections from "@/components/HomeSections";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <HomeSections />
    </>
  );
};

export default HomePage;
