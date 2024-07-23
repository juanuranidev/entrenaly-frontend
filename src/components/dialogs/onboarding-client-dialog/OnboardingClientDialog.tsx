type Props = {
  open: boolean;
  close: () => void;
};

export default function OnboardingClientDialog({ open, close }: Props) {
  console.log(open, close);
  return <div>OnboardingClientDialog</div>;
}
