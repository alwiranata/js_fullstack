import * as yup from "yup"
import { users } from "../data/users"

const isIdUnique = async (id: number | undefined): Promise<boolean> => {
  if (typeof id !== "number") return false
  const existing = users.find((user) => user.id === id) 
  return !existing 
}


export const userSchema =  yup.object({
    id : yup.number().required().test('unique-id', "ID sudah digunakan" , async function(value) {
      return await isIdUnique(value)
    }),
    name : yup.string().required("Name is required"),
    email : yup.string().email("Invalid email format").required("Email is Required")
})