package controllers;

import models.Autenticacao;
import models.Usuario;
import notifiers.Emails;
import play.libs.Crypto;

import java.util.concurrent.ExecutionException;

//@With(Secure.class)
public class Login extends BaseController {

	public static void save(Usuario usuario) throws ExecutionException, InterruptedException {

		if(!Emails.save(usuario).get()) {

			throw new RuntimeException();

		}

		usuario.save();

	}

	public static void login(Usuario usuarioLogin) {

		boolean autenticado = Security.authenticate(usuarioLogin.email, usuarioLogin.senha);

		if (autenticado) {
			Usuario usuario = Usuario.find("byEmail", usuarioLogin.email).first();
			String token = session.getAuthenticityToken();
			String sessao = Crypto.encryptAES(token);

			Autenticacao resposta = new Autenticacao(usuario.id, usuario.email, usuario.nome, sessao);
			renderJSON(resposta);
		} else {
			erro401("Login ou senha inválidos! Tente novamente.");
			//unauthorized("Login ou senha inválidos! Tente novamente.");
		}

	}

	public static void logout() {


	}

}
