import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedAt: string[];
  createdAt: string;
}

interface HabitSate {
  habits: Habit[];
  submitHabit: (name: string, frequency: "weekly" | "daily") => void;
  removeHabit: (id: string) => void;
}

const useHabitStore = create<HabitSate>()((set) => {
  return {
    habits: [
      {
        id: "123",
        name: "name",
        frequency: "weekly",
        completedAt: [],
        createdAt: new Date().toISOString(),
      },
    ],
    submitHabit: (name: string, frequency: "weekly" | "daily") =>
      set((state) => {
        return {
          habits: [
            ...state.habits,
            {
              id: new Date().toISOString(),
              name: name,
              frequency: frequency,
              completedAt: [],
              createdAt: new Date().toISOString(),
            },
          ],
        };
      }),
    removeHabit: (id) =>
      set((state) => ({
        habits: state.habits.filter((e) => e.id != id),
      })),
  };
});

export default useHabitStore;
