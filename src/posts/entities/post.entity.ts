import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Blog {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "varchar", length: 255 })
  title: string

  @Column()
  content: string
}