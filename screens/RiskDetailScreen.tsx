import React, { useContext, useState } from 'react'

import { Text, View, Switch, TextInput } from '../components/Themed';
import RiskLevelBadge from '../components/RiskLevelBadge';
import { RootTabScreenProps } from '../types/navigation';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors'
import { updateRiskLabel } from '../adaptors/DataAccess';
import Risk from '../entities/Risk';
import RiskStoreContext from '../store/RiskStore';
  
const doNothing = () => {  }

// using homecooked debounce because I can't be bothered to find a library right now, but it would probably be overwhelming to send the update on every single keystroke. Not sure its worth making an issue out of this unless an issue becomes apparent. YAGNI (on the better 3rd party debounce)
const debounce = (func: any, timeout = 300) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(null, args); }, timeout);
  };
}

const RiskDetailScreen = ({ route: { params: { riskId } } } : RootTabScreenProps<'Risk Detail'>) => {

  const [editable, setEditable] = useState(false);
  const toggleEditable = () => setEditable(previousState => !previousState);
  
  const risk : Risk = useContext(RiskStoreContext).filter(r => r.id == riskId)[0]

  if (risk === undefined) {
    return <Text>Undefined</Text>
  }

  const changeLabelHandler = (label: string) => {
    debounce(() => updateRiskLabel({ id: risk.id, label }))();
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