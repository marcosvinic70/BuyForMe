package controllers;

import models.Usuario;

public class Usuarios extends BaseController {

	public static void save(Usuario usuario) {
		
		usuario.save();
		
	}
	
}
