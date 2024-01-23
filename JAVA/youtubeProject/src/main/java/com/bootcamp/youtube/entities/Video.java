package com.bootcamp.youtube.entities;

import java.util.List;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Video {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String urlVideo;
	private String categoría;
	private String títuloVideo;
	private String descripción;
	private Integer cantidadVistas;
	private Integer cantidadMeGustaInteger;
	private List<Integer> rate;
	private Double promedio;
	
	
	public Video() {
	}

	

	public Video(Integer id, String urlVideo, String categoría, String títuloVideo, String descripción,
			Integer cantidadVistas, Integer cantidadMeGustaInteger, List<Integer> rate, Double promedio) {
		this.id = id;
		this.urlVideo = urlVideo;
		this.categoría = categoría;
		this.títuloVideo = títuloVideo;
		this.descripción = descripción;
		this.cantidadVistas = cantidadVistas;
		this.cantidadMeGustaInteger = cantidadMeGustaInteger;
		this.rate = rate;
		this.promedio = promedio;
	}



	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public String getUrlVideo() {
		return urlVideo;
	}



	public void setUrlVideo(String urlVideo) {
		this.urlVideo = urlVideo;
	}



	public String getCategoría() {
		return categoría;
	}



	public void setCategoría(String categoría) {
		this.categoría = categoría;
	}



	public String getTítuloVideo() {
		return títuloVideo;
	}



	public void setTítuloVideo(String títuloVideo) {
		this.títuloVideo = títuloVideo;
	}



	public String getDescripción() {
		return descripción;
	}



	public void setDescripción(String descripción) {
		this.descripción = descripción;
	}



	public Integer getCantidadVistas() {
		return cantidadVistas;
	}



	public void setCantidadVistas(Integer cantidadVistas) {
		this.cantidadVistas = cantidadVistas;
	}



	public Integer getCantidadMeGustaInteger() {
		return cantidadMeGustaInteger;
	}



	public void setCantidadMeGustaInteger(Integer cantidadMeGustaInteger) {
		this.cantidadMeGustaInteger = cantidadMeGustaInteger;
	}



	public List<Integer> getRate() {
		return rate;
	}



	public void setRate(List<Integer> rate) {
		this.rate = rate;
	}



	public Double getPromedio() {
		return promedio;
	}



	public void setPromedio(Double promedio) {
		this.promedio = promedio;
	}



	@Override
	public String toString() {
		return "Video [id=" + id + ", urlVideo=" + urlVideo + ", categoría=" + categoría + ", títuloVideo="
				+ títuloVideo + ", descripción=" + descripción + ", cantidadVistas=" + cantidadVistas
				+ ", cantidadMeGustaInteger=" + cantidadMeGustaInteger + ", rate=" + rate + ", promedio=" + promedio
				+ "]";
	}


}


