import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { firestore } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { userAuthentication } from "../config/userAuthentication";
import { styles } from "../MyStyle";
import { useState } from "react";

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;
  const { user } = userAuthentication();
  const [showFullOverview, setShowFullOverview] = useState(false);

  const addBookmark = async () => {
    if (user) {
      try {
        await setDoc(
          doc(firestore, `users/${user.uid}/bookmarks`, movie.id.toString()),
          movie,
        );
        Alert.alert("Success", "Movie bookmarked!");
      } catch (error) {
        Alert.alert("Error", "Could not bookmark movie.");
      }
    }
  };

  return (
    <SafeAreaView style={styles.detailContainer}>
      <ScrollView>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          style={styles.poster}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.detailTitle}>{movie.title}</Text>
          <Text style={styles.releaseDate}>
            Release Date: {movie.release_date}
          </Text>
          <Text style={styles.rating}>Rating: {movie.vote_average} / 10</Text>
          <Text
            style={styles.overview}
            numberOfLines={showFullOverview ? 0 : 2}
          >
            {movie.overview}
          </Text>
          <TouchableOpacity
            onPress={() => setShowFullOverview(!showFullOverview)}
          >
            <Text style={styles.readMore}>
              {showFullOverview ? "Read Less" : "Read More"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookmarkButton} onPress={addBookmark}>
            <Text style={styles.bookmarkButtonText}>Bookmark</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
