import { orochiaButton } from "@krizaka/orochia-design-system/classes";
import { Button } from "@krizaka/ui/button";

// The money moment of a video page: the amount in the label.
export default function Tip() {
  return <Button className={orochiaButton({ variant: "sensual", shape: "pill" })}>Tip $5</Button>;
}
