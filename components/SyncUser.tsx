"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

export function SyncUser() {
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      fetch("/api/user").catch(console.error);
    }
  }, [userId]);

  return null;
}
