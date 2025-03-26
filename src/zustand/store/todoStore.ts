import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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

const useHabitStore = create<HabitState>()(
  persist(
    (set) => {
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
    },
    {
      name: "habits-local",
      // storage: createJSONStorage(() => localStorage), // By default its local storage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useHabitStore;
