import {db} from '../firebase';

const prodRequests = {
    get: async () => {
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