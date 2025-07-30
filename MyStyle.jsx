import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const COLORS = {
  primary: "#0D47A1", // A deeper, more professional blue
  secondary: "#FFC107", // A vibrant accent color
  background: "#121212", // A dark background for a cinematic feel
  card: "#1E1E1E", // A slightly lighter card background
  text: "#EAEAEA", // A light text color for readability
  subtleText: "#9E9E9E", // A more subtle text color for secondary information
  white: "#FFFFFF",
  danger: "#B00020", // A deep red for errors
  online: "#4CAF50",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.text,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.subtleText,
    textAlign: "center",
    marginBottom: 40,
  },
  inputStyle: {
    fontSize: 16,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 20,
    height: 55,
    marginVertical: 10,
    width: "100%",
    color: COLORS.text,
    backgroundColor: COLORS.card,
  },
  buttonStyle: {
    marginVertical: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: "600",
  },
  errorText: {
    fontSize: 14,
    color: COLORS.danger,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  authSwitchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  authSwitchText: {
    fontSize: 16,
    color: COLORS.subtleText,
  },
  authSwitchButton: {
    marginLeft: 5,
  },
  authSwitchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.secondary,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
    color: COLORS.text,
  },
  list: {
    justifyContent: "space-around",
  },
  signOutButton: {
    marginRight: 10,
  },
  signOutButtonText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: "bold",
  },
  detailContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  poster: {
    width: "100%",
    height: height * 0.5,
  },
  infoContainer: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: COLORS.text,
  },
  releaseDate: {
    fontSize: 16,
    color: COLORS.subtleText,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: COLORS.subtleText,
    marginBottom: 20,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
  },
  bookmarkButton: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  bookmarkButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  readMore: {
    color: COLORS.secondary,
    marginTop: 10,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  bookmarkContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,
  },
  bookmarkTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: COLORS.text,
  },
  bookmarkItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: COLORS.card,
    borderRadius: 10,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    flex: 1,
    color: COLORS.text,
  },
  deleteButton: {
    backgroundColor: COLORS.danger,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
});
