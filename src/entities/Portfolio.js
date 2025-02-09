import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { PortfolioType } from "./PortfolioType";

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn("uuid")
  id;

  @Column("varchar", { length: 50 })
  title;

  @Column("text")
  description;

  @ManyToOne(() => PortfolioType, { nullable: false })
  @JoinColumn()
  portfolioType;

  @CreateDateColumn()
  created_at;
}
