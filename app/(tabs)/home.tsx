import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import SettingsMenu from '../components/SettingsMenu';

const exploreCategories = [
  { key: 'animals', label: 'Animals', icon: 'paw', color: '#FFB347' },
  { key: 'plants', label: 'Plants', icon: 'leaf', color: '#7ED957' },
  { key: 'insects', label: 'Insects', icon: 'ladybug', color: '#FF6961' },
  { key: 'marine', label: 'Marine', icon: 'fish', color: '#6EC6FF' },
  { key: 'fungi', label: 'Fungi', icon: 'mushroom', color: '#B39DDB' },
];

export default function HomeScreen() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setIsSettingsVisible(true)}>
          <MaterialCommunityIcons name="cog" size={28} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="notifications-active" size={28} color="#E6B800" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <Text style={styles.greeting}>Good Morning, Pratap</Text>

        {/* Search Bar */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Search..."
              value={search}
              onChangeText={setSearch}
              style={styles.searchInput}
              placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.searchIcon}>
              <Feather name="search" size={20} color="#222" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.filterIcon}>
            <MaterialCommunityIcons name="tune-variant" size={24} color="#222" />
          </TouchableOpacity>
        </View>

        {/* Explore Section */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Explore</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.exploreGrid}>
          {exploreCategories.map((cat) => (
            <TouchableOpacity key={cat.key} style={[styles.categoryCard, { backgroundColor: cat.color }]}> 
              <MaterialCommunityIcons name={cat.icon} size={32} color="#fff" style={{ marginBottom: 6 }} />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Animals Section */}
        <Text style={styles.sectionTitle}>Animals</Text>
        <View style={styles.cardRow}>
          {[1, 2, 3].map((item) => (
            <Card key={item} style={styles.imageCard}>
              <Card.Cover source={{ uri: 'https://picsum.photos/100/70' }} style={styles.cardImage} />
            </Card>
          ))}
        </View>

        {/* Padding for bottom nav */}
        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Settings Menu */}
      <SettingsMenu isVisible={isSettingsVisible} onClose={() => setIsSettingsVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAF8',
    paddingTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 18,
    fontFamily: 'serif',
    color: '#222',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 18,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#222',
  },
  searchIcon: {
    padding: 4,
  },
  filterIcon: {
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    elevation: 2,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#222',
  },
  viewAll: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  exploreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginHorizontal: 20,
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  categoryLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'serif',
  },
  cardRow: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  imageCard: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 1,
  },
  cardImage: {
    height: 70,
    borderRadius: 12,
  },
}); 