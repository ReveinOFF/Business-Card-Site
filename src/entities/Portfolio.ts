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
  id!: string;

  @Column("varchar", { length: 50, nullable: false })
  title!: string;

  @Column("varchar", { length: 50, unique: true, nullable: false })
  imageName!: string;

  @Column("text")
  description!: string;

  @ManyToOne(() => PortfolioType, { nullable: false })
  @JoinColumn()
  portfolioType!: PortfolioType;

  @CreateDateColumn()
  created_at!: Date;
}
