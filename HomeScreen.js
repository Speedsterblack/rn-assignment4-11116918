import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Eric Atsu</Text>
          <Text style={styles.email}>eric@gmail.com</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profileImage} />
      </View>

      <TextInput style={styles.searchInput} placeholder="Search a job or position" />

      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredJobsContainer}>
        <View style={styles.featuredJobCard}>
          <Text style={styles.jobTitle}>Software Engineer</Text>
          <Text style={styles.company}>Facebook</Text>
          <Text style={styles.salary}>$180,000</Text>
          <Text style={styles.location}>Accra, Ghana</Text>
        </View>
        <View style={styles.featuredJobCard}>
          <Text style={styles.jobTitle}>Product Manager</Text>
          <Text style={styles.company}>Google</Text>
          <Text style={styles.salary}>$160,000</Text>
          <Text style={styles.location}>San Francisco, US</Text>
        </View>
      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <View style={styles.jobList}>
        <View style={styles.jobListItem}>
          <Text style={styles.jobTitle}>Jr Executive</Text>
          <Text style={styles.company}>Burger King</Text>
          <Text style={styles.salary}>$96,000/y</Text>
          <Text style={styles.location}>Los Angeles, US</Text>
        </View>
        <View style={styles.jobListItem}>
          <Text style={styles.jobTitle}>Product Manager</Text>
          <Text style={styles.company}>Beats</Text>
          <Text style={styles.salary}>$84,000/y</Text>
          <Text style={styles.location}>Florida, US</Text>
        </View>
        <View style={styles.jobListItem}>
          <Text style={styles.jobTitle}>Product Manager</Text>
          <Text style={styles.company}>Facebook</Text>
          <Text style={styles.salary}>$86,000/y</Text>
          <Text style={styles.location}>Florida, US</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  email: {
    fontSize: 16,
    color: '#6e6e6e',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 10,
  },
  featuredJobsContainer: {
    marginBottom: 20,
  },
  featuredJobCard: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 200,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  company: {
    fontSize: 16,
    color: '#6e6e6e',
    marginBottom: 10,
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  location: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  jobList: {
    marginTop: 20,
  },
  jobListItem: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
});
