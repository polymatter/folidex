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
  RiskDetailScreen: { risk: Risk}; // TODO: Replace with sending an ID and lookup on detail screen from a global store see https://reactnavigation.org/docs/params#what-should-be-in-params
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};