/**
 * __tests__/Login.test.tsx
 */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "@/app/login/page";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as helper from "@/utils/helper";
import * as hooks from "@/hooks/useLocalStorage";

// 1️⃣ MOCKS
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));
jest.mock("@/utils/helper", () => ({
  hashPassword: jest.fn(() => Promise.resolve("hashedPass")),
}));
jest.mock("@/hooks/useLocalStorage", () => ({
  useLocalStorageState: jest.fn(),
}));
jest.mock("@/hooks/useViewport", () => ({
  useViewport: () => ({ md: false }),
}));

describe("Login Component", () => {
  const push = jest.fn();
  const setUser = jest.fn();

  beforeEach(() => {
    // clear mocks for each test
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push });
    (hooks.useLocalStorageState as jest.Mock).mockReturnValue([null, setUser]);
  });

it("should show required error for empty email", async() => {
  render(<Login />);
  fireEvent.click(screen.getByRole("button", { name: /login/i }));
  expect(await screen.findByText("Email is required")).toBeInTheDocument();
});

it("should show invalid email format error", async () => {
  render(<Login />);
  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: "invalidemail" },
  });
  fireEvent.click(screen.getByRole("button", { name: /login/i }));
  expect(await screen.findByText("Invalid email format")).toBeInTheDocument();
});

it("should show required error for empty password", async () => {
  render(<Login />);
  fireEvent.click(screen.getByRole("button", { name: /login/i }));
  expect(await screen.findByText("Password is required")).toBeInTheDocument();
});

it("should show min length error for short password", async () => {
  render(<Login />);
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: "123" },
  });
  fireEvent.click(screen.getByRole("button", { name: /login/i }));
  expect(await screen.findByText("Password must be at least 6 characters")).toBeInTheDocument();
});

  it("should hash password, store user, show toast and redirect on valid input", async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(helper.hashPassword).toHaveBeenCalledWith("123456");
    });

    await waitFor(() => {
      expect(setUser).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "hashedPass",
      });
      expect(toast.success).toHaveBeenCalled();
      expect(push).toHaveBeenCalledWith("/dashboard/users");
    });
  });
});
