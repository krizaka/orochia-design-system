"use client";

import { orochiaButton } from "@krizaka/orochia-design-system/classes";
import { Button } from "@krizaka/ui/button";
import { useState } from "react";

// An auction panel: the bid is escrowed while the button shows its pending state.
export default function PlaceBid() {
  const [pending, setPending] = useState(false);
  const bid = () => {
    setPending(true);
    setTimeout(() => setPending(false), 1500);
  };
  return (
    <Button className={orochiaButton({ variant: "sensual", shape: "pill" })} loading={pending} onClick={bid}>
      Bid $120
    </Button>
  );
}
