import React, { useState } from "react";
import Icons from "lib/utils/icons/icons";
import AddOrUpdateVariantForm from "components/forms/add-or-update-variant-form/AddOrUpdateVariantForm";
import { useThemeContext } from "contexts/theme/Theme";
import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import { Exercise } from "lib/types/exercise/exercise.types";

type Props = {
  exercise: Exercise;
  handleRefetchExercises: () => Promise<void>;
};

export default function ExerciseCard({
  exercise,
  handleRefetchExercises,
}: Props) {
  const isVariant: boolean = Boolean(exercise.variant);
  const { theme } = useThemeContext();

  const [openFormAddVariant, setOpenFormAddVariant] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Box
        display="flex"
        key={exercise?.name}
        p={theme?.spacing(2)}
        flexDirection="column"
        justifyContent="center"
        borderRadius={theme?.spacing(2)}
        boxShadow="rgba(0, 0, 0, 0.04) 0px 3px 5px;"
        border={`2px solid ${theme?.colors?.border.primary}`}
        width={{
          base: `calc(100% - ${theme?.spacing(3)})`,
          sm: `calc(50% - ${theme?.spacing(3)})`,
          md: `calc(50% - ${theme?.spacing(3)})`,
          lg: `calc(25% - ${theme?.spacing(3)})`,
          xl: `calc(20% - ${theme?.spacing(3)})`,
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={10}>
            <Chip
              size="small"
              color="primary"
              variant="outlined"
              label={exercise?.category?.name}
            />
            {exercise?.variant ? (
              <Chip
                size="small"
                color="success"
                label="Variante"
                variant="outlined"
                style={{ marginLeft: theme?.spacing(1) }}
              />
            ) : null}
            {exercise?.hasUser ? (
              <Chip
                size="small"
                color="success"
                label="Creado"
                variant="outlined"
                style={{ marginLeft: theme?.spacing(1) }}
              />
            ) : null}
          </Grid>
          {!exercise?.hasUser ? (
            <Grid item xs={2}>
              <IconButton
                size="small"
                onClick={() => setOpenFormAddVariant(true)}
              >
                <Icons.edit color="primary" fontSize="small" />
              </IconButton>
            </Grid>
          ) : null}
        </Grid>
        <img
          src={isVariant ? exercise?.variant?.image : exercise?.image}
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            aspectRatio: "16/12",
            objectFit: "contain",
            marginTop: theme?.spacing(1),
            marginBottom: theme?.spacing(1),
          }}
        />
        <Typography
          align="left"
          fontSize={16}
          lineHeight="1.2"
          fontWeight={600}
          mt={theme?.spacing(1)}
        >
          {isVariant ? exercise?.variant?.name : exercise?.name}
        </Typography>
      </Box>
      {openFormAddVariant ? (
        <AddOrUpdateVariantForm
          exerciseId={exercise?.id}
          open={openFormAddVariant}
          exerciseSelected={exercise}
          onClose={() => setOpenFormAddVariant(false)}
          onSubmit={() => handleRefetchExercises()}
        />
      ) : null}
    </React.Fragment>
  );
}
