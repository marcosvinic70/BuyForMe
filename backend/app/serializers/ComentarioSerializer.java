package serializers;

import java.util.Date;

import flexjson.JSONSerializer;
import play.Play;

public class ComentarioSerializer {
	
	public static JSONSerializer comentarios;
	
	static {
		
		boolean prettyPrint = Play.mode == Play.Mode.DEV;
		
		comentarios = new JSONSerializer()
					.include(
						"texto",
						"usuario.id",
						"produto.id"
					)
					.exclude("*")
					.transform(DateSerializer.getTransformer(), Date.class)
					.prettyPrint(prettyPrint);
	}
}
