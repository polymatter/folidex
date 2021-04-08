import { RouteProp } from '@react-navigation/core';
import React from 'react'

import { Text, View, Button, TextInput } from '../components/Themed';
import RiskLevelBadge from '../components/RiskLevelBadge';
import { RiskListTabParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors'

const RiskDetailScreen = ({ route: { params: { risk } } }: { route: RouteProp<RiskListTabParamList, 'RiskDetailScreen'> }) => {

  return (
    <View>
      <View style={styles.bar}>
        <RiskLevelBadge level={risk.getLevel()} />
      </View>
      <View style={styles.test}>
        <TextInput value={risk.getLabel()} multiline={true} numberOfLines={5} returnKeyLabel="done" />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,1)" />
      <View style={styles.bar}>
        <View style={styles.bar}>
          <Ionicons name="people" size={24} color="black" />
          <Text>Shared</Text>
        </View>
        <View style={styles.bar}>
          <Ionicons name="lock-closed" size={24} color="black" />
          <Text>Write Protected</Text>
        </View>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,1)" />
      <View style={styles.bar}>
        <View style={[styles.bar, styles.sectionOne]}>
          <Text>Mitigation</Text>
        </View>
        <View style={[styles.bar, styles.sectionTwo]}>
          <Text>Contingency</Text>
        </View>
        <View style={[styles.bar, styles.sectionThree]}>
          <Text>Impact</Text>
        </View>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,1)" />
      <View style={styles.section}>
        <Text style={styles.sectionOne}>Mitigation</Text>
        <TextInput value={risk.getMitigation()} multiline={true} numberOfLines={5} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTwo}>Contingency</Text>
        <TextInput value={risk.getContingency()} multiline={true} numberOfLines={5} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionThree}>Impact</Text>
        <TextInput value={risk.getImpact()} multiline={true} numberOfLines={5} />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,1)" />
    </View>
  )
}

export default RiskDetailScreen

const styles = StyleSheet.create({
  test: {
    paddingLeft: 30,
  },
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
  section: {
    padding: 10,
  },
  sectionOne: {
    backgroundColor: Colors.sectionColors[0],
    borderRadius: 20,
    paddingLeft: 15,
  },
  sectionTwo: {
    backgroundColor: Colors.sectionColors[1],
    borderRadius: 20,
    paddingLeft: 15,
  },
  sectionThree: {
    backgroundColor: Colors.sectionColors[0],
    borderRadius: 20,
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
    width: '100%',
  },
});