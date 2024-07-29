import { Stack } from "@mui/material";
import { Exercise } from "lib/types/exercise/exercise.types";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  exercises: Exercise[];
};

export default function ExercisesImagesSumary({ exercises }: Props) {
  const { theme } = useThemeContext();

  return (
    <Stack direction="row" mr={theme?.spacing(2)} gap={theme?.spacing(2)}>
      {exercises?.slice(0, 3).map((exercise: Exercise, index: number) => {
        const hasVariant: boolean = exercise?.hasVariant;

        return (
          <img
            key={index}
            alt={hasVariant ? exercise?.variant?.name : exercise?.name}
            src={hasVariant ? exercise?.variant?.image : exercise?.image}
            style={{
              width: 50,
              height: 50,
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
