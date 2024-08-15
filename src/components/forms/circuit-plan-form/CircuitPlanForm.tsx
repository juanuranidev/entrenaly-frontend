import {
  createCircuitPlanService,
  updateCircuitPlanService,
  // createWeeklyPlanService,
  // updateWeeklyPlanService,
} from "services/plan/plan.services";
import { createErrorToastLib, createSuccessToastLib } from "lib/utils/toast";
import { useReadExercisesDescriptions } from "hooks/exercise/useReadExercisesDescriptions";
import { weeklyPlanFormValidations } from "./lib/validations";
import { DayOfWeek, Plan, PlanDay } from "lib/types/plan/plan.types";
import { Grid, Button, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddDayForm from "../add-day-form/AddDayForm";
import PlanMainInformationForm from "../plan-main-information-form/PlanMainInformationForm";
import AccordionDayWithCircuitsForm from "./components/accordion-day-with-circuits-form/AccordionDayWithCircuitsForm";

type Props = {
  plan?: Plan | null;
};

export default function CircuitPlanForm({ plan }: Props) {
  const editPlan: boolean = Boolean(plan);
  const navigate = useNavigate();

  const { theme } = useThemeContext();
  const { exercisesDescriptions, handleRefetchExercisesDescriptions } =
    useReadExercisesDescriptions();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDrawerDays, setOpenDrawerDays] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      days: plan?.days || [],
      clients: [],
      name: plan?.name || "",
      planId: plan?.id || null,
      categoryId: plan?.category?.id || "",
    },
    async onSubmit(values) {
      handleVerifyDescriptions(values.days);
      if (editPlan) {
        handleUpdateWeeklyPlan(values);
      } else {
        handlePostCircuitPlan(values);
      }
    },
    validationSchema: weeklyPlanFormValidations,
    enableReinitialize: true,
  });

  const handlePostCircuitPlan = async (data: any) => {
    setIsLoading(true);
    try {
      await createCircuitPlanService(data);

      createSuccessToastLib("Plan creado con éxito");
      navigate("/trainer/plans");
    } catch (error) {
      console.log(error);
      createErrorToastLib("Error al crear el plan");
    }
    setIsLoading(false);
  };

  const handleUpdateWeeklyPlan = async (data: any) => {
    setIsLoading(true);
    try {
      await updateCircuitPlanService(data);

      createSuccessToastLib("Plan actualizado con éxito");
      navigate("/trainer/plans");
    } catch (error) {
      console.log(error);
      createErrorToastLib("Error al actualizar el plan");
    }
    setIsLoading(false);
  };

  const handleOnSubmitDrawerDays = (day: DayOfWeek) => {
    formik.setFieldValue("days", [
      ...formik.values.days,
      {
        dayOfWeek: day,
        circuits: [],
      },
    ]);
    setOpenDrawerDays(false);
  };

  const handleVerifyDescriptions = (days: any) => {
    for (const day of days) {
      for (const circuit of day.circuits) {
        for (const exercise of circuit.exercises) {
          if (!exercise.description) {
            createErrorToastLib(
              "Hay ejercicios en los circuitos sin descripción"
            );
            setIsLoading(false);
            throw "";
          }
        }
      }
    }
  };
  return (
    <Grid container spacing={theme?.spacing(4)}>
      <PlanMainInformationForm formik={formik} plan={plan} />
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
        ?.sort((a: PlanDay, b: PlanDay) => a.dayOfWeek.id - b.dayOfWeek.id)
        .map((day: PlanDay) => (
          <AccordionDayWithCircuitsForm
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
    </Grid>
  );
}
