import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
export default function IconSection() {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <MyIcon
          icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          subTitle={"start from 10$"}
        />
        <MyIcon
          icon={<WorkspacePremiumIcon />}
          title={"Money Gurantee"}
          subTitle={"7 Days back"}
        />
        <MyIcon
          icon={<AccessAlarmIcon />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyIcon
          icon={<CreditScoreIcon />}
          title={"Payment"}
          subTitle={"Secure systeam"}
        />
      </Stack>
    </Container>
  );
}

function MyIcon({ icon, title, subTitle }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        flexGrow: "1",
        alignItems: "center",
        gap: 3,
        justifyContent: "center",
        py: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.second }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}
