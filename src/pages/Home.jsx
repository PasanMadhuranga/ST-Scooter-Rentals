import { Box } from "@mui/material";
import HomeImageButton from "../components/HomeImageButton";
import categories from "../data/category.data";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
        height: "calc(100vh - 128px)",
      }}
    >
      {categories.map((category) => (
        <HomeImageButton key={category.title} category={category} />
      ))}
    </Box>
  );
}
