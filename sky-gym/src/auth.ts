export type AuthRole = "User" | "Admin";

export interface AuthUser {
  name: string;
  email: string;
  password: string;
  role: AuthRole;
}

export const STORAGE_KEY = "sky-gym-users";
export const CURRENT_USER_KEY = "sky-gym-user";

export const demoAccounts: Record<AuthRole, { email: string; password: string }> = {
  User: { email: "user@skygym.com", password: "member123" },
  Admin: { email: "admin@skygym.com", password: "admin123" },
};

export function readUsers(): AuthUser[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveUsers(users: AuthUser[]) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }
}

export function readCurrentUser(): AuthUser | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(CURRENT_USER_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function saveCurrentUser(user: AuthUser) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  }
}

export function clearCurrentUser() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(CURRENT_USER_KEY);
  }
}
