import { Request, Response } from "express";
import { users } from "../data/users";
import { User } from "../models/user";

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({
    data: users,
  });
};

export const createUser = (req: Request, res: Response) => {
  const newUser: User = req.body;
  users.push(newUser);

  res.status(201).json({
    message: "User created",
  });
};

export const updateUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updateUser: User = req.body;

  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updateUser };

    res.status(201).json({
      message: "User updated",
      data: users[index],
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    const deletedUser = users[index];
    users.splice(index, 1);

    res.status(200).json({
      message: "User deleted",
      data: deletedUser,
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};
