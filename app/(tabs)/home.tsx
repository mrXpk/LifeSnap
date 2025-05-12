import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import NatureBackground from '../components/NatureBackground';
import SettingsMenu from '../components/SettingsMenu';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 5) return 'Good Night';
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

export default function HomeScreen() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [search, setSearch] = useState('');
  const greeting = getGreeting();

  return (
    <NatureBackground>
      {/* Blur overlay for background */}
      <BlurView intensity={30} tint="light" style={StyleSheet.absoluteFill} />
      {/* App Name (top left, above menu) */}
      <Text style={styles.appName}>LifeSnap</Text>
      {/* Uneven stack (menu) icon */}
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => setIsSettingsVisible(true)}
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons name="menu-open" size={32} color="#4CAF50" />
      </TouchableOpacity>
      {/* Bell icon (top right) */}
      <TouchableOpacity style={styles.bellIcon} activeOpacity={0.7}>
        <MaterialCommunityIcons name="bell-ring-outline" size={28} color="#4CAF50" />
      </TouchableOpacity>
      {/* Greeting below menu icon */}
      <Text style={styles.greeting}>{greeting}, Explorer!</Text>
      {/* Search bar with adjustment icon, moved lower */}
      <View style={styles.searchRow}>
        <View style={styles.searchBarWrapper}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Search organisms, plants, animals..."
              value={search}
              onChangeText={setSearch}
              style={styles.searchInput}
              placeholderTextColor="#B26A00"
            />
            <TouchableOpacity style={styles.searchIcon}>
              <MaterialCommunityIcons name="magnify" size={22} color="#FF9800" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.adjustIcon}>
          <MaterialCommunityIcons name="tune-variant" size={24} color="#FF9800" />
        </TouchableOpacity>
      </View>
      <SettingsMenu isVisible={isSettingsVisible} onClose={() => setIsSettingsVisible(false)} />
    </NatureBackground>
  );
}

const styles = StyleSheet.create({
  appName: {
    position: 'absolute',
    top: 22,
    left: 24,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#388E3C',
    letterSpacing: 1.2,
    zIndex: 30,
    fontFamily: 'serif',
    textShadowColor: 'rgba(60,60,60,0.08)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  menuIcon: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 16,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  bellIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 16,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  greeting: {
    marginTop: 120,
    marginLeft: 32,
    fontSize: 28,
    fontWeight: '800',
    color: '#FF9800',
    letterSpacing: 0.5,
    zIndex: 10,
    fontFamily: 'serif',
    textShadowColor: 'rgba(255,255,255,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 18,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 24,
    zIndex: 10,
  },
  searchBarWrapper: {
    flex: 1,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.85)',
    elevation: 3,
    shadowColor: '#FF9800',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: '#FF9800',
    backgroundColor: 'transparent',
    height: 48,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 17,
    color: '#B26A00',
    fontWeight: '600',
    fontFamily: 'serif',
  },
  searchIcon: {
    padding: 4,
  },
  adjustIcon: {
    marginLeft: 10,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 12,
    padding: 8,
    elevation: 2,
  },
}); 