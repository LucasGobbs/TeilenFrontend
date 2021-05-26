import type WebSocket from "ws"
import type {Update} from "@codemirror/collab"
import {ChangeSet, EditorState, Text} from "@codemirror/state"
export class WebSocketClient {
    
    constructor(public socket: WebSocket){}
    async request(data: any): Promise<any>{
        return await this.socket.send(data)
    }
}

export function pushUpdates(
    connection: WebSocketClient,
    version: number,
    fullUpdates: readonly Update[]
  ): Promise<boolean> {
    // Strip off transaction data
    let updates = fullUpdates.map(u => ({
      clientID: u.clientID,
      changes: u.changes.toJSON()
    }))
    return connection.request({type: "pushUpdates", version, updates})
}
  
export function pullUpdates(
    connection: WebSocketClient,
    version: number
  ): Promise<readonly Update[]> {
    return connection.request({type: "pullUpdates", version})
        .then(updates => updates.map(u => ({
            changes: ChangeSet.fromJSON(u.changes),
            clientID: u.clientID
        })))
}
  
export function getDocument(
    connection: WebSocketClient
  ): Promise<{version: number, doc: Text}> {
    return connection.request({type: "getDocument"}).then(data => ({
        version: data.version,
        doc: Text.of(data.doc.split("\n"))
    }))
}