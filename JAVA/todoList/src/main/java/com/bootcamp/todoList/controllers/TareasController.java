package com.bootcamp.todoList.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
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
	
	@GetMapping()
	public ResponseEntity<List<TareasModel>> getTareas(){
		return ResponseEntity.ok(tareasService.obtenerTareas());
	}
	
	@GetMapping("/id")
	public ResponseEntity<TareasModel> getTareaById(@PathVariable Integer id){
		return ResponseEntity.ok(null);

	}
	
	@PostMapping()
	public ResponseEntity<String> createTarea(@RequestBody TareasModel tarea) {
		
		return ResponseEntity.ok("Tarea creada con éxito");
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String>  updateTarea(@PathVariable Integer id, @RequestBody TareasModel tarea) {
		
		return ResponseEntity.ok("Tarea actualizada con éxito");
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTarea(@PathVariable Integer id) {
		
		return ResponseEntity.ok("Tarea eliminada con éxito");
		
	}
	
	

}
