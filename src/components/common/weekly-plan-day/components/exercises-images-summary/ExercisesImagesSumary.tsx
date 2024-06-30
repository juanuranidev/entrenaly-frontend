import { Stack } from "@mui/material";
import { Exercise } from "lib/types/exercise/exercise.types";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  exercises: Exercise[];
};

export default function ExercisesImagesSumary({ exercises }: Props) {
  const { theme } = useThemeContext();

  return (
    <Stack direction="row" mr={theme?.spacing(1)} gap={theme?.spacing(1.5)}>
      {exercises?.slice(0, 3).map((exercise: any, index: number) => {
        const isVariant: boolean = exercise?.hasVariant;

        return (
          <img
            key={index}
            alt={exercise?.name}
            src={isVariant ? exercise?.variant?.image : exercise?.image}
            style={{
              width: 60,
              height: 60,
              objectFit: "contain",
              borderRadius: theme?.spacing(1),
              border: `2px solid ${theme?.colors?.border?.primary}`,
            }}
          />
        );
      })}
    </Stack>
  );
}
