package models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import play.db.jpa.GenericModel;

@Entity
@Table(schema="buy4me", name="usuario")
public class Usuario extends GenericModel {
	
	@Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name = "id")
	public String id;
	
	//@Required
	//@MaxSize(value=255, message = "email.maxsize")
    //@play.data.validation.Email
	@Column(name = "email")
	public String email;
	
	//@Required
	@Column(name = "senha")
	public String senha;
	
	//public final int tempoDeExpiracao = 3600;
	
}
