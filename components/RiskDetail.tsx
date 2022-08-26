import { Ionicons } from "@expo/vector-icons";
import React, { useState, useContext } from "react";
import { Text, View, Switch, TextInput } from '../components/Themed';
import Colors from "../constants/Colors";
import { updateRiskLabel } from "../adaptors/DataAccess";
import Risk from "../entities/Risk";
import RiskStoreContext from "../store/RiskStore";
import RiskLevelBadge from "./RiskLevelBadge";
import { StyleSheet } from 'react-native';

const doNothing = () => { }

const debounce = (func: any, timeout = 300) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(null, args); }, timeout);
  };
}

const RiskDetail = ({ riskId }: { riskId: string }) => {

  const [editable, setEditable] = useState(false);
  const toggleEditable = () => setEditable(previousState => !previousState);

  const risk: Risk = useContext(RiskStoreContext).filter(r => r.id == riskId)[0]

  if (risk === undefined) {
    return <Text>Undefined</Text>
  }

  const changeLabelHandler = (label: string) => {
    debounce(updateRiskLabel)({ id: risk.id, label });
  }

  return (
    <View>
      <RiskLevelBadge level={risk.level} />
      <View style={styles.test}>
        <TextInput
          value={risk.label}
          onChangeText={editable ? changeLabelHandler : doNothing}
          multiline={true}
          numberOfLines={5}
          returnKeyLabel="done" />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,1)" />
      <View style={styles.bar}>
        <View style={styles.bar}>
          <Ionicons name="people" size={24} color="black" />
          <Text>Shared</Text>
        </View>
        <View style={styles.bar}>
          {editable ?
            <>
              <Ionicons name="lock-open" size={24} color="black" />
              <Text>Editable</Text>
            </>
            :
            <>
              <Ionicons name="lock-closed" size={24} color="black" />
              <Text>Write Protected</Text>
            </>
          }

          <Switch
            onValueChange={toggleEditable}
            value={editable}
          />
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
        <TextInput value={risk.mitigation} multiline={true} numberOfLines={5} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTwo}>Contingency</Text>
        <TextInput value={risk.contingency} multiline={true} numberOfLines={5} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionThree}>Impact</Text>
        <TextInput value={risk.impact} multiline={true} numberOfLines={5} />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,1)" />
    </View>
  )
}

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

export default RiskDetail;