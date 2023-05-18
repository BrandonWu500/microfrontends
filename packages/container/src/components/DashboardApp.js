import React, { useRef, useEffect } from "react";
import { mount as dashboardMount } from "dashboard/DashboardApp";

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    dashboardMount(ref.current);
  }, []);

  return <div ref={ref} />;
};
export default DashboardApp;
