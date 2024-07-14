import { Page, Text, View, Image, Document } from "@react-pdf/renderer";
import { Plan, PlanDay } from "lib/types/plan/plan.types";
import { Exercise } from "lib/types/exercise/exercise.types";
import { styles } from "./styles";
import LogoImage from "../../../../public/Logo.png";
import moment from "moment";

type Props = {
  plan: Plan;
};

export default function WeeklyPlanPdf({ plan }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles?.page}>
        <View style={styles?.header}>
          <View>
            <Text style={styles?.header?.text}>Nombre: {plan?.name}</Text>
            <Text style={styles?.header?.text}>Tipo: {plan?.type?.name}</Text>
            <Text style={styles?.header?.text}>
              Fecha de creación: {moment(plan?.createdAt).format("DD/MM/YY")}
            </Text>
          </View>
          <View>
            <Image style={styles?.header?.logo} src={LogoImage} />
          </View>
        </View>
        <View style={styles?.days}>
          {plan?.days?.map((day: PlanDay, index: number) => (
            <View
              style={{
                ...styles.day,
                backgroundColor: index % 2 ? "#FFFFFF" : "#F7F8FA",
              }}
              key={day?.dayOfWeek?.id}
            >
              <Text style={styles?.day?.name}>{day?.dayOfWeek?.name}</Text>
              {day?.exercises?.map((exercise: Exercise) => (
                <View style={{ paddingBottom: 10 }}>
                  <Text
                    style={{
                      ...styles?.day?.exerciseName,
                      color: exercise?.superset ? "blue" : "",
                    }}
                  >
                    {exercise?.name}{" "}
                    {exercise?.superset ? "- super serie" : null}
                  </Text>
                  <Text style={styles?.day?.exerciseDescription}>
                    {exercise?.description}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
