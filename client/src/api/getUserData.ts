import IUser from '../interfaces/IUser'

const userApi = {
  async sendUserData(formData: FormData): Promise<IUser> {
    const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
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
      }
    const result = await response.json()
    return result
  },
}
export default userApi
