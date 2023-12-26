import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Links({title}) {
  return (
    <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          ":hover .show-when-hover": { display: "block" },
          ":hover ": { cursor: "pointer" },
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <ExpandMoreIcon sx={{ fontSize: "16px", ml: 1 }} />
        <Box
          className="show-when-hover"
          sx={{
            position: "absolute",
            top: "100%",
            minWidth: "170px",
            left: "50%",
            transform: "translatex(-50%)",
            display: "none",
            zIndex:10
          }}
        >
          <Paper sx={{ mt: 2 }}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        "&.MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Dashboard"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{ "&:hover .sub-link": { display: "block" } }}
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        "&.MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                          position: "relative",
                        },
                        ":hover .sub-link": { display: "block" },
                      }}
                      primary="Products"
                    />
                    <Box flexGrow={1} />
                    <KeyboardArrowRightIcon fontSize="small" />
                  </ListItemButton>
                  <Box
                    className="sub-link"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "100%",
                      display: "none",
                    }}
                  >
                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText
                                sx={{
                                  "& .MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Add Product"
                              />
                              <Box flexGrow={1} />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{ display: "flex", p: 0, px: 1.5 }}
                            >
                              <ListItemText
                                sx={{
                                  "& .MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Edit Product"
                              />
                              <Box flexGrow={1} />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        "&.MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Orders"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        "&.MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Profile"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
  )
}
