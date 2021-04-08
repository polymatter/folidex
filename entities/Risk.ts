/**
 * This file represents a Business Entity in Bob Martins CLEAN architecture {@link https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html}
 * 
 * Responsible for defining the business rules relating to what a risk is.
 * - Types relating to risks are defined here and exported in the top-level types.tsx for other files to pickup
 * - Anything that affects the Risk should call a function here.
 */


/** The public interface for risks.
 * 
 * Should only be created by makeRisk and should be immutable 
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
  toJson: () => RiskProps;
}

/** The risk levels */
export type RiskLevel = "Low" | "Medium" | "High";

/** The properties that make up a risk.  */
export interface RiskProps {
  id: string;
  level: RiskLevel;
  label: string;
  mitigation: string;
  contingency: string;
  impact: string;
  likelihood: string;
}

/* The risk */
export type RiskSummaryProps = Pick<RiskProps, 'level' | 'label'>

export type RiskSummary = Pick<Risk, 'getLevel' | 'getLabel'> & { toJson: () => RiskSummaryProps }

export function buildMakeRisk({ }) {
  /** Responsibility for creating the only function that can create risks. arguments are dependencies to be injected in */
  return function makeRisk({ id, level, label, mitigation, contingency, impact, likelihood }: RiskProps): Risk {
    return Object.freeze({
      getId: () => id,
      getLevel: () => level,
      getLabel: () => label,
      getMitigation: () => mitigation,
      getContingency: () => contingency,
      getImpact: () => impact,
      getLikelihood: () => likelihood,
      toJson: () => ({ id, level, label, mitigation, contingency, impact, likelihood }),
    })
  }
}

export function buildMakeRiskSummary({ }) {
  return function makeRiskSummary({ level, label }: RiskSummaryProps): RiskSummary {
    return Object.freeze({
      getLevel: () => level,
      getLabel: () => label,
      toJson: () => ({ level, label })
    })
  }
}