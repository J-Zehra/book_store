import { Rating } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { BookRating } from "@/types";

export function CustomRating({
  size,
  rating,
  emptyColor = "#6E97E5",
  filledColor = "#3E5DFF",
}: {
  size: "small" | "large" | "medium";
  emptyColor?: string;
  rating?: BookRating[];
  filledColor?: string;
}) {
  const calculateRating = () => {
    let total = 0;
    rating?.map((item) => {
      total += item.rating;
    });
    const average = total / 5;
    return average;
  };

  return (
    <Rating
      name="customized-color"
      defaultValue={calculateRating()}
      precision={0.5}
      readOnly
      size={size}
      icon={<StarIcon fontSize="inherit" style={{ color: filledColor }} />}
      emptyIcon={
        <StarBorderIcon
          style={{ opacity: 0.8, color: emptyColor }}
          fontSize="inherit"
        />
      }
    />
  );
}
