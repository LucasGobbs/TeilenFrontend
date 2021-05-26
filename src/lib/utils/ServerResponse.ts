export const ok = (body: any): any => { return {status: 200, body} }
export const server_error = (body: any): any => { return {status: 500, body} }

//NotFound
export const throw_not_found = (): Error => {return Error('NotFound')}
export const not_found = (): any => { return {status: 404, body: {message: 'Usuário não encontrado'}} }


// Generic Handler
export const ErrorFactory = (err: Error): any => {
    if(err.message=='NotFound'){
        return not_found()
    }
    return server_error({message: err.message});
}