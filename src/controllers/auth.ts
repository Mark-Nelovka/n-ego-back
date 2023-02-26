import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user from "../../user.json";

async function userLogin(req: Request, res: Response) {
  const { name, password } = req.body;
  let checkName: boolean
  let checkPassword: boolean

  const isMatch = await bcrypt.compare(password, user.password);

  checkName = name !== user.userName ? false : true;

  checkPassword = !isMatch ? false : true;
  if (!checkName || !checkPassword) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Name or password invalid",
      data: {
        name: checkName,
        password: checkPassword
      }
    })
  }

    const token = jwt.sign({ username: "admin" }, "Popap");
    res.status(200).json({ token });
}

export default userLogin;