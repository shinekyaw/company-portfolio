import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconTileProps {
  icon?: keyof typeof LucideIcons | React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IconTile({
  icon,
  children,
  size = "md",
  className,
}: IconTileProps) {
  const sizeClasses = {
    sm: "w-11 h-11",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 28,
  };

  let renderedIcon: React.ReactNode = null;

  if (typeof icon === "string" && icon in LucideIcons) {
    const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<{
      size?: number;
      strokeWidth?: number;
      className?: string;
    }>;
    renderedIcon = (
      <IconComponent
        size={iconSizes[size]}
        strokeWidth={1.5}
        className="text-[#d1e4fa] transition-colors"
      />
    );
  } else if (icon) {
    const IconComponent = icon as React.ComponentType<{
      size?: number;
      strokeWidth?: number;
      className?: string;
    }>;
    renderedIcon = (
      <IconComponent
        size={iconSizes[size]}
        strokeWidth={1.5}
        className="text-[#d1e4fa] transition-colors"
      />
    );
  }

  return (
    <div
      className={cn(
        "rounded-[9999px] bg-[rgba(186,214,247,0.06)] shadow-hairline flex items-center justify-center shrink-0 border-0",
        sizeClasses[size],
        className
      )}
    >
      {renderedIcon || children}
    </div>
  );
}
