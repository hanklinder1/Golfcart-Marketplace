"use client";

import { usePathname, useRouter } from "next/navigation";

export function useDemo() {
  const pathname = usePathname();
  const router = useRouter();
  const isDemo = pathname.startsWith("/demo");

  const toggleDemo = () => {
    if (isDemo) {
      router.push("/");
    } else {
      router.push("/demo");
    }
  };

  return { isDemo, toggleDemo };
}
