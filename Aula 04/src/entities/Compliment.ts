import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "../entities/Tag"
import { User } from "../entities/User"
@Entity("compliments")
export class Compliment { 

    @PrimaryColumn()
    readonly id: string;
  
    @Column()
    user_sender: string;

    @Column()
    user_receiver: string;

    @Column()
    tag_id: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User )
    userReceiver: User;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: string;

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

// 