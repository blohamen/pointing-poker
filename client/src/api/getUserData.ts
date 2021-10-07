import IUser from '../interfaces/IUser'
import { authUrl } from '../utils/config'

const userApi = {
  async sendUserData(formData: FormData): Promise<IUser> {
    const response = await fetch(authUrl, {
      method: 'POST',
      body: formData,
    })
    if (response.status > 200)
      return {
        firstName: '',
        lastName: '',
        jobPossition: '',
        image: '',
        isAdmin: false,
        isObserver: false,
        isPlayer: false,
        userId: '',
        roomId: '',
        authentification: false,
        score: 'In progress',
      }
    const result = await response.json()
    return result
  },
}
export default userApi
