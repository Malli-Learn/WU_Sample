import { ChevronDown } from 'lucide-react-native';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeTab() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFD700' }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Western_Union_logo.svg' }} style={styles.logo} />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Login/Register</Text>
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <Text style={styles.greetingText}>Hello there.</Text>

      {/* Money Transfer Card */}
      <View style={styles.transferCard}>
        <View style={styles.transferHeader}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg' }} style={styles.flag} />
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

        <Button
          title="Send money"
          color="#FFD700"
          onPress={() => {}}
        />
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
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  transferCard: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
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
    fontWeight: 'bold',
  },
  textInput: {
    marginBottom: 12,
  },
  sendButton: {
    backgroundColor: '#FFD700',
    borderRadius: 30,
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
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
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