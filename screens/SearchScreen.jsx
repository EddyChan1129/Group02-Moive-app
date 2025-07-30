import { useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../api/tmdb";
import { styles } from "../MyStyle";

const SearchScreen = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    if (query) {
      const results = await searchMovies(query);
      setMovies(results);
    } else {
      setMovies([]);
    }
  };

  return (
    <SafeAreaView style={styles.searchContainer}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
