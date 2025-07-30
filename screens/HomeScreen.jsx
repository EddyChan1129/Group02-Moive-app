import { useEffect, useState } from "react";
import { Text, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { FirebaseAuth } from "../config/firebaseConfig";
import { styles } from "../MyStyle";
import { fetchTopRatedMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

const HomeScreen = () => {
  const nav = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => signOut(FirebaseAuth)}
        >
          <Text style={styles.signOutButtonText}>Sign Out</Text>
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
    <SafeAreaView style={styles.homeContainer}>
      <Text style={styles.header}>Top Rated Movies</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
