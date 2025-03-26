import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedAt: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  submitHabit: (name: string, frequency: "weekly" | "daily") => void;
  removeHabit: (id: string) => void;
  toggleHabit: (id: string, date: string) => void;
}

const useHabitStore = create<HabitState>()((set) => {
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
    toggleHabit: (id, date) =>
      set((state) => ({
        habits: state.habits.map((habit) =>
          habit.id == id
            ? {
                ...habit,
                completedAt: habit.completedAt.includes(date)
                  ? habit.completedAt.filter((d) => d !== date)
                  : [...habit.completedAt, date],
              }
            : habit
        ),
      })),
  };
});

export default useHabitStore;
