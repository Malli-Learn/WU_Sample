import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReviewScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Review Screen</Text>
      {/* Add your review details here */}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  backButton: { marginBottom: 24 },
  backText: { fontSize: 18, color: '#007AFF' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
});