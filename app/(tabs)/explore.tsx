import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Searchbar, Text } from 'react-native-paper';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search organisms..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView style={styles.scrollView}>
        <Text variant="headlineMedium" style={styles.title}>Popular Categories</Text>
        <View style={styles.categoriesContainer}>
          <Card style={styles.categoryCard}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Title title="Plants" />
          </Card>
          <Card style={styles.categoryCard}>
            <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
            <Card.Title title="Animals" />
          </Card>
          <Card style={styles.categoryCard}>
            <Card.Cover source={{ uri: 'https://picsum.photos/702' }} />
            <Card.Title title="Insects" />
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    marginBottom: 15,
  },
  categoriesContainer: {
    gap: 15,
  },
  categoryCard: {
    marginBottom: 15,
  },
}); 