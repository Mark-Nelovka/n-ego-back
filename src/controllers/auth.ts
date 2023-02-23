import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const user = require("../../src/user.json")
// import user from "../../src/user.json";

async function userLogin(req: Request, res: Response) {
    const { name, password } = req.body;

    if (name !== user.userName) {
        res.status(400).json({ message: 'Неверный userName' });
        return;
    }

    const isMatch = await bcrypt.compare(password, user.password);


    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль' });
    }

    const token = jwt.sign({ username: "admin" }, "Popap");
    res.status(200).json({ token });
}

export default userLogin;