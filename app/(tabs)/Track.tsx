import { CircleCheck as CheckCircle, Clock, Filter, MapPin, Package, Search, Truck } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TrackTab() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Track Payments</Text>
          <Text style={styles.subtitle}>Monitor your transactions and transfers</Text>
        </View>

        {/* Search and Filter */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Search size={20} color="#8E8E93" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search by transaction ID..."
              placeholderTextColor="#8E8E93"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#007AFF" />
          </TouchableOpacity>
        </View>

        {/* Active Transfers */}
        <View style={styles.activeTransfers}>
          <Text style={styles.sectionTitle}>Active Transfers</Text>
          <View style={styles.transferList}>
            <View style={styles.transferItem}>
              <View style={styles.transferIconContainer}>
                <Truck size={24} color="#007AFF" />
              </View>
              <View style={styles.transferDetails}>
                <Text style={styles.transferAmount}>$250.00</Text>
                <Text style={styles.transferRecipient}>To: Venkatesh Gandham</Text>
                <Text style={styles.transferId}>ID: TX-2024001234</Text>
              </View>
              <View style={styles.transferStatus}>
                <View style={styles.statusIndicator} />
                <Text style={styles.statusText}>In Transit</Text>
              </View>
            </View>
            <View style={styles.transferItem}>
              <View style={styles.transferIconContainer}>
                <Package size={24} color="#FF9500" />
              </View>
              <View style={styles.transferDetails}>
                <Text style={styles.transferAmount}>$150.00</Text>
                <Text style={styles.transferRecipient}>To: Deepshikha</Text>
                <Text style={styles.transferId}>ID: TX-2024001235</Text>
              </View>
              <View style={styles.transferStatus}>
                <View style={[styles.statusIndicator, styles.processingIndicator]} />
                <Text style={styles.statusText}>Processing</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Transaction Timeline */}
        <View style={styles.timeline}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.timelineList}>
            <View style={styles.timelineItem}>
              <View style={styles.timelineIconContainer}>
                <CheckCircle size={20} color="#34C759" />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Payment Completed</Text>
                <Text style={styles.timelineDescription}>$100.00 sent to Sonali</Text>
                <Text style={styles.timelineTime}>2 hours ago</Text>
              </View>
            </View>
            <View style={styles.timelineConnector} />
            <View style={styles.timelineItem}>
              <View style={styles.timelineIconContainer}>
                <Truck size={20} color="#007AFF" />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Transfer Initiated</Text>
                <Text style={styles.timelineDescription}>$250.00 to Vikas</Text>
                <Text style={styles.timelineTime}>3 hours ago</Text>
              </View>
            </View>
            <View style={styles.timelineConnector} />
            <View style={styles.timelineItem}>
              <View style={styles.timelineIconContainer}>
                <CheckCircle size={20} color="#34C759" />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Payment Received</Text>
                <Text style={styles.timelineDescription}>$75.00 from Neeraj</Text>
                <Text style={styles.timelineTime}>Yesterday</Text>
              </View>
            </View>
            <View style={styles.timelineConnector} />
            <View style={styles.timelineItem}>
              <View style={styles.timelineIconContainer}>
                <Package size={20} color="#FF9500" />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Payment Processing</Text>
                <Text style={styles.timelineDescription}>$150.00 to Sandhya</Text>
                <Text style={styles.timelineTime}>2 days ago</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Transaction Stats */}
        <View style={styles.stats}>
          <Text style={styles.sectionTitle}>This Week</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Completed</Text>
              <View style={styles.statIcon}>
                <CheckCircle size={20} color="#34C759" />
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>In Progress</Text>
              <View style={styles.statIcon}>
                <Clock size={20} color="#FF9500" />
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>$1,250</Text>
              <Text style={styles.statLabel}>Total Sent</Text>
              <View style={styles.statIcon}>
                <MapPin size={20} color="#007AFF" />
              </View>
            </View>
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
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  searchBar: {
    flex: 1,
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
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeTransfers: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 16,
  },
  transferList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  transferItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  transferIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  transferDetails: {
    flex: 1,
  },
  transferAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  transferRecipient: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 2,
  },
  transferId: {
    fontSize: 12,
    color: '#8E8E93',
    fontFamily: 'monospace',
  },
  transferStatus: {
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginBottom: 4,
  },
  processingIndicator: {
    backgroundColor: '#FF9500',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#8E8E93',
  },
  timeline: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  timelineList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timelineIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 20,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  timelineDescription: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 4,
  },
  timelineTime: {
    fontSize: 12,
    color: '#8E8E93',
  },
  timelineConnector: {
    width: 2,
    height: 20,
    backgroundColor: '#F2F2F7',
    marginLeft: 19,
    marginBottom: 8,
  },
  stats: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 8,
  },
  statIcon: {
    opacity: 0.6,
  },
});