/**
 * This file represents a Business Entity in Bob Martins CLEAN architecture {@link https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html}
 * 
 * Responsible for defining the business rules relating to what a risk is.
 * - Types relating to risks are defined here and exported in the top-level types.tsx for other files to pickup
 * - Anything that affects the Risk should call a function here.
 */


/** 
 * The public interface for risks.
 * 
*/
export default interface Risk {
  getId: () => string;
  getLevel: () => RiskLevel;
  getLabel: () => string;
  getMitigation: () => string;
  getContingency: () => string;
  getImpact: () => string;
  getLikelihood: () => string;
  toJson: () => Readonly<RiskProps>;
}

export type RiskLevel = "Low" | "Medium" | "High";

export interface RiskProps {
  id: string;
  level: RiskLevel;
  label: string;
  mitigation: string;
  contingency: string;
  impact: string;
  likelihood: string;
}

export type RiskSummaryProps = Pick<RiskProps, 'level' | 'label'>

export type RiskSummary = Pick<Risk, 'getLevel' | 'getLabel'> & { toJson: () => Readonly<RiskSummaryProps> }

export interface BuildMakeRiskProps {
}

export function buildMakeRisk({ }: BuildMakeRiskProps) {
  /** Responsibility for creating the only function that can create risks. arguments are dependencies to be injected in */
  return function makeRisk({ id, level, label, mitigation, contingency, impact, likelihood }: RiskProps): Readonly<Risk> {
    // validation of properties throwing exceptions if invalid
    return Object.freeze({
      getId: () => id,
      getLevel: () => level,
      getLabel: () => label,
      getMitigation: () => mitigation,
      getContingency: () => contingency,
      getImpact: () => impact,
      getLikelihood: () => likelihood,
      toJson: () => Object.freeze({ id, level, label, mitigation, contingency, impact, likelihood }),
    })
  }
}

export interface BuildMakeRiskSummaryProps {
}

export function buildMakeRiskSummary({ }: BuildMakeRiskSummaryProps) {
  return function makeRiskSummary({ level, label }: RiskSummaryProps): Readonly<RiskSummary> {
    return Object.freeze({
      getLevel: () => level,
      getLabel: () => label,
      toJson: () => Object.freeze({ level, label })
    })
  }
}
export interface BuildMakeNewRiskProps extends BuildMakeRiskProps {
  Id: { generateId: () => string }
}

export function buildMakeNewRisk({ Id, ...others }: BuildMakeNewRiskProps) {
  return function makeNewRisk(riskProps: Omit<RiskProps, 'id'>): Readonly<Risk> {
    const makeRisk = buildMakeRisk(others);
    const id = Id.generateId();
    return makeRisk({ ...riskProps, id });
  }
}