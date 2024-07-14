import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#edf3f8",
    justifyContent: "space-between",
    borderBottom: "1px solid black",
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
    logo: {
      width: 50,
    },
  },
  days: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  day: {
    padding: 10,
    width: "33.33%",
    backgroundColor: "#ffffff",
    name: {
      paddingBottom: 10,
    },
    exerciseName: {
      fontSize: 9,
      paddingBottom: 2,
    },
    exerciseDescription: {
      fontSize: 8,
      marginLeft: 5,
    },
  },
});
