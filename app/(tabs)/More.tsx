import { Bell, ChevronRight, CreditCard, Globe, CircleHelp as HelpCircle, Lock, LogOut, Moon, Settings, Shield, User } from 'lucide-react-native';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MoreTab() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>More</Text>
          <Text style={styles.subtitle}>Settings and account options</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileCard}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileInitials}>JD</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Mallikarjuna Jana</Text>
              <Text style={styles.profileEmail}>mallikarjuna.j@hcltech.com</Text>
              <Text style={styles.profilePhone}>+1 (999) 123-4567</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <User size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Account Settings */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuList}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <CreditCard size={20} color="#007AFF" />
              </View>
              <Text style={styles.menuText}>Payment Methods</Text>
              <ChevronRight size={20} color="#8E8E93" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Shield size={20} color="#34C759" />
              </View>
              <Text style={styles.menuText}>Security & Privacy</Text>
              <ChevronRight size={20} color="#8E8E93" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Lock size={20} color="#FF9500" />
              </View>
              <Text style={styles.menuText}>PIN & Biometrics</Text>
              <ChevronRight size={20} color="#8E8E93" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Preferences */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.menuList}>
            <View style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Bell size={20} color="#FF9500" />
              </View>
              <Text style={styles.menuText}>Notifications</Text>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#E5E5E7', true: '#007AFF' }}
                thumbColor="#FFFFFF"
              />
            </View>
            <View style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Moon size={20} color="#5856D6" />
              </View>
              <Text style={styles.menuText}>Dark Mode</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#E5E5E7', true: '#007AFF' }}
                thumbColor="#FFFFFF"
              />
            </View>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Globe size={20} color="#32ADE6" />
              </View>
              <Text style={styles.menuText}>Language & Region</Text>
              <View style={styles.menuValue}>
                <Text style={styles.menuValueText}>English (US)</Text>
                <ChevronRight size={20} color="#8E8E93" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Support */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Support</Text>
          <View style={styles.menuList}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <HelpCircle size={20} color="#32ADE6" />
              </View>
              <Text style={styles.menuText}>Help Center</Text>
              <ChevronRight size={20} color="#8E8E93" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Settings size={20} color="#8E8E93" />
              </View>
              <Text style={styles.menuText}>Terms & Privacy</Text>
              <ChevronRight size={20} color="#8E8E93" />
            </TouchableOpacity>
          </View>
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
          <Text style={styles.appBuild}>Build 2024.01.001</Text>
        </View>

        {/* Logout */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton}>
            <LogOut size={20} color="#FF3B30" />
            <Text style={styles.logoutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
  },
  profileSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInitials: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 2,
  },
  profilePhone: {
    fontSize: 14,
    color: '#8E8E93',
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 12,
  },
  menuList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  menuIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#1C1C1E',
  },
  menuValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuValueText: {
    fontSize: 16,
    color: '#8E8E93',
    marginRight: 8,
  },
  appInfo: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  appVersion: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 2,
  },
  appBuild: {
    fontSize: 12,
    color: '#8E8E93',
  },
  logoutSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF3B30',
    marginLeft: 8,
  },
});