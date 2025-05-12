import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

type ColorTuple = [string, string, ...string[]];

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 8) return 'sunrise';
  if (hour >= 8 && hour < 18) return 'day';
  if (hour >= 18 && hour < 20) return 'evening';
  return 'night';
}

const bgPalettes: Record<string, {
  gradient: ColorTuple;
  sun: string;
  hills: [string, string];
  clouds: boolean;
  moon: boolean;
}> = {
  sunrise: {
    gradient: ['#FFB347', '#FFD1B3', '#FFF2CC'],
    sun: '#FFD580',
    hills: ['#6C3483', '#512E5F'],
    clouds: true,
    moon: false,
  },
  day: {
    gradient: ['#AEEFFF', '#E0F7FA', '#FFFDE4'],
    sun: '#FFF176',
    hills: ['#388E3C', '#689F38'],
    clouds: true,
    moon: false,
  },
  evening: {
    gradient: ['#FFB347', '#FF8A65', '#B39DDB'],
    sun: '#FFEE58',
    hills: ['#6C3483', '#8D6E63'],
    clouds: true,
    moon: false,
  },
  night: {
    gradient: ['#23235B', '#3A3A6A', '#6C3483'],
    sun: '#fff', // will be moon
    hills: ['#2C2C54', '#474787'],
    clouds: false,
    moon: true,
  },
};

export default function NatureBackground({ children }: { children?: React.ReactNode }) {
  const timeOfDay = getTimeOfDay();
  const palette = bgPalettes[timeOfDay];

  return (
    <View style={styles.container}>
      {/* Dynamic Sky Gradient */}
      <LinearGradient
        colors={palette.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {/* Sun or Moon with glow */}
      <Svg style={styles.sunSvg} width={width} height={height * 0.5}>
        {palette.moon ? (
          <>
            <Circle
              cx={width / 2}
              cy={height * 0.22}
              r={40}
              fill="#fff"
              opacity={0.85}
            />
            <Circle
              cx={width / 2 + 15}
              cy={height * 0.22 - 10}
              r={12}
              fill={palette.gradient[0]}
              opacity={0.18}
            />
          </>
        ) : (
          <>
            <Ellipse
              cx={width / 2}
              cy={height * 0.22}
              rx={70}
              ry={70}
              fill={palette.sun}
              opacity={0.95}
            />
            {/* Sun glow rings */}
            <Ellipse
              cx={width / 2}
              cy={height * 0.22}
              rx={110}
              ry={110}
              fill={palette.sun}
              opacity={0.18}
            />
            <Ellipse
              cx={width / 2}
              cy={height * 0.22}
              rx={150}
              ry={150}
              fill={palette.sun}
              opacity={0.10}
            />
          </>
        )}
      </Svg>
      {/* Clouds */}
      {palette.clouds && (
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
      )}
      {/* Hills at the bottom */}
      <Svg style={styles.hillsSvg} width={width} height={height * 0.28}>
        <Path
          d={`M0,${height * 0.18} Q${width * 0.25},${height * 0.08} ${width * 0.5},${height * 0.18} T${width},${height * 0.18} V${height} H0 Z`}
          fill={palette.hills[0]}
          opacity={0.95}
        />
        <Path
          d={`M0,${height * 0.22} Q${width * 0.2},${height * 0.12} ${width * 0.5},${height * 0.22} T${width},${height * 0.22} V${height} H0 Z`}
          fill={palette.hills[1]}
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