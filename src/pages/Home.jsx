import { Box } from "@mui/material";
import HomeImageButton from "../components/HomeImageButton";

const images = [
  {
    url: "https://images.unsplash.com/photo-1572168737399-24c6f29b860a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Scooters",
  },
  {
    url: "https://images.unsplash.com/photo-1594495894542-a46cc73e081a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Airport Drop and Pickup",
  },
  {
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tours",
  },
];



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
      {images.map((image) => (
        <HomeImageButton key={image.title} image={image} />
      ))}
    </Box>
  );
}
