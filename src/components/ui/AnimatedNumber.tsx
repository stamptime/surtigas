import { cn } from "@/utils/cn";
import NumberFlow from "@number-flow/react";

interface AnimatedNumber {
  className?: string;
  value: number;
}

const AnimatedNumber = ({ className, value }: AnimatedNumber) => {
  return <NumberFlow value={value} className={cn(className)} />;
};

export default AnimatedNumber;
