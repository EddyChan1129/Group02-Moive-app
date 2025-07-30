import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { firestore } from "../config/firebaseConfig";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { userAuthentication } from "../config/userAuthentication";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../MyStyle";

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
    <SafeAreaView style={styles.bookmarkContainer}>
      <Text style={styles.bookmarkTitle}>My Bookmarks</Text>
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
    </SafeAreaView>
  );
};

export default BookmarkScreen;
