import { faker } from "@faker-js/faker";
import { User } from "@/types/type";

export function generateMockUsers(count: number = 50): User[] {
  return Array.from({ length: count }).map(() => {
    const fullName = faker.person.fullName();
    const email = faker.internet.email();
    const phone = faker.phone.number({ style: "national" });
    const organization = faker.helpers.arrayElement(["Irorun","Lendstar","Opay","Palmpay","Lapo"]);

    return {
      id: faker.string.uuid(),
      hasLoan: faker.datatype.boolean(),
      hasSavings: faker.datatype.boolean(),

      tableData: {
        organization,
        name: fullName,
        email,
        phone,
        date: faker.date.past().toISOString(),
        status: faker.helpers.arrayElement([
          "active",
          "blacklist",
          "pending",
          "inactive",
        ]),
      },
      profile: {
        fullName,
        phoneNumber: phone,
        email,
        bvn: faker.finance.accountNumber(10),
        gender: faker.person.sexType(),
        maritalStatus: faker.helpers.arrayElement(["Single", "Married"]),
        children: faker.helpers.arrayElement(["None", "1", "2"]),
        residenceType: faker.helpers.arrayElement([
          "Parent's Apartment",
          "Self-owned",
          "Rented",
        ]),
      },
      education: {
        level: faker.helpers.arrayElement(["B.Sc", "M.Sc", "ND", "HND"]),
        employmentStatus: faker.helpers.arrayElement([
          "Employed",
          "Unemployed",
        ]),
        sector: faker.commerce.department(),
        duration: `${faker.number.int({ min: 1, max: 5 })} years`,
        officeEmail: faker.internet.email(),
        monthlyIncome: [
          `₦${faker.number.int({ min: 150000, max: 300000 })}`,
          `₦${faker.number.int({ min: 301000, max: 500000 })}`,
        ],
        loanRepayment: `₦${faker.number.int({ min: 10000, max: 80000 })}`,
      },
      socials: {
        twitter: `@${faker.internet.username()}`,
        facebook: fullName,
        instagram: `@${faker.internet.username()}`,
      },
      guarantors: Array.from({
        length: faker.number.int({ min: 1, max: 4 }),
      }).map(() => ({
        fullName: faker.person.fullName(),
        phoneNumber: faker.phone.number({ style: "national" }),
        email: faker.internet.email(),
        relationship: faker.helpers.arrayElement([
          "Brother",
          "Sister",
          "Friend",
          "Colleague",
        ]),
      })),
    };
  });
}
