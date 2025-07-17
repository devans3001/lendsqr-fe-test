import { dummyData } from "@/utils/data";
import { sortUsers } from "@/utils/sortUser";



describe("sortUsers", () => {
  it("should sort by username ascending", () => {
    const sorted = sortUsers(dummyData, "username", "asc");
    expect(sorted[0].tableData.name).toBe("Adedeji");
  });

  it("should sort by username descending", () => {
    const sorted = sortUsers(dummyData, "username", "desc");
    expect(sorted[0].tableData.name).toBe("Jane");
  });
});
