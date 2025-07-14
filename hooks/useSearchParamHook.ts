
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

//https://dev-shelf.vercel.app/docs/snippets/react-hooks

export function useSearchParamsHook() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // All params as an object
  const params = useMemo(() => {
    const obj: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }, [searchParams]);

  // Get a single param
  const getParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  // Set/update a single param
  const setParam = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set(key, value);
      router.push(`?${newParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Remove a param
  const removeParam = useCallback(
    (key: string) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete(key);
      router.push(`?${newParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Set multiple params at once
  const setMultipleParams = useCallback(
    (newParamsObj: Record<string, string>) => {
      const newParams = new URLSearchParams(searchParams.toString());
      Object.entries(newParamsObj).forEach(([key, value]) => {
        newParams.set(key, value);
      });
      router.push(`?${newParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return {
    params,
    getParam,
    setParam,
    removeParam,
    setMultipleParams,
  };
}
