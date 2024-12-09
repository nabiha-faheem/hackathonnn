// src/lib/utils.ts

// This function will join class names conditionally
export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  