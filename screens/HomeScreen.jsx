import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { FirebaseAuth } from "../config/firebaseConfig";
import { styles as globalStyles } from "../MyStyle";
import { fetchTopRatedMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

const HomeScreen = () => {
  const nav = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={globalStyles.signOutButton}
          onPress={() => signOut(FirebaseAuth)}
        >
          <Text style={globalStyles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      ),
    });

    const getMovies = async () => {
      const topRatedMovies = await fetchTopRatedMovies();
      setMovies(topRatedMovies);
    };

    getMovies();
  }, [nav]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Rated Movies</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  list: {
    justifyContent: "space-around",
  },
});

export default HomeScreen;
