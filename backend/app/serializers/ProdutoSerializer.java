package serializers;

import java.util.Date;

import flexjson.JSONSerializer;
import play.Play;

public class ProdutoSerializer {
	
	public static JSONSerializer produtoCompleto;
	
	static {
		
		boolean prettyPrint = Play.mode == Play.Mode.DEV;
	
		produtoCompleto = new JSONSerializer()
				.include(
					"id",
					"nome",
					"descricao",
					"valor",
					"imagemUrl",
					"usuario.id",
					"usuario.nome",
					"qtdeComentarios"
				)
				.exclude("*")
				.transform(DateSerializer.getTransformer(), Date.class)
				.prettyPrint(prettyPrint);
	}
}
