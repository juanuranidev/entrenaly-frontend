import {
  readCircuitPlanService,
  readWeeklyPlanService,
} from "services/plan/plan.services";
import { createErrorToastLib } from "../toast";
import { PLAN_CONSTANTS } from "lib/constants/plan/plan.constants";
import CircuitPlanPdf from "components/pdfs/circuit-plan/CircuitPlanPdf";
import WeeklyPlanPdf from "components/pdfs/weekly-plan/WeeklyPlanPdf";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";

export const downloadPdfLib = async (
  planType: string,
  planId: string | undefined
) => {
  switch (planType) {
    case PLAN_CONSTANTS.TYPES.WEEKLY:
      try {
        if (!planId) return createErrorToastLib("Error al descargar pdf");

        const plan = await readWeeklyPlanService(planId);
        const blob = await pdf(<WeeklyPlanPdf plan={plan} />).toBlob();

        return saveAs(blob, `${plan?.name}.pdf`);
      } catch (error) {
        return createErrorToastLib("Error al descargar pdf");
      }
    case PLAN_CONSTANTS.TYPES.CIRCUIT:
      try {
        if (!planId) return createErrorToastLib("Error al descargar pdf");

        const plan = await readCircuitPlanService(planId);
        const blob = await pdf(<CircuitPlanPdf plan={plan} />).toBlob();

        return saveAs(blob, `${plan?.name}.pdf`);
      } catch (error) {
        return createErrorToastLib("Error al descargar pdf");
      }
    default:
      return createErrorToastLib("Error al descargar pdf");
  }
};
