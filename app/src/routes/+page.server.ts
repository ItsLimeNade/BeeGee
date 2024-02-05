import { getReading, init } from 'libre-client';

export const actions = {
    login: async ({request}) => {
        const formData = await request.formData()
        const email = formData.get('email')
        const password = formData.get('password')

        if (!email || !password) return { success: false }
        
        await init({email: email?.toString(), password: password.toString()})
        return { success: true }
    },
    getBloodGlucoseReading: async () => {
        return await getReading()
    }
}