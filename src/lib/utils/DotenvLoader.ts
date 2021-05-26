import * as dotenv from 'dotenv' 
dotenv.config()

export class DotEnv {
    static secret(): string {return process.env.SECRET}
}