import { Rating } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export function CustomRating({
  size,
  emptyColor = "#6E97E5",
  filledColor = "#3E5DFF",
}: {
  size: "small" | "large" | "medium";
  emptyColor?: string;
  filledColor?: string;
}) {
  return (
    <Rating
      name="customized-color"
      defaultValue={2}
      precision={0.5}
      readOnly
      size={size}
      icon={
        <StarIcon
          fontSize="inherit"
          style={{ color: filledColor }}
        />
      }
      emptyIcon={
        <StarBorderIcon
          style={{ opacity: 0.8, color: emptyColor }}
          fontSize="inherit"
        />
      }
    />
  );
}
