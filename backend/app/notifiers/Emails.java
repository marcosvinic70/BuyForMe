package notifiers;

import java.util.concurrent.Future;

import models.Usuario;
import play.Play;
import play.mvc.Mailer;

public class Emails extends Mailer {

	public static Future<Boolean> save(Usuario usuario) {

		setFrom("Buy 4 Me <" + Play.configuration.getProperty("mail.smtp.sender") + ">");
		setSubject("Usuário cadastrado com sucesso");
		addRecipient(usuario.email);

		return send(usuario);

	}

}