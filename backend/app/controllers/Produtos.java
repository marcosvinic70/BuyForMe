package controllers;

import java.util.List;

import models.Produto;
import models.Usuario;
import play.mvc.Before;
import serializers.ProdutoSerializer;

public class Produtos extends BaseController {
	
	@Before(only={"save", "update", "delete"})
	static void checkAuthentification() {
        checkAuthenticity();
	}
	
	public static void findAll() {
		
		List<Produto> produtos = Produto.findAll();
		
		renderJSON(produtos, ProdutoSerializer.produtoCompleto);
				
	}
	
	public static void find(String id) {
		
		if (id == null) {
			erro400(new IllegalArgumentException(), "Produto não existe.");
		}
		
		Produto produto = Produto.findById((String) id);
		
		renderJSON(produto, ProdutoSerializer.produtoCompleto);
		
	}
	
	public static void save(Produto produto) {
		
		if (produto == null) {
			erro400(new IllegalArgumentException(), "Parâmetros incompletos.");
		}

		produto.usuario = Usuario.findById(produto.usuario.id);
		produto.save();

		renderJSON(produto, ProdutoSerializer.produtoCompleto);

	}

	public static void update(Produto produto) {
		
		if (produto == null) {	
			erro400(new IllegalArgumentException(), "Parâmetros incompletos.");
		}
		
		Produto produtoSalvo = Produto.findById(produto.id);
		produtoSalvo.nome = produto.nome;
		produtoSalvo.descricao= produto.descricao;
		produtoSalvo.valor= produto.valor;
		produtoSalvo.imagemUrl = produto.imagemUrl;
		produtoSalvo.usuario = produto.usuario;
		
		renderJSON(produtoSalvo.save(), ProdutoSerializer.produtoCompleto);
		
	}
	
	public static void delete(String id) {
		
		if (id == null) {
			erro400(new IllegalArgumentException(), "Produto não existe.");
		}
		
		Produto produto = Produto.findById(id);
		produto.delete();
		
	}
	
	public static void findByUsuario(String id) {
		
		if (id == null) {
			erro400(new IllegalArgumentException(), "Usuário não existe.");
		}
		
		List<Produto> produtos = Produto.findByUsuario(id);
		
		renderJSON(produtos, ProdutoSerializer.produtoCompleto);
		
	}
}
