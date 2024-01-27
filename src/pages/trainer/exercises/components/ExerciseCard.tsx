import {
  Box,
  Chip,
  Grid,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

type Props = { exercise: any };

export default function ExerciseCard({ exercise }: Props) {
  const theme: any = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      key={exercise?.name}
      p={theme.spacing(2)}
      margin={theme.spacing(1)}
      width={{
        base: `calc(100% - ${theme.spacing(2)})`,
        sm: `calc(50% - ${theme.spacing(2)})`,
        md: `calc(25% - ${theme.spacing(2)})`,
        lg: `calc(20% - ${theme.spacing(2)})`,
      }}
      boxShadow={theme.customShadows.secondary}
    >
      <Grid container mt={1} direction="row" alignItems="center">
        <Grid item xs={10}>
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label={exercise.category}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton size="small">
            <EditIcon color="primary" fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <img
        src={exercise.video}
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          objectFit: "contain",
        }}
      />
      <Typography
        mt={1}
        lineHeight="1.2"
        align="left"
        fontSize={16}
        fontWeight={600}
      >
        {exercise.name}
      </Typography>
    </Box>
  );
}
