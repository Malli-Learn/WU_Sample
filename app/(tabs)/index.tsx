import { useRouter } from 'expo-router';
import { ChevronDown } from 'lucide-react-native';
import React from 'react';
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');

export default function HomeTab() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Split background */}
      <View style={styles.backgroundContainer}>
        <View style={styles.topBackground} />
        <View style={styles.bottomBackground} />
      </View>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Image source={require('../../assets/images/wu_logo.png')} style={styles.logo} />
          <TouchableOpacity style={styles.loginButton} >
            <Text style={{ color: 'yellow'}}>Login/Register</Text>
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <Text style={styles.greetingText}>Hello there.</Text>

        {/* Money Transfer Card */}
        <View style={styles.transferCard}>
          <View style={styles.transferHeader}>
            <Image source={require('../../assets/images/gbp_icon.png')} style={styles.flag} />
            <Text style={styles.transferText}>Send money to </Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.countryText}>United Kingdom</Text>
              <ChevronDown size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>You're sending</Text>
            <Text style={styles.currency}>INR</Text>
          </View>
          <TextInput
            placeholder="0.00"
            style={styles.textInput}
            keyboardType="numeric"
          />

          <View style={styles.inputRow}>
            <Text style={styles.label}>Your receiver gets</Text>
            <Text style={styles.currency}>GBP</Text>
          </View>
          <TextInput
            placeholder="0.00"
            style={styles.textInput}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => router.push('/review')}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Send money</Text>
          </TouchableOpacity>
        </View>

        {/* Special Offers */}
        <Text style={styles.offersText}>Special Offers for you</Text>
        <View style={styles.offerCard}>
          <View style={styles.offerContent}>
            <Text style={styles.offerText}>
              Send money abroad for zero transfer fee* online.
            </Text>
            <Button
              title="Get Started"
              color="#FFD700"
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    flex: 1,
  },
  topBackground: {
    height: height * 0.4,
    backgroundColor: '#ffdd00',
  },
  bottomBackground: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  loginButton: {
    height: 30,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 12,
    justifyContent: 'center',      
    alignItems: 'center',  
  },
  greetingText: {
    fontSize: 24,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  transferCard: {
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowOpacity: 0.15, // iOS shadow
    shadowRadius: 8, // iOS shadow
  },
  transferHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  flag: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  transferText: {
    fontSize: 16,
  },
  countryText: {
    fontSize: 16,
    color: 'blue',
    marginLeft: 4,
  },
  inputRow: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
  },
  label: {
    fontSize: 16,
  },
  currency: {
    fontSize: 16,
  },
  textInput: {
    marginBottom: 12,
    fontSize: 24,
  },
  sendButton: {
    backgroundColor: '#FFD700',
    borderRadius: 30,
    height: 50,
    marginHorizontal: 8,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  offersText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  offerCard: {
    height: 100,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,                
    borderColor: '#E5E5E7',        
    elevation: 4,                 
    shadowColor: '#000',           
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.12,           
    shadowRadius: 6, 
  },
  offerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offerText: {
    flex: 1,
    fontSize: 16,
    marginRight: 8,
  },
  getStartedButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  sendButtonNav: {
    backgroundColor: '#FFD700',
    borderRadius: 30,
    padding: 12,
    marginBottom: 24, // To match the floating effect
  },
});