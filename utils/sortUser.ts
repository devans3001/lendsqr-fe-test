import { User } from "@/types/type";


export const sortUsers = (filteredUsers:User[], sortKey:string | null, sortOrder:"asc" | "desc") => {
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (!sortKey) return 0;

    const key = sortKey.toLowerCase();

    let aVal: string | number = "";
    let bVal: string | number = "";

    switch (key) {
      case "organization":
        aVal = a.tableData.organization;
        bVal = b.tableData.organization;
        break;
      case "username":
        aVal = a.tableData.name;
        bVal = b.tableData.name;
        break;
      case "email":
        aVal = a.tableData.email;
        bVal = b.tableData.email;
        break;
      case "phone number":
        aVal = a.tableData.phone;
        bVal = b.tableData.phone;
        break;
      case "date joined":
        aVal = a.tableData.date;
        bVal = b.tableData.date;
        break;
      case "status":
        aVal = a.tableData.status;
        bVal = b.tableData.status;
        break;
      default:
        return 0;
    }

    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return sortedUsers;
};
