import Authentication from './Authentication';

class LocalStrategy implements Authentication {
	authenticate(args: any[]) {
		const [userName, password] = args;

		if (userName !== 'ag502' && password !== '123') {
			console.error('잘못된 계정정보!');
			return false;
		}

		console.log('로그인 성공!');
		return true;
	}
}

export default LocalStrategy;
