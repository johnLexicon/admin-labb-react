import {db} from '../firebase';

const prodRequests = {
    get: async (opts = {}) => {
        if(opts['email']){
            const doc = await db.collection('users').doc(opts.email).get()
            if(doc.exists){
                return {id: doc.id, ...doc.data()}
            } else {
                return null
            }
        }
        const users = []
        const snapshot = await db.collection('users').get()
        snapshot.forEach(doc => {
            users.push({id: doc.id, ...doc.data()})
        })
        return users
    },
    post: async (user) => {
        const docRef = await db.collection('users').doc(user.email).set(user)
        return {id: docRef.id, ...user}
    },
    delete: async (userId) => {
        await db.collection('users').doc(userId).delete()
    }
}

export default prodRequests