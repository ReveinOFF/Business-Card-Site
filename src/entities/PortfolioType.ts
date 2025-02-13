import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PortfolioType {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar", { length: 20, unique: true })
  titleCode!: string;
}
