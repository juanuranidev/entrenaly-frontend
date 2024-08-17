import { Page, Text, View, Image, Document } from "@react-pdf/renderer";
import { DayCircuit, Plan, PlanDay } from "lib/types/plan/plan.types";
import { Exercise } from "lib/types/exercise/exercise.types";
import { styles } from "./styles";
import LogoImage from "../../../../public/Logo.png";
import moment from "moment";

type Props = {
  plan: Plan;
};

export default function CircuitPlanPdf({ plan }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles?.page}>
        <View style={styles?.header}>
          <View>
            <Text style={styles?.header?.text}>{plan?.name}</Text>
            <Text style={styles?.header?.text}>Tipo: {plan?.type?.name}</Text>
            <Text style={styles?.header?.text}>
              Inicio: {moment(plan?.createdAt).format("DD/MM/YY")}
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
              {day?.circuits?.map((circuit: DayCircuit, index: number) => (
                <View style={{ paddingBottom: 10 }}>
                  <Text style={{ paddingBottom: 5, fontSize: 12 }}>
                    {`Circuito ${index + 1} - ${circuit?.description}`}
                  </Text>
                  {circuit?.exercises?.map((exercise: Exercise) => (
                    <View style={{ paddingBottom: 10 }}>
                      <Text
                        style={{
                          ...styles?.day?.exerciseName,
                          color: exercise?.superset ? "#305FDE" : "",
                        }}
                      >
                        {exercise?.name}
                      </Text>
                      <Text style={styles?.day?.exerciseDescription}>
                        {exercise?.description}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
