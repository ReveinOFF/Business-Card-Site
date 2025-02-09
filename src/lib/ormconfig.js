require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Portfolio } from "@/entities/Portfolio";
import { PortfolioType } from "@/entities/PortfolioType";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: true,
  entities: [Portfolio, PortfolioType],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => console.log("Database connection error:", error));
