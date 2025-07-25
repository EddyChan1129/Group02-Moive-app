import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { firestore } from "../config/firebaseConfig";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { userAuthentication } from "../config/userAuthentication";
import { useNavigation } from "@react-navigation/native";

const BookmarkScreen = () => {
  const { user } = userAuthentication();
  const [bookmarks, setBookmarks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(
        collection(firestore, `users/${user.uid}/bookmarks`),
        (querySnapshot) => {
          const bookmarkedMovies = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setBookmarks(bookmarkedMovies);
        },
      );
      return () => unsubscribe();
    }
  }, [user]);

  const removeBookmark = async (movieId) => {
    if (user) {
      await deleteDoc(
        doc(firestore, `users/${user.uid}/bookmarks`, movieId.toString()),
      );
      Alert.alert("Success", "Bookmark removed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookmarks</Text>
      <FlatList
        data={bookmarks}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MovieDetailScreen", { movie: item })
            }
            style={styles.bookmarkItem}
          >
            <Text style={styles.movieTitle}>{item.title}</Text>
            <TouchableOpacity
              onPress={() => removeBookmark(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteButtonText}>Remove</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  bookmarkItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  movieTitle: {
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "#DC3545",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default BookmarkScreen;
