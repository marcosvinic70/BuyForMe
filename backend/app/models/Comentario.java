	package models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import play.db.jpa.GenericModel;

@Entity
@Table(schema="buy4me", name="comentario")
public class Comentario extends GenericModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "buy4me.comentario_id_seq")
	@SequenceGenerator(name = "buy4me.comentario_id_seq", sequenceName = "buy4me.comentario_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;
	
	@Column(name = "texto")
	public String texto;
	
	@ManyToOne
	@JoinColumn(name = "autor_id")
	public Usuario usuario;
	
	@ManyToOne
	@JoinColumn(name = "produto_id")
	public Produto produto;
	
	public static List<Comentario> findByProduto(String idProduto) {
		
		String sqlFilter = "SELECT c FROM " + Comentario.class.getCanonicalName() + " c " +			
				"WHERE c.produto.id = :idProduto";
		
		JPAQuery query = Produto.find(sqlFilter).setParameter("idProduto", idProduto);
		List<Comentario> comentarios = query.fetch();
		
		return comentarios;
		
	}
	
 }
