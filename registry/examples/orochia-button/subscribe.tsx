import { orochiaButton } from "@krizaka/orochia-design-system/classes";
import { Button } from "@krizaka/ui/button";

// A profile header: one sensual call to action, a quiet second action beside it.
export default function Subscribe() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button className={orochiaButton({ variant: "sensual", size: "lg", shape: "pill" })}>Subscribe · $9.99 a month</Button>
      <Button variant="ghost" size="lg" shape="pill">
        Message
      </Button>
    </div>
  );
}
