import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Ellipse, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function NatureBackground({ children }: { children?: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {/* Sky Gradient */}
      <LinearGradient
        colors={["#FFB347", "#FFE29A", "#E6D3B3"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {/* Sun with glow */}
      <Svg style={styles.sunSvg} width={width} height={height * 0.5}>
        <Ellipse
          cx={width / 2}
          cy={height * 0.22}
          rx={70}
          ry={70}
          fill="#FFD580"
          opacity={0.95}
        />
        {/* Sun glow rings */}
        <Ellipse
          cx={width / 2}
          cy={height * 0.22}
          rx={110}
          ry={110}
          fill="#FFD580"
          opacity={0.18}
        />
        <Ellipse
          cx={width / 2}
          cy={height * 0.22}
          rx={150}
          ry={150}
          fill="#FFD580"
          opacity={0.10}
        />
      </Svg>
      {/* Clouds */}
      <Svg style={styles.cloudSvg} width={width} height={height * 0.3}>
        {/* Left cloud */}
        <Ellipse cx={width * 0.18} cy={height * 0.13} rx={38} ry={18} fill="#fff" opacity={0.7} />
        <Ellipse cx={width * 0.23} cy={height * 0.13} rx={22} ry={12} fill="#fff" opacity={0.6} />
        {/* Right cloud */}
        <Ellipse cx={width * 0.8} cy={height * 0.09} rx={32} ry={15} fill="#fff" opacity={0.7} />
        <Ellipse cx={width * 0.85} cy={height * 0.09} rx={18} ry={10} fill="#fff" opacity={0.6} />
        {/* Center cloud */}
        <Ellipse cx={width * 0.5} cy={height * 0.18} rx={30} ry={13} fill="#fff" opacity={0.7} />
        <Ellipse cx={width * 0.54} cy={height * 0.18} rx={18} ry={9} fill="#fff" opacity={0.6} />
      </Svg>
      {/* Hills at the bottom */}
      <Svg style={styles.hillsSvg} width={width} height={height * 0.28}>
        <Path
          d={`M0,${height * 0.18} Q${width * 0.25},${height * 0.08} ${width * 0.5},${height * 0.18} T${width},${height * 0.18} V${height} H0 Z`}
          fill="#6C3483"
          opacity={0.95}
        />
        <Path
          d={`M0,${height * 0.22} Q${width * 0.2},${height * 0.12} ${width * 0.5},${height * 0.22} T${width},${height * 0.22} V${height} H0 Z`}
          fill="#512E5F"
          opacity={0.85}
        />
      </Svg>
      {/* Children (content) */}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFE29A',
  },
  sunSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  cloudSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  hillsSvg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 3,
  },
  content: {
    flex: 1,
    zIndex: 10,
    position: 'relative',
  },
}); 