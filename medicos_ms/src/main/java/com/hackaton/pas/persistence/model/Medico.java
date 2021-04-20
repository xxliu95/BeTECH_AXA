package com.hackaton.pas.persistence.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "medicos")
public class Medico implements Serializable {

    @Id
    private String id;

    private String nombre;

    private String apellidos;

    private String numero_colegiado;

    private String telefono;

    private String comentarios;

    public Medico() {

    }

    public Medico(String id, String nombre, String apellidos, String numero_colegiado, String telefono, String comentarios) {
      this.id = id;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.numero_colegiado = numero_colegiado;
      this.comentarios = comentarios;
    }


    public String getId() {
      return id;
    }

    public void setId(String id) {
      this.id = id;
    }

    public String getNombre() {
      return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
      return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getTelefono() {
      return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getNumeroColegiado() {
      return numero_colegiado;
    }

    public void setNumeroColegiado(String numero_colegiado) {
        this.numero_colegiado = numero_colegiado;
    }

    public String getComentarios() {
      return comentarios;
    }

    public void setComentarios(String comentarios) {
        this.comentarios = comentarios;
    }

}