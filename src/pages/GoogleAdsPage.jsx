import React, { useState } from "react";
import GoogleCopies from "../components/googleads/GoogleCopies";
import WorkingCopies from "../components/googleads/WorkingCopies";

import GoogleMailed from "../components/googleads/GoogleMailed";
import Googleads from "../components/googleads/GoogleTitle";

function GoogleAdsPage() {
  const [currScreen, setCurrScreen] = useState(1);
  switch (currScreen) {
    case 1:
      return <GoogleCopies setCurrScreen={setCurrScreen} />;
    case 2:
      return <WorkingCopies setCurrScreen={setCurrScreen} />;
      
      case 3:
      return <Googleads setCurrScreen={setCurrScreen} />;
      case 4:
        return <GoogleMailed setCurrScreen={setCurrScreen} />;
    
    default:
      return <GoogleCopies setCurrScreen={setCurrScreen} />;
  }
}

export default GoogleAdsPage