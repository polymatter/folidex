export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RiskListParamList = {
  RiskListScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export const enum RiskLevelEnum {
  Low,
  Medium,
  High,
}

export type RiskLevel = keyof typeof RiskLevelEnum;

export type RiskDetail = {
  id: string;
  level: RiskLevel;
  label: string;
  mitigation: string;
  contingency: string;
  impact: string;
  likelihood: string;
}