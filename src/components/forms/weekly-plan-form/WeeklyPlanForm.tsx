import {
  handleFormatDays,
  weeklyPlanFormValidations,
} from "./components/Utils";
import {
  createWeeklyPlanService,
  updateWeeklyPlanService,
} from "services/plan/plan.services";
import {
  toPutWeeklyPlanDataAdapter,
  toPostWeeklyPlanDataAdapter,
} from "./adapters";
import { Grid, Button, Typography } from "@mui/material";
import { errorToast, successToast } from "lib/utils/toast";
import { useEffect, useState } from "react";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import AddIcon from "@mui/icons-material/Add";
import AddDayDrawer from "./components/add-day-drawer/AddDayDrawer";
import AccordionDay from "./components/accordion-day/AccordionDay";
import MainInformation from "./components/main-information/MainInformation";
import AddExercisesForm from "./components/add-exercises-form/AddExercisesForm";
import { useReadExercisesDescriptions } from "hooks/exercise/useReadExercisesDescriptions";

type Props = {
  plan?: any;
};

export default function WeeklyPlanForm({ plan }: Props) {
  const editPlan = plan ? true : false;
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  const { exercisesDescriptions, handleRefetchExercisesDescriptions } =
    useReadExercisesDescriptions();

  const [isLoading, setIsLoading] = useState(false);
  const [daySelected, setDaySelected] = useState<any>(null);
  const [openDrawerDays, setOpenDrawerDays] = useState(false);
  const [openExercisesDrawer, setOpenExercisesDrawer] = useState(false);

  const formik = useFormik({
    initialValues: {
      days: [],
      clients: [],
      name: plan?.name || "",
      planId: plan?.id || null,
      categoryId: plan?.category?.id || "",
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

  const handlePostWeeklyPlan = async (data: any) => {
    setIsLoading(true);
    handleVerifyDescriptions(data.days);
    try {
      await createWeeklyPlanService(toPostWeeklyPlanDataAdapter(data));

      successToast("Plan creado con éxito");
      navigate("/trainer/plans");
    } catch (error) {
      console.log(error);
      errorToast("Error al crear el plan");
    }
    setIsLoading(false);
  };

  const handleUpdateWeeklyPlan = async (data: any) => {
    setIsLoading(true);
    handleVerifyDescriptions(data.days);
    try {
      await updateWeeklyPlanService(toPutWeeklyPlanDataAdapter(data));

      successToast("Plan actualizado con éxito");
      navigate("/trainer/plans");
    } catch (error) {
      console.log(error);
      errorToast("Error al actualizar el plan");
    }
    setIsLoading(false);
  };

  const handleOnSubmitDrawerDays = (day: any) => {
    setDaySelected(day);
    setOpenExercisesDrawer(true);
  };

  const handleSubmitExercisesDrawer = (selectedExercises: any) => {
    const dayWithExercises = {
      dayOfWeekId: daySelected?.id,
      dayOfWeekName: daySelected?.name,
      exercises: selectedExercises,
    };

    formik.setFieldValue("days", [...formik.values.days, dayWithExercises]);

    setOpenExercisesDrawer(false);
  };

  const handleFormatInitialData = () => {
    if (!editPlan) return;

    const days = handleFormatDays(plan?.days);
    formik.setFieldValue("days", days);
  };

  const handleVerifyDescriptions = (days: any) => {
    for (const day of days) {
      for (const exercise of day.exercises) {
        if (!exercise.description) {
          errorToast("Hay ejercicios sin descripción");
          setIsLoading(false);
          throw "";
        }
      }
    }
  };

  useEffect(() => {
    handleFormatInitialData();
  }, [plan]);

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
        ?.sort((a: any, b: any) => a.dayOfWeekId - b.dayOfWeekId)
        .map((day: any) => (
          <AccordionDay
            key={day?.dayOfWeekId}
            day={day}
            formik={formik}
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
      <AddDayDrawer
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
