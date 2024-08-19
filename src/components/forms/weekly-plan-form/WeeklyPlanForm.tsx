import {
  createWeeklyPlanService,
  updateWeeklyPlanService,
} from "services/plan/plan.services";
import { createErrorToastLib, createSuccessToastLib } from "lib/utils/toast";
import { useReadExercisesDescriptions } from "hooks/exercise/useReadExercisesDescriptions";
import { weeklyPlanFormValidations } from "./lib/validations";
import { DayOfWeek, Plan, PlanDay } from "lib/types/plan/plan.types";
import { Grid, Button, Typography } from "@mui/material";
import type { WeeklyPlanForm } from "./lib/types";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Exercise } from "lib/types/exercise/exercise.types";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddDayForm from "../add-day-form/AddDayForm";
import AccordionDay from "./components/accordion-day/AccordionDay";
import MainInformation from "./components/main-information/MainInformation";
import AddExercisesForm from "../add-exercises-form/AddExercisesForm";
import { CreateWeeklyPlan, UpdateWeeklyPlan } from "services/plan/types";

type Props = {
  plan?: Plan | null;
};

export default function WeeklyPlanForm({ plan }: Props) {
  const editPlan: boolean = Boolean(plan);
  const navigate = useNavigate();

  const { theme } = useThemeContext();
  const { exercisesDescriptions, handleRefetchExercisesDescriptions } =
    useReadExercisesDescriptions();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [daySelected, setDaySelected] = useState<any>(null);
  const [openDrawerDays, setOpenDrawerDays] = useState<boolean>(false);
  const [openExercisesDrawer, setOpenExercisesDrawer] =
    useState<boolean>(false);

  const formik = useFormik<WeeklyPlanForm>({
    initialValues: {
      days: plan?.days || [],
      clients: [],
      name: plan?.name || "",
      planId: plan?.id || "",
      categoryId: plan?.category?.id || null,
    },
    async onSubmit(values) {
      if (editPlan) {
        handleUpdateWeeklyPlan(values);
      } else {
        handlePostWeeklyPlan(values);
      }
    },
    validationSchema: weeklyPlanFormValidations,
    enableReinitialize: true,
  });

  const handlePostWeeklyPlan = async (
    data: CreateWeeklyPlan
  ): Promise<void> => {
    setIsLoading(true);
    handleVerifyDescriptions(data.days);
    try {
      await createWeeklyPlanService(data);

      createSuccessToastLib("Plan creado con éxito");
      navigate("/trainer/plans");
    } catch (error) {
      console.log(error);
      createErrorToastLib("Error al crear el plan");
    }
    setIsLoading(false);
  };

  const handleUpdateWeeklyPlan = async (
    data: UpdateWeeklyPlan
  ): Promise<void> => {
    setIsLoading(true);
    handleVerifyDescriptions(data.days);
    try {
      await updateWeeklyPlanService(data);

      createSuccessToastLib("Plan actualizado con éxito");
      navigate("/trainer/plans");
    } catch (error) {
      console.log(error);
      createErrorToastLib("Error al actualizar el plan");
    }
    setIsLoading(false);
  };

  const handleOnSubmitDrawerDays = (day: DayOfWeek) => {
    setDaySelected(day);
    setOpenExercisesDrawer(true);
  };

  const handleSubmitExercisesDrawer = (selectedExercises: Exercise[]): void => {
    formik.setFieldValue("days", [
      ...formik.values.days,
      {
        dayOfWeek: daySelected,
        exercises: selectedExercises,
      },
    ]);

    setOpenExercisesDrawer(false);
  };

  const handleVerifyDescriptions = (days: PlanDay[] | []) => {
    for (const day of days) {
      if (day && Array.isArray(day.exercises)) {
        for (const exercise of day.exercises) {
          if (!exercise.description) {
            createErrorToastLib("Hay ejercicios sin descripción");
            setIsLoading(false);
            throw "";
          }
        }
      } else {
        createErrorToastLib("Hay ejercicios sin descripción");
        setIsLoading(false);
        throw "";
      }
    }
  };

  return (
    <Grid container spacing={theme?.spacing(4)}>
      <MainInformation formik={formik} plan={plan} />
      <Grid item xs={6} display="flex" alignItems="center">
        <Typography fontWeight={600} fontSize={16}>
          Días de la semana
        </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="flex-end">
        <Button onClick={() => setOpenDrawerDays(true)} startIcon={<AddIcon />}>
          Agregar día
        </Button>
      </Grid>
      {formik?.values?.days
        ?.sort((a: PlanDay, b: PlanDay) => a?.dayOfWeek?.id - b?.dayOfWeek?.id)
        .map((day: PlanDay) => (
          <AccordionDay
            day={day}
            formik={formik}
            key={day?.dayOfWeek?.id}
            exercisesDescriptions={exercisesDescriptions}
            handleRefetchGetExercisesDescriptions={
              handleRefetchExercisesDescriptions
            }
          />
        ))}
      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <Button
          color="primary"
          variant="contained"
          disabled={isLoading}
          onClick={() => formik?.handleSubmit()}
        >
          Guardar plan
        </Button>
      </Grid>
      <AddDayForm
        open={openDrawerDays}
        onSubmit={handleOnSubmitDrawerDays}
        daysAlreadyAdded={formik.values.days}
        onClose={() => setOpenDrawerDays(false)}
      />
      <AddExercisesForm
        open={openExercisesDrawer}
        onSubmit={handleSubmitExercisesDrawer}
        onClose={() => setOpenExercisesDrawer(false)}
      />
    </Grid>
  );
}
