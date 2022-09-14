import { Image, Pressable, PressableProps, StyleSheet } from 'react-native';

export default function ({ onPress, ...props }: PressableProps) {
  return (
    <Pressable {...props} onPress={onPress}>
      <Image source={require('../assets/images/SignInWithGoogle.png')} style={styles.image} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 38
  }

})