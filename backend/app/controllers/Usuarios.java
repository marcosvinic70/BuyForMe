package controllers;

import models.Usuario;
import notifiers.Emails;

import java.util.concurrent.ExecutionException;

public class Usuarios extends BaseController {

	public static void save(Usuario usuario) throws ExecutionException, InterruptedException {

		if(!Emails.save(usuario).get()) {

			throw new RuntimeException();

		}

		usuario.save();

	}

}
