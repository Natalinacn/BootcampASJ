package com.bootcamp.todoList.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.todoList.models.TareasModel;
import com.bootcamp.todoList.repositories.TareaRepository;

@Service
public class TareasSevice {

	private TareaRepository tareaRepository;

	public TareasSevice(TareaRepository tareaRepository) {
		this.tareaRepository = tareaRepository;
	}

	// Obtener Tareas

	public List<TareasModel> obtenerTareas() {

		return tareaRepository.findAll();

	}

}
