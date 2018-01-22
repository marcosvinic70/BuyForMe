package models;

public class Autenticacao {
	
	public String id;

	public String nome;
	
	public String email;
	
	public String idToken;
	
	public final int expiresIn = 3600;
	
	public Autenticacao(String id, String email, String nome, String idToken) {
		
		this.id = id;
		this.email = email;
		this.nome = nome;
		this.idToken = idToken;
		
	}
	
}
