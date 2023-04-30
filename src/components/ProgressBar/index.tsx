import { View } from 'react-native'

import { styles } from './styles'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useEffect } from 'react'

interface Props {
  total: number
  current: number
}

export function ProgressBar({ total, current }: Props) {
  const percentage = Math.round((current / total) * 100)

  const sharedProgress = useSharedValue(percentage)

  useEffect(() => {
    sharedProgress.value = withTiming(percentage)
  }, [current])

  const styledAnimated = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`,
    }
  })

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.progress, styledAnimated]} />
    </View>
  )
}
