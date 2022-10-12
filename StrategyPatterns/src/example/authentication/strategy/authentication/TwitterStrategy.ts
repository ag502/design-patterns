import Authentication from './Authentication';

class TwitterStrategy implements Authentication {
	authenticate(args: any[]) {
		const [token] = args;

		if (token !== 'ag502') {
			console.error('트위터 계정 인증 실패');
			return false;
		}

		console.log('트위터 계정 인증 성공!');
		return true;
	}
}

export default TwitterStrategy;
