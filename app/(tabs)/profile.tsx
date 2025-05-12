import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Button, List, Text } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.avatar}
        />
        <Text variant="headlineSmall" style={styles.name}>John Doe</Text>
        <Text variant="bodyLarge" style={styles.bio}>Nature Enthusiast</Text>
      </View>

      <List.Section>
        <List.Subheader>Activity</List.Subheader>
        <List.Item
          title="Identifications"
          description="23 organisms identified"
          left={props => <List.Icon {...props} icon="camera" />}
        />
        <List.Item
          title="Saved"
          description="15 organisms saved"
          left={props => <List.Icon {...props} icon="bookmark" />}
        />
        <List.Item
          title="Contributions"
          description="8 contributions to the community"
          left={props => <List.Icon {...props} icon="star" />}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Settings</List.Subheader>
        <List.Item
          title="Account Settings"
          left={props => <List.Icon {...props} icon="account-cog" />}
        />
        <List.Item
          title="Notifications"
          left={props => <List.Icon {...props} icon="bell" />}
        />
        <List.Item
          title="Privacy"
          left={props => <List.Icon {...props} icon="shield" />}
        />
      </List.Section>

      <Button
        mode="outlined"
        onPress={() => {}}
        style={styles.logoutButton}
      >
        Log Out
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    marginBottom: 5,
  },
  bio: {
    color: '#666',
  },
  logoutButton: {
    margin: 20,
  },
}); 