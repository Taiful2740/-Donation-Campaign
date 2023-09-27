import { useEffect, useState } from "react";

const GetComponent = () => {
  const [campaignsData, setCampaignsData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setCampaignsData(data));
  }, []);

  return { campaignsData };
};
export default GetComponent;
