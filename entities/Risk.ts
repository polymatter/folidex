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
  id: string;
  level: RiskLevel;
  label: string;
  mitigation: string;
  contingency: string;
  impact: string;
  likelihood: string;
}

export type RiskLevel = "Low" | "Medium" | "High";

export type RiskSummary = Pick<Risk, 'level' | 'label'>

export interface BuildMakeRiskProps {
}

export function buildMakeRisk({ }: BuildMakeRiskProps) {
  /** Responsibility for creating the only function that can create risks. arguments are dependencies to be injected in */
  return function makeRisk({ id, level, label, mitigation, contingency, impact, likelihood }: Risk): Readonly<Risk> {
    // validation of properties throwing exceptions if invalid
    return Object.freeze({
      id, level, label, mitigation, contingency, impact, likelihood 
    })
  }
}

export interface BuildMakeRiskSummaryProps {
}

export function buildMakeRiskSummary({ }: BuildMakeRiskSummaryProps) {
  return function makeRiskSummary({ level, label }: RiskSummary): Readonly<RiskSummary> {
    return Object.freeze({
      level, label
    })
  }
}
export interface BuildMakeNewRiskProps extends BuildMakeRiskProps {
  Id: { generateId: () => string }
}

export function buildMakeNewRisk({ Id, ...others }: BuildMakeNewRiskProps) {
  return function makeNewRisk(riskProps: Omit<Risk, 'id'>): Readonly<Risk> {
    const makeRisk = buildMakeRisk(others);
    const id = Id.generateId();
    return makeRisk({ ...riskProps, id });
  }
}