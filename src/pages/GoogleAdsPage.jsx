import React, { useState } from "react";
import GoogleCopies from "../components/googleads/GoogleCopies";
import WorkingCopies from "../components/googleads/WorkingCopies";
import Googleads from "../components/googleads";

function GoogleAdsPage() {
  const [currScreen, setCurrScreen] = useState(1);
  switch (currScreen) {
    case 1:
      return <GoogleCopies setCurrScreen={setCurrScreen} />;
    case 2:
      return <WorkingCopies setCurrScreen={setCurrScreen} />;
    case 3:
      return <Googleads setCurrScreen={setCurrScreen}/>;
    default:
      return <GoogleCopies setCurrScreen={setCurrScreen} />;
  }
}

export default GoogleAdsPage