import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
export default function Scroll() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 100 })}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        variant="extended"
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardControlKeyIcon fontSize="medium" />
      </Fab>
    </Zoom>
  );
}
