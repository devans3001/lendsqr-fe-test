import { dummyData } from "@/utils/data";
import { filterUsers } from "@/utils/filterUser";


describe("filterUsers", () => {
  it("should return all users if no filters are applied", () => {
    const result = filterUsers(dummyData, {});
    expect(result).toHaveLength(2);
  });

  it("should filter by organization", () => {
    const result = filterUsers(dummyData, { organization: "Lendsqr" });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
  });

  it("should filter by name partial match", () => {
    const result = filterUsers(dummyData, { name: "Jane" });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
  });

  it("should filter by multiple fields", () => {
    const result = filterUsers(dummyData, { organization: "Lendsqr", status: "active" });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
  });

  it("should return empty if no match", () => {
    const result = filterUsers(dummyData, { organization: "UnknownOrg" });
    expect(result).toHaveLength(0);
  });

  it("should filter by formatted date", () => {
    const result = filterUsers(dummyData, { date: "2025-07-16" });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
  });
});
