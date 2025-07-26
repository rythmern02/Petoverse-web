import * as React from "react"

import { cn } from "@/lib/utils"

const GlassmorphismCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass-card rounded-[2rem] p-6 shadow-lg", // Increased border-radius for more organic feel
        className,
      )}
      {...props}
    />
  ),
)
GlassmorphismCard.displayName = "GlassmorphismCard"

export { GlassmorphismCard }
