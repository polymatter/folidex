import Risk from './entities/Risk'

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  RiskList: undefined;
  TabTwo: undefined;
};

export type RiskListTabParamList = {
  RiskListScreen: undefined;
  RiskDetailScreen: { risk: Risk};
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};