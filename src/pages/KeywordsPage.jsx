import React, { useState } from "react";
import Topkeywords from "../components/keywords/Topkeywords";
import WorkingKeywords from "../components/keywords/WorkingKeywords";
import TableKeywords from "../components/keywords/TableKeywords";

function KeywordsPage() {
  const [currScreen, setCurrScreen] = useState(1);
  switch (currScreen) {
    case 1:
      return <Topkeywords setCurrScreen={setCurrScreen} />;
    case 2:
      return <WorkingKeywords setCurrScreen={setCurrScreen} />;
    case 3:
      return <TableKeywords setCurrScreen={setCurrScreen}/>;
    
    default:
      return <Topkeywords setCurrScreen={setCurrScreen} />;
  }
}

export default KeywordsPage