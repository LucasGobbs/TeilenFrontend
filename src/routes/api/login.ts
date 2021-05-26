import {connectToDatabase} from '$lib/utils/Db'
import { ErrorFactory } from '$lib/utils/ServerResponse'
import { not_found, ok, server_error } from '$lib/utils/ServerResponse'
import type {Collection} from 'mongodb'
export async function post(req){
    try {
        const dbConnection = await connectToDatabase()
        const db = dbConnection.db
        const collection: Collection = db.collection('user')
        const body = JSON.parse(req.body)
        const user = await collection.findOne({name: body['user']})

        if(user){
            if(user.password == body['password']){
                return ok({id: user._id});
            } else {
                throw new Error('IncorrectPassword')
            }
        } else {
            throw new Error('NotFound')
        }
    } catch (err){
        return ErrorFactory(err)
    }
    
    
}