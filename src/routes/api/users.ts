import {connectToDatabase} from '$lib/utils/Db'
import { ErrorFactory } from '$lib/utils/ServerResponse'
import { not_found, ok, server_error } from '$lib/utils/ServerResponse'
import type {Collection} from 'mongodb'
export async function get(req){
    try {
        const dbConnection = await connectToDatabase()
        const db = dbConnection.db
        const collection: Collection = db.collection('user')
        const user = await collection.find().toArray()
      
        return ok({users: user})
    } catch (err){
        return ErrorFactory(err)
    }
    
    
}