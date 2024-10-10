import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Arrow from "@/Assets/Icon/Arrow";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

const CustomMaterialCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      sx={{ position: "relative", width: "100%", maxWidth: 600, mx: "auto" }}
    >
      <Box
        component="img"
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
      />
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "5px 10px",
          borderRadius: 1,
        }}
      >
        {images[currentIndex].alt}
      </Typography>

      {/* Tombol Previous */}
      <IconButton
        onClick={goToPrevious}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <Arrow />
      </IconButton>

      {/* Tombol Next */}
      <IconButton
        onClick={goToNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <Arrow />
      </IconButton>
    </Box>
  );
};

export default CustomMaterialCarousel;
