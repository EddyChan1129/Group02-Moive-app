import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { firestore } from '../config/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { userAuthentication } from '../config/userAuthentication';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;
  const { user } = userAuthentication();

  const addBookmark = async () => {
    if (user) {
      try {
        await setDoc(doc(firestore, `users/${user.uid}/bookmarks`, movie.id.toString()), movie);
        Alert.alert('Success', 'Movie bookmarked!');
      } catch (error) {
        Alert.alert('Error', 'Could not bookmark movie.');
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
        <Text style={styles.rating}>Rating: {movie.vote_average} / 10</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <TouchableOpacity style={styles.bookmarkButton} onPress={addBookmark}>
          <Text style={styles.bookmarkButtonText}>Bookmark</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  poster: {
    width: '100%',
    height: 500,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  releaseDate: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
  },
  bookmarkButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookmarkButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MovieDetailScreen;
