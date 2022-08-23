import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { RiskLevel } from '../entities/Risk'

const HighRed = Colors.badgeLevels.High;
const MediumYellow = Colors.badgeLevels.Medium;
const LowGreen = Colors.badgeLevels.Low;

/**
 * 
 * Added a showIcon parameter for testing.
 * 
 * When running snapshot tests I get the following error: 
 * 
 * console.error
    Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
    
    Check the render method of `Icon`.
        at Icon (C:\repos\folidex\node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\lib\create-icon-set.js:78:36)
        at Icon (C:\repos\folidex\node_modules\@expo\vector-icons\build\createIconSet.js:71:36)
        at View
        at View (C:\repos\folidex\node_modules\react-native\jest\mockComponent.js:37:36)
        at View (C:\repos\folidex\components\Themed.tsx:66:21)
        at RiskLevelBadge (C:\repos\folidex\components\RiskLevelBadge.tsx:25:20)
 *
 * I found other people with similar errors eg. at https://github.com/expo/vector-icons/issues/143 and https://github.com/GeekyAnts/NativeBase/issues/2657 where the suggestion is to use mocks. However, when I use a line like `jest.mock('@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js', () => {
    return () => '';
});` nothing different seems to happen. The mock never appears to run and I still get the error.
 *
 * In desperation I am adding a showIcon to this component so that when rendered in a snapshot test it gets ignored, but when rendered in development or production it renders as normal.
 * 
 * @param showIcon 
 * @returns 
 */
const RiskLevelBadge = ({ showIcon = true, level }: { showIcon?: boolean, level: RiskLevel }) => {
  switch (level) {
    case 'High':
      return <View style={styles.bar}>
        {showIcon && <MaterialIcons name="dangerous" size={24} color={HighRed} />}
        <Text style={[styles.levelBadge, styles.levelBadgeHigh]}>High</Text>
      </View>
    case 'Medium':
      return <View style={styles.bar}>
        {showIcon && <MaterialIcons name="warning" size={24} color={MediumYellow} />}
        <Text style={[styles.levelBadge, styles.levelBadgeMedium]}>Medium</Text>
      </View>
    case 'Low':
      return <View style={styles.bar}>
        {showIcon && <MaterialCommunityIcons name="emoticon-happy-outline" size={24} color={LowGreen} />}
        <Text style={[styles.levelBadge, styles.levelBadgeLow]}>Low</Text>
      </View>
  }
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 10,
    minHeight: 30,
    // maxWidth: 310,
  },
  label: {
    display: 'flex',
    flexGrow: 10
  },
  levelBadge: {
    display: 'flex',
    flexShrink: 0,
    borderRadius: 15,
    fontSize: 12,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 30,
  },
  levelBadgeLow: {
    color: LowGreen,
  },
  levelBadgeMedium: {
    color: MediumYellow,
  },
  levelBadgeHigh: {
    color: HighRed,
  },
});

export default RiskLevelBadge
