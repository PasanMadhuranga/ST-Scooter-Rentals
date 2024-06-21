import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "33.33%",
  [theme.breakpoints.up("md")]: {
    height: "100%",
    flex: "1 1 0",
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    // transform: "scale(1.05)",
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root.MuiTypography-subtitle1": {
      border: "4px solid currentColor",
      transition: theme.transitions.create("border", {
        duration: theme.transitions.duration.shortest,
      }),
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function HomeImageButton({ category }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(category.link);
  };

  return (
    <ImageButton focusRipple onClick={handleClick}>
      <ImageSrc style={{ backgroundImage: `url(${category.url})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: "relative",
            p: 4,
            pt: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            fontSize: {xs: 16, sm: 20},
          }}
        >
          {category.title}

          <ImageMarked className="MuiImageMarked-root" />
        </Typography>
        <Typography
          component="span"
          variant="body2"
          color="inherit"
          sx={{
            display: "block",
            mt: 4,
            px: 6,
            fontSize: {xs: 12, sm: 16},
          }}
        >
          {category.description}
        </Typography>
      </Image>
    </ImageButton>
  );
}
