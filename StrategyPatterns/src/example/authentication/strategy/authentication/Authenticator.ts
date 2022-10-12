import Authentication from './Authentication';

class Authenticator {
	strategies: Record<string, Authentication> = {};

	use(name: string, method: Authentication) {
		this.strategies[name] = method;
	}

	authenticate(name: string, ...args: any) {
		if (!this.strategies[name]) {
			console.error('잘못된 로그인 방식 입니다.');
			return false;
		}
		return this.strategies[name].authenticate.apply(null, args);
	}
}

export default Authenticator;
