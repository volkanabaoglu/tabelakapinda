import bcrypt from "bcryptjs"
const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin : true,

    },
    {
        name: "Kadir Eren",
        email: "kadir@email.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin : false,
    },
    {
        name: "volkan abaoglu",
        email: "volkan@email.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin : false,
    },
    {
        name: "irem sevval",
        email: "irem@email.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin : false,
    },
    {
        name: "burak tamaka",
        email: "burak@email.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin : false,
    }
];

export default users;   