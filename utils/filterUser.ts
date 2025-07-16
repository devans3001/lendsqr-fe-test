import { User, UserTableValueType } from "@/types/type";
import { format, parseISO } from "date-fns";


export const filterUsers = (users: User[], filters: Partial<UserTableValueType>): User[] => {
  return users.filter((user) => {
    const { organization, name, email, phone, date, status } = filters;
    const userData = user.tableData;

  
    const parsedDate = parseISO(userData.date);
    const formattedDate = format(parsedDate, 'yyyy-MM-dd');

    return (
      (!organization || userData.organization.toLowerCase() === organization) &&
      (!name || userData.name.toLowerCase().includes(name.toLowerCase())) &&
      (!email || userData.email.toLowerCase().includes(email.toLowerCase())) &&
      (!phone || userData.phone.includes(phone)) &&
      (!date || formattedDate === date) &&
      (!status || userData.status === status)
    );
  });
};