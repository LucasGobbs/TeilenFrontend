import {connectToDatabase} from '$lib/utils/Db'
import {ErrorFactory, ok} from '$lib/utils/ServerResponse'
import type {Collection} from 'mongodb'
export async function post(req){
    try{
        const dbConnection = await connectToDatabase()
        const db = dbConnection.db
        const collection: Collection = db.collection('user')
        const body = JSON.parse(req.body)
        const user = {
            name: body['user'],
            password: body['password']
        }
        const already_exissts = await collection.findOne({name: body['user']})
        if(already_exissts){
            throw new Error('UserAlreadySignUp')
        }
        const result = await collection.insertOne(user)
        return ok({result: result.insertedId})
        
    }catch(err){
        return ErrorFactory(err)
    }
    
    
}