import React, { useState } from "react";
import { getRiskDetailList } from "../adaptors/DataAccess";
import Risk, { buildMakeRisk } from "../entities/Risk";

const RiskStoreContext = React.createContext<Risk[]>([] as Risk[])

export function RiskStore({ children }: { children: React.ReactNode }) {
  const [riskStore, setRiskStore] = useState<Risk[]>([] as Risk[])

  React.useEffect(() => {
    setRiskStore([]);
    getRiskDetailList()
      .then(d => d.json() as Promise<Risk[]>)
      .then(riskprops => {
        const makeRisk = buildMakeRisk({});
        return riskprops.map(riskProp => makeRisk(riskProp));
      })
      .then(setRiskStore);
  }, [])

  return (
    <RiskStoreContext.Provider value={riskStore}>
      {children}
    </RiskStoreContext.Provider>
  )
}

export default RiskStoreContext