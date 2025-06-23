import { Clock, Copy, DollarSign, QrCode, Share2 } from 'lucide-react-native';
import { ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReceiveTab() {
  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Send me money using this link: https://pay.app/MalliJana',
        title: 'Request Payment',
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Receive Money</Text>
          <Text style={styles.subtitle}>Share your payment details</Text>
        </View>

        {/* QR Code Section */}
        <View style={styles.qrSection}>
          <View style={styles.qrCard}>
            <View style={styles.qrCodeContainer}>
              <QrCode size={160} color="#1C1C1E" />
            </View>
            <Text style={styles.qrText}>Scan to pay Malli Jana</Text>
            <Text style={styles.qrSubtext}>Or use the options below</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
            <Share2 size={24} color="#007AFF" />
            <Text style={styles.actionButtonText}>Share Link</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Copy size={24} color="#007AFF" />
            <Text style={styles.actionButtonText}>Copy Link</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Info */}
        <View style={styles.paymentInfo}>
          <Text style={styles.sectionTitle}>Payment Information</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Username</Text>
              <View style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>@MalliJana</Text>
                <TouchableOpacity style={styles.copyButton}>
                  <Copy size={16} color="#007AFF" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Phone Number</Text>
              <View style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
                <TouchableOpacity style={styles.copyButton}>
                  <Copy size={16} color="#007AFF" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Email</Text>
              <View style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>mallikarjuna.j@hcltech.com</Text>
                <TouchableOpacity style={styles.copyButton}>
                  <Copy size={16} color="#007AFF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Request Amount */}
        <View style={styles.requestAmount}>
          <Text style={styles.sectionTitle}>Request Specific Amount</Text>
          <TouchableOpacity style={styles.requestButton}>
            <DollarSign size={24} color="#007AFF" />
            <View style={styles.requestDetails}>
              <Text style={styles.requestButtonText}>Create Payment Request</Text>
              <Text style={styles.requestButtonSubtext}>Set amount and message</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recent Requests */}
        <View style={styles.recentRequests}>
          <View style={styles.sectionHeader}>
            <Clock size={20} color="#8E8E93" />
            <Text style={styles.sectionTitle}>Recent Requests</Text>
          </View>
          <View style={styles.requestList}>
            <View style={styles.requestItem}>
              <View style={styles.requestIcon}>
                <Text style={styles.requestInitial}>P</Text>
              </View>
              <View style={styles.requestItemDetails}>
                <Text style={styles.requestName}>Prakash</Text>
                <Text style={styles.requestDate}>Requested 2 hours ago</Text>
              </View>
              <View style={styles.requestAmountContainer}>
                <Text style={styles.requestItemAmount}>$75.00</Text>
                <Text style={styles.requestStatus}>Pending</Text>
              </View>
            </View>
            <View style={styles.requestItem}>
              <View style={styles.requestIcon}>
                <Text style={styles.requestInitial}>V</Text>
              </View>
              <View style={styles.requestItemDetails}>
                <Text style={styles.requestName}>Venkatesh Gandham</Text>
                <Text style={styles.requestDate}>Requested yesterday</Text>
              </View>
              <View style={styles.requestAmountContainer}>
                <Text style={styles.requestItemAmount}>$200.00</Text>
                <Text style={[styles.requestStatus, styles.completedStatus]}>Completed</Text>
              </View>
            </View>
            <View style={styles.requestItem}>
              <View style={styles.requestIcon}>
                <Text style={styles.requestInitial}>D</Text>
              </View>
              <View style={styles.requestItemDetails}>
                <Text style={styles.requestName}>Deepshikha </Text>
                <Text style={styles.requestDate}>Requested 3 days ago</Text>
              </View>
              <View style={styles.requestAmountContainer}>
                <Text style={styles.requestItemAmount}>$50.00</Text>
                <Text style={styles.requestStatus}>Pending</Text>
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
  qrSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  qrCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  qrCodeContainer: {
    padding: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    marginBottom: 20,
  },
  qrText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  qrSubtext: {
    fontSize: 14,
    color: '#8E8E93',
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 32,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007AFF',
    marginLeft: 8,
  },
  paymentInfo: {
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
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  infoLabel: {
    fontSize: 16,
    color: '#8E8E93',
  },
  infoValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginRight: 8,
  },
  copyButton: {
    padding: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#F2F2F7',
    marginHorizontal: 16,
  },
  requestAmount: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  requestButton: {
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
  requestDetails: {
    marginLeft: 16,
    flex: 1,
  },
  requestButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  requestButtonSubtext: {
    fontSize: 14,
    color: '#8E8E93',
  },
  recentRequests: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  requestList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  requestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  requestIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF9500',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  requestInitial: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  requestItemDetails: {
    flex: 1,
  },
  requestName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  requestDate: {
    fontSize: 14,
    color: '#8E8E93',
  },
  requestAmountContainer: {
    alignItems: 'flex-end',
  },
  requestItemAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  requestStatus: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FF9500',
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  completedStatus: {
    color: '#34C759',
    backgroundColor: '#E8F5E8',
  },
});