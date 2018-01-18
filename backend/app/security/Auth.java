package security;

import play.cache.Cache;
import play.mvc.Http;
import play.mvc.Scope;
import play.mvc.Scope.Session;

public class Auth {
	/*
	public static final String CACHE_PREFIX = "GT4W_USUARIO_";
	
	public static boolean autenticar(Http.Request request, Scope.Session session) {
		
		//UsuarioSessao usuarioSessao = autenticar(request);
		
		if (usuarioSessao == null) {
			return false;
		}
		
		setUsuarioSessao(usuarioSessao, session);
		return true;	
	}
	
	public static void setUsuarioSessao(UsuarioSessao usuario, Session session) {
		
		Cache.set(CACHE_PREFIX + session.getId(), usuario);
	}
	
	public static void getUsuarioSessao(Session session) {
		
		//return Cache.get(CACHE_PREFIX + session.current().getId(), UsuarioSessao.class);
	}
	*/
}
