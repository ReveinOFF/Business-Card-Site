import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PortfolioType {
  @PrimaryGeneratedColumn("uuid")
  id;

  @Column("varchar", { length: 20, unique: true })
  titleCode;
}
