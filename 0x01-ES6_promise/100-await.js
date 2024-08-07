// 100-await.js
import uploadPhoto from './5-photo-reject';  // Adjust the import paths as needed
import createUser from './4-user-promise';

export default async function asyncUploadUser() {
	try {
		const photo = await uploadPhoto('filename.jpg');
		const user = await createUser('Guillaume', 'Salva');
		
		return {
			photo,
			user,
		};
	} catch (error) {
		return {
			photo: null,
			user: null,
		};
	}
}
