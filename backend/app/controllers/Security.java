package controllers;

import models.Usuario;

public class Security extends Secure.Security {
	
	static boolean authenticate(String email, String senha) {
		
        Usuario usuario = Usuario.find("byEmail", email).first();
        
        return usuario != null && usuario.senha.equals(senha);
        
    }
	
	 public static Usuario getCurrentUsuario() {
		 
	        final String email = Security.connected();
	        
	        return Usuario.find("byEmail", email).first();
	        
	    }
}
