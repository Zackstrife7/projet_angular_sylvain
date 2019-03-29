import { User } from './user';

export class Message {
    id: number;
    text:string;
    sender: User;
    
    
}
// pour recuperer la conversation avec son id , http://localhsot:3000/conversations/1?_embed=messages ==>