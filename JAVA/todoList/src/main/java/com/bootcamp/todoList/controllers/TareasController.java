package com.bootcamp.todoList.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.todoList.models.TareasModel;
import com.bootcamp.todoList.services.TareasSevice;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/tarea")
public class TareasController {
	
	private TareasSevice tareasService;
	
	public TareasController(TareasSevice tareasService) {
		this.tareasService = tareasService;
	}
	

	@GetMapping("/test")
	public ResponseEntity<String> testing() {
		return ResponseEntity.ok("algo");
	}
	
	@GetMapping("/listado")
	public ResponseEntity<List<TareasModel>> getTareas(){
		return ResponseEntity.ok(tareasService.obtenerTareas());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<TareasModel>> getTareaById(@PathVariable Integer id){
		return ResponseEntity.ok(tareasService.obtenerTareaPorId(id));

	}
	
	@PostMapping("/crear")
	public ResponseEntity<TareasModel> createTarea(@RequestBody TareasModel tarea) {
		
		TareasModel tareaCreada = this.tareasService.crearTarea(tarea);
		return ResponseEntity.ok(tareaCreada);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<TareasModel> updateTarea(@PathVariable Integer id, @RequestBody TareasModel tarea) {
		try {			
	        TareasModel tareasActualizada = this.tareasService.actualizarTarea(id, tarea);
	        return new ResponseEntity<>(tareasActualizada, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteTarea(@PathVariable Integer id) {
		this.tareasService.eliminarTarea(id);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	

}
