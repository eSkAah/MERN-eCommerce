import bcrypt from "bcryptjs";

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "jd@admin.fr",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jd2@admin.fr",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    id: 3,
    name: "Admin User",
    email: "au@admin.fr",
    password: bcrypt.hashSync("123456", 10),
  },
];
