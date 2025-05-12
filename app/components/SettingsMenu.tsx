import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { List, Text, useTheme } from 'react-native-paper';

type SettingsMenuProps = {
  isVisible: boolean;
  onClose: () => void;
};

export default function SettingsMenu({ isVisible, onClose }: SettingsMenuProps) {
  const theme = useTheme();
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsMenuVisible(true);
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setIsMenuVisible(false));
    }
  }, [isVisible]);

  if (!isMenuVisible) return null;

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.backdrop} onPress={onClose} />
      <Animated.View
        style={[
          styles.menu,
          {
            transform: [{ translateX: slideAnim }],
            backgroundColor: theme.colors.background,
          },
        ]}
      >
        <View style={styles.header}>
          <Text variant="headlineSmall">Settings</Text>
          <TouchableOpacity onPress={onClose}>
            <MaterialCommunityIcons name="close" size={24} color={theme.colors.onBackground} />
          </TouchableOpacity>
        </View>

        <List.Section>
          <List.Item
            title="Profile"
            left={props => <List.Icon {...props} icon="account" />}
            onPress={() => {}}
          />
          <List.Item
            title="Share App"
            left={props => <List.Icon {...props} icon="share" />}
            onPress={() => {}}
          />
          <List.Item
            title="Privacy Policy"
            left={props => <List.Icon {...props} icon="shield" />}
            onPress={() => {}}
          />
          <List.Item
            title="Terms of Use"
            left={props => <List.Icon {...props} icon="file-document" />}
            onPress={() => {}}
          />
          <List.Item
            title="FAQs"
            left={props => <List.Icon {...props} icon="frequently-asked-questions" />}
            onPress={() => {}}
          />
          <List.Item
            title="Contact Us"
            left={props => <List.Icon {...props} icon="email" />}
            onPress={() => {}}
          />
          <List.Item
            title="Follow Us"
            left={props => <List.Icon {...props} icon="social-distance-6-feet" />}
            onPress={() => {}}
          />
          <List.Item
            title="About"
            left={props => <List.Icon {...props} icon="information" />}
            onPress={() => {}}
          />
        </List.Section>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
}); 