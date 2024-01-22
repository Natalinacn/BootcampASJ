package com.bootcamp.todoList.services;

import java.util.List;
import java.util.Optional;
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
	
	// Obtener Tareas Por id
	public Optional<TareasModel> obtenerTareaPorId(Integer id) {
		Optional<TareasModel> tarea = this.tareaRepository.findById(id);
		return tarea;
	}
	
	// Crear Tareas
	public TareasModel crearTarea(TareasModel tarea) {
		TareasModel tareasModel = this.tareaRepository.save(tarea);
		return tareasModel;
	}
	
	//Actualizar tarea.Con este método se puede hacer el borrado lógico al cambiarle el estado a false
	
	public TareasModel actualizarTarea(Integer id, TareasModel tarea) throws Exception {
		
		TareasModel tareaActualizada = this.tareaRepository.findById(id).get(); //Obtengo la tarea que coincide con el ID
		if(tareaActualizada != null) {
			tareaActualizada.setNombre(tarea.getNombre());
			tareaActualizada.setFecha(tarea.getFecha());
			this.tareaRepository.save(tareaActualizada);
			return tareaActualizada;
		}else {
			throw new Exception("Tarea no encontrada con ID: " + id);
	    }
		
	}
	
	
	
	//Borrar tarea
	public void eliminarTarea(Integer id) {
		this.tareaRepository.deleteById(id);
	}
	

}
