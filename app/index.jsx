import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const students = ['Alice', 'Ben', 'Carlos', 'Dina', 'Ella'];

export default function MoodRatingScreen() {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [mood, setMood] = useState(null);

  const emojis = ['😢', '😟', '😐', '😊', '😄'];

  const handleSubmit = () => {
    if (selectedStudent && mood !== null) {
      console.log(`Student: ${selectedStudent}, Mood: ${mood + 1} (${emojis[mood]})`);
      // You can replace this with a backend/API call
      alert(`Submitted mood ${mood + 1} for ${selectedStudent}`);
      setMood(null); // reset
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Student Mood Rating</Text>

      <Text style={styles.label}>Select Student:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedStudent}
          onValueChange={(itemValue) => setSelectedStudent(itemValue)}
          style={styles.picker}
        >
          {students.map((student, index) => (
            <Picker.Item label={student} value={student} key={index} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Rate Mood:</Text>
      <View style={styles.emojiRow}>
        {emojis.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.emojiButton,
              mood === index && styles.selectedEmoji
            ]}
            onPress={() => setMood(index)}
          >
            <Text style={styles.emojiText}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {mood !== null && (
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Mood</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F6FA',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '500',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  emojiButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
  },
  selectedEmoji: {
    backgroundColor: '#A0C4FF',
  },
  emojiText: {
    fontSize: 28,
  },
  submitButton: {
    backgroundColor: '#4F8EF7',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
