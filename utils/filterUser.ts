import { User, UserTableValueType } from "@/types/type";



export const filterUsers = (users: User[], filters: Partial<UserTableValueType>): User[] => {
  return users.filter((user) => {
    const { organization, name, email, phone, date, status } = filters;
    const userData = user.tableData;

    return (
      (!organization || userData.organization === organization) &&
      (!name || userData.name.toLowerCase().includes(name.toLowerCase())) &&
      (!email || userData.email.toLowerCase().includes(email.toLowerCase())) &&
      (!phone || userData.phone.includes(phone)) &&
      (!date || userData.date === date) &&
      (!status || userData.status === status)
    );
  });
};