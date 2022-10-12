import Authenticator from './strategy/authentication/Authenticator';
import LocalStrategy from './strategy/authentication/LocalStrategy';
import TwitterStrategy from './strategy/authentication/TwitterStrategy';

const auth = new Authenticator();

auth.use('twitter', new TwitterStrategy());
auth.use('local', new LocalStrategy());

function login(mode: string, ...args: any) {
	return auth.authenticate(mode, args);
}

login('twitter', 'ag502');
login('local', 'ag502', '123');
