import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const students = ['Select Student...', 'Alice', 'Ben', 'Carlos', 'Dina', 'Ella'];
const emojis = ['😢', '😟', '😐', '😊', '😄'];

export default function MoodRatingScreen() {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [mood, setMood] = useState(null);

  const handleSubmit = () => {
    if (selectedStudent !== students[0] && mood !== null) {
      alert(`Submitted mood ${mood + 1} (${emojis[mood]}) for ${selectedStudent}`);
      console.log(`Student: ${selectedStudent}, Mood: ${mood + 1}`);
      setMood(null);
      setSelectedStudent(students[0]);
    } else {
      alert('Please select a student and mood!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎓 Student Mood Tracker</Text>

      <Text style={styles.label}>Select Student</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedStudent}
          onValueChange={(itemValue) => setSelectedStudent(itemValue)}
          mode="dropdown"
          style={Platform.OS === 'android' ? styles.pickerAndroid : undefined}
        >
          {students.map((student, index) => (
            <Picker.Item label={student} value={student} key={index} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Rate student's mood overall</Text>
      <View style={styles.emojiRow}>
        {emojis.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.emojiButton,
              mood === index && styles.emojiSelected
            ]}
            onPress={() => setMood(index)}
          >
            <Text style={styles.emoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Mood</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FA',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#34495E',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 8,
  },
  pickerWrapper: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
    elevation: 2,
  },
  pickerAndroid: {
    height: 50,
    width: '100%',
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  emojiButton: {
    backgroundColor: '#E4E7EB',
    padding: 12,
    borderRadius: 50,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 2,
  },
  emojiSelected: {
    backgroundColor: '#A0C4FF',
    borderWidth: 2,
    borderColor: '#4F8EF7',
  },
  emoji: {
    fontSize: 26,
  },
  submitButton: {
    backgroundColor: '#4F8EF7',
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  submitText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
