import prisma from "../../lib/prisma";

export default async (req, res) => {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    res.json(users);
  } else if (req.method === "POST") {
    const { username } = req.body;
    const user = await prisma.user.create({
      data: { username },
    });
    res.json(user);
  } else {
    res.status(405).end();
  }
};
