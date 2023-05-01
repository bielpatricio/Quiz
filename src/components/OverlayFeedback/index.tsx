import { Canvas, Rect, BlurMask } from '@shopify/react-native-skia'
import { useWindowDimensions } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { THEME } from '../../styles/theme'
import { useEffect } from 'react'

const STATUS = [
  'TRANSPARENT',
  THEME.COLORS.BRAND_LIGHT,
  THEME.COLORS.DANGER_LIGHT,
]

type Props = {
  status: number
}

export function OverlayFeedback({ status }: Props) {
  const opacity = useSharedValue(0)
  const color = STATUS[status]

  useEffect(() => {
    opacity.value = withSequence(
      withTiming(1, { duration: 400, easing: Easing.bounce }),
      withTiming(0),
    )
  }, [status])

  const styleAnimated = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    }
  })

  const { width, height } = useWindowDimensions()
  return (
    <Animated.View
      style={[{ height, width, position: 'absolute' }, styleAnimated]}
    >
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height} color={color}>
          <BlurMask blur={50} style="inner" />
        </Rect>
      </Canvas>
    </Animated.View>
  )
}
