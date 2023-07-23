import { Rating } from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";

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
        <TipsAndUpdatesRoundedIcon
          fontSize="inherit"
          style={{ color: filledColor }}
        />
      }
      emptyIcon={
        <EmojiObjectsOutlinedIcon
          style={{ opacity: 0.8, color: emptyColor }}
          fontSize="inherit"
        />
      }
    />
  );
}
