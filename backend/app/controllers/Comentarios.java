package controllers;

import java.util.List;

import models.Comentario;
import models.Produto;
import models.Usuario;
import play.mvc.Before;
import serializers.ComentarioSerializer;

public class Comentarios extends BaseController {
	
	public static void findAll() {
		
		List<Comentario> comentarios = Comentario.findAll();
		
		renderJSON(comentarios, ComentarioSerializer.comentarios);
		
	}
	
	public static void save(Comentario comentario) {
		
		checkAuthenticity();
		
		if (comentario == null) {
			erro400(new IllegalArgumentException(), "Parâmetros incompletos.");
		}
		
		comentario.produto = Produto.findById(comentario.produto.id);
		comentario.usuario = Usuario.findById(comentario.usuario.id);
		
		renderJSON(comentario.save(), ComentarioSerializer.comentarios);
		
	}

	public static void findByProduto(String id) {
		
		if (id == null) {
			erro400(new IllegalArgumentException(), "Produto não existe.");
		}
		
		renderJSON(Comentario.findByProduto(id), ComentarioSerializer.comentarios);
		
	}
}
