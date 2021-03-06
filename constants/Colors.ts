const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const lightColor = '#fff';
const darkColor = '#000';

export default {
  light: {
    text: darkColor,
    background: lightColor,
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: lightColor,
    background: darkColor,
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  sectionColors: [
    '#DEB789',
    '#AFC09D'
  ],
  badgeLevels: {
    High: '#dc3545',
    Medium: '#efa73c',
    Low: '#29c338'
  }
};
