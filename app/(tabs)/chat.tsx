import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

type Message = {
  text: string;
  isUser: boolean;
};

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText('');
      // TODO: Implement AI response
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.isUser ? styles.userMessage : styles.aiMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask about any organism..."
          style={styles.input}
          right={
            <TextInput.Icon
              icon="send"
              onPress={handleSend}
              disabled={!inputText.trim()}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 20,
  },
  messageBubble: {
    padding: 15,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#4CAF50',
    alignSelf: 'flex-end',
  },
  aiMessage: {
    backgroundColor: '#E0E0E0',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
}); 