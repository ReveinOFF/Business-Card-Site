import { AppDataSource } from "../../lib/ormconfig";

export default async function handler(req, res) {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  const portfolioRepo = AppDataSource.getRepository(Portfolio);

  switch (req.method) {
    case "GET": {
      try {
        const portfolios = await portfolioRepo.find({
          relations: ["productType"],
        });
        return res.status(200).json(portfolios);
      } catch (error) {
        console.error("Error handling request:", error.message);
        return res.status(500).json({ message: "Internal server error" });
      }
    }
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
