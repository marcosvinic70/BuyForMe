package security;

import java.io.Serializable;

public class UsuarioSessao implements Serializable {
	public String nome;
	public Long id;
	
	public UsuarioSessao() {
		
	}
	
	public UsuarioSessao(Long id, String nome) {
	
		this.id = id;
		this.nome = nome;
	}
}
