import { Stack } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  exercises: any;
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
            alt={exercise?.exerciseName}
            src={
              isVariant
                ? exercise?.exerciseVariant?.image
                : exercise?.exerciseImage
            }
            style={{
              width: 40,
              height: 40,
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
