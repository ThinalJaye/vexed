"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { useReducedMotion } from "motion/react";
import {
  DEFAULT_THEME,
  THEME_CYCLE_MS,
  THEME_ORDER,
  type ThemeId,
} from "@/data/themes";

interface ThemeContextValue {
  themeId: ThemeId;
  /** User intent: automatic cycle on/off */
  autoPlay: boolean;
  /** Effective state: autoPlay && tab visible && motion allowed (hydration-safe) */
  playing: boolean;
  /** Hydration-safe reduced-motion flag */
  reducedMotion: boolean;
  /** Manual selection: applies theme and pauses the automatic cycle */
  selectTheme: (id: ThemeId) => void;
  toggleAutoPlay: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}
const getVisible = () => !document.hidden;
const getServerVisible = () => true;

const emptySubscribe = () => () => {};
const getClientTrue = () => true;
const getServerFalse = () => false;

/**
 * Owns the selected T-shirt theme and the automatic 5-colour cycle.
 * Syncs `data-theme` on both <html> and the scope element.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const hydrated = useSyncExternalStore(emptySubscribe, getClientTrue, getServerFalse);
  const rawReducedMotion = useReducedMotion();
  const reducedMotion = hydrated && Boolean(rawReducedMotion);
  const tabVisible = useSyncExternalStore(subscribeVisibility, getVisible, getServerVisible);

  const [themeId, setThemeId] = useState<ThemeId>(DEFAULT_THEME);
  const [autoPlay, setAutoPlay] = useState(true);

  const playing = autoPlay && tabVisible && !reducedMotion;

  useEffect(() => {
    document.documentElement.dataset.theme = themeId;
  }, [themeId]);

  useEffect(() => {
    if (!hydrated || !playing) return;
    const timer = window.setInterval(() => {
      setThemeId((current) => {
        const i = THEME_ORDER.indexOf(current);
        return THEME_ORDER[(i + 1) % THEME_ORDER.length];
      });
    }, THEME_CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [hydrated, playing]);

  const selectTheme = useCallback((id: ThemeId) => {
    setAutoPlay(false);
    setThemeId(id);
  }, []);

  const toggleAutoPlay = useCallback(() => setAutoPlay((v) => !v), []);

  const value = useMemo(
    () => ({ themeId, autoPlay, playing, reducedMotion, selectTheme, toggleAutoPlay }),
    [themeId, autoPlay, playing, reducedMotion, selectTheme, toggleAutoPlay]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        data-theme={themeId}
        className="theme-scope min-h-screen bg-h-bg text-h-fg"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
