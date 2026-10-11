import { StatusBadge } from "@krizaka/orochia-design-system";

// The stages of a challenge, one tone each: moving, closing, settled, over.
export default function ChallengeStages() {
  return (
    <div className="flex flex-wrap gap-2">
      <StatusBadge label="Taking pledges" tone="active" />
      <StatusBadge label="Closes in 2 h" tone="upcoming" />
      <StatusBadge label="Funded" tone="success" />
      <StatusBadge label="Ended" tone="muted" />
    </div>
  );
}
