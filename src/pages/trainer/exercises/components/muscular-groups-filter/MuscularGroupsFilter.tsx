import { useEffect, useState } from "react";
import { Chip, Stack, useTheme } from "@mui/material";

type Props = {
  exercises: any;
  setExercises: any;
};

export default function MuscularGroupsFilter({
  exercises,
  setExercises,
}: Props) {
  const theme: any = useTheme();
  const muscularGroups = ["Pecho", "Espalda", "Brazo"];

  const [originalExercises] = useState<any>(exercises);
  const [groupsSelected, setGroupsSelected] = useState<string[]>([]);

  const handleMuscularGroupToggle = (muscularGroup: string) => {
    const isSelected = groupsSelected.includes(muscularGroup);

    const updatedSelection = isSelected
      ? groupsSelected.filter((group) => group !== muscularGroup)
      : [...groupsSelected, muscularGroup];

    setGroupsSelected(updatedSelection);
  };

  const handleFilterExercises = () => {
    const filteredExercises =
      groupsSelected.length === 0
        ? originalExercises
        : originalExercises.filter((exercise: any) =>
            groupsSelected.includes(exercise.muscularGroup)
          );

    setExercises(filteredExercises);
  };

  useEffect(() => {
    handleFilterExercises();
  }, [groupsSelected, setExercises]);

  return (
    <Stack direction="row" alignItems="center" gap={theme.spacing(1)}>
      {muscularGroups.map((muscularGroup: string) => (
        <Chip
          size="small"
          color="primary"
          key={muscularGroup}
          label={muscularGroup}
          sx={{ cursor: "pointer" }}
          onClick={() => handleMuscularGroupToggle(muscularGroup)}
          variant={
            groupsSelected.includes(muscularGroup) ? "filled" : "outlined"
          }
        />
      ))}
    </Stack>
  );
}
