import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Ram',
        email:'ram@gmail.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Raj',
        email:'raj@gmail.com',
        password:bcrypt.hashSync('123456',10),
    },
]

export default users