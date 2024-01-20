package com.bootcamp.todoList.models;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tareas")
public class TareasModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(unique = true, nullable = false) Le puedo poner el @Column si quiero especidicar cosas
	private Integer id;
	private String nombre;
	private String descripcion;
	private Boolean estado;
	
	public TareasModel() {
	}
	
	public TareasModel(int id, String nombre, String descripcion, Boolean estado) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.estado = estado;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Boolean getEstado() {
		return estado;
	}
	public void setEstado(Boolean estado) {
		this.estado = estado;
	}
	@Override
	public String toString() {
		return "TareasModel [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", estado=" + estado
				+ "]";
	}
	
	
	
	
	
}
