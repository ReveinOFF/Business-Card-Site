import { NextApiRequest, NextApiResponse } from "next";
import { AppDataSource } from "../../lib/ormconfig";
import { Portfolio } from "@/entities/Portfolio";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  const portfolioRepo = AppDataSource.getRepository(Portfolio);

  switch (req.method) {
    case "GET": {
      try {
        const portfolios = await portfolioRepo.find({
          relations: ["portfolioType"],
        });
        return res.status(200).json(portfolios);
      } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
      }
    }
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
