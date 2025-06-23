import { Clock, Search, Star, Users } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SendTab() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Send Money</Text>
          <Text style={styles.subtitle}>Choose a recipient</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#8E8E93" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search contacts..."
              placeholderTextColor="#8E8E93"
            />
          </View>
        </View>

        {/* Quick Send Amount */}
        <View style={styles.quickAmounts}>
          <Text style={styles.sectionTitle}>Quick Amounts</Text>
          <View style={styles.amountGrid}>
            <TouchableOpacity style={styles.amountButton}>
              <Text style={styles.amountText}>$10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountButton}>
              <Text style={styles.amountText}>$25</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountButton}>
              <Text style={styles.amountText}>$50</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountButton}>
              <Text style={styles.amountText}>$100</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Recipients */}
        <View style={styles.recipients}>
          <View style={styles.sectionHeader}>
            <Clock size={20} color="#8E8E93" />
            <Text style={styles.sectionTitle}>Recent Recipients</Text>
          </View>
          <View style={styles.recipientList}>
            <TouchableOpacity style={styles.recipientItem}>
              <View style={styles.recipientAvatar}>
                <Text style={styles.avatarText}>PS</Text>
              </View>
              <View style={styles.recipientDetails}>
                <Text style={styles.recipientName}>Prakash</Text>
                <Text style={styles.recipientInfo}>Last sent: $150.00</Text>
              </View>
              <View style={styles.favoriteIcon}>
                <Star size={16} color="#FFD60A" fill="#FFD60A" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recipientItem}>
              <View style={styles.recipientAvatar}>
                <Text style={styles.avatarText}>VG</Text>
              </View>
              <View style={styles.recipientDetails}>
                <Text style={styles.recipientName}>Venkatesh Gandham</Text>
                <Text style={styles.recipientInfo}>Last sent: $75.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recipientItem}>
              <View style={styles.recipientAvatar}>
                <Text style={styles.avatarText}>DS</Text>
              </View>
              <View style={styles.recipientDetails}>
                <Text style={styles.recipientName}>Deepshikha Sharma</Text>
                <Text style={styles.recipientInfo}>Last sent: $200.00</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* All Contacts */}
        <View style={styles.contacts}>
          <View style={styles.sectionHeader}>
            <Users size={20} color="#8E8E93" />
            <Text style={styles.sectionTitle}>All Contacts</Text>
          </View>
          <View style={styles.contactList}>
            <TouchableOpacity style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.avatarText}>NG</Text>
              </View>
              <View style={styles.contactDetails}>
                <Text style={styles.contactName}>Neeraj Ghi</Text>
                <Text style={styles.contactPhone}>+1 (555) 123-4567</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.avatarText}>BJ</Text>
              </View>
              <View style={styles.contactDetails}>
                <Text style={styles.contactName}>Bhalendu Joshi</Text>
                <Text style={styles.contactPhone}>+1 (555) 987-6543</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.avatarText}>SV</Text>
              </View>
              <View style={styles.contactDetails}>
                <Text style={styles.contactName}>Sohanli Vishal</Text>
                <Text style={styles.contactPhone}>+1 (555) 456-7890</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1C1C1E',
  },
  quickAmounts: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  amountGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 70,
    alignItems: 'center',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  recipients: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  recipientList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  recipientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  recipientAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  recipientDetails: {
    flex: 1,
  },
  recipientName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  recipientInfo: {
    fontSize: 14,
    color: '#8E8E93',
  },
  favoriteIcon: {
    marginLeft: 8,
  },
  contacts: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  contactList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  contactAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  contactPhone: {
    fontSize: 14,
    color: '#8E8E93',
  },
});