package com.bootcamp.youtube.controllers;

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

import com.bootcamp.youtube.entities.Video;

import com.bootcamp.youtube.servicesIMPL.VideoServiceIMPL;

@RestController
@RequestMapping("videos")
@CrossOrigin(origins = "http://localhost:4200")
public class VideoController {

	private VideoServiceIMPL videoServiceIMPL;

	public VideoController(VideoServiceIMPL videoServiceIMPL) {
		this.videoServiceIMPL = videoServiceIMPL;
	}

	@GetMapping("/listado")
	public ResponseEntity<List<Video>> getAllVideos() {

		List<Video> videos = this.videoServiceIMPL.listVideo();
		return new ResponseEntity<>(videos, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Video> getVideoById(@PathVariable Integer id) {
		try {
			Video video = this.videoServiceIMPL.findVideoById(id);

			if (video != null) {
				return new ResponseEntity<>(video, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {

			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/crear")
	public ResponseEntity<Video> createVideo(@RequestBody Video video) {

		this.videoServiceIMPL.saveVideo(video);

		return new ResponseEntity<>(video, HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteVideo(@PathVariable Integer id) {

		this.videoServiceIMPL.deleteVideoById(id);
		return new ResponseEntity<>("Video eliminado con éxito", HttpStatus.OK);

	}
	
	@PutMapping("/actualizar/{id}")
	public ResponseEntity<Video> updateVideo(@PathVariable Integer id, @RequestBody Video video) {
		
		try {
			this.videoServiceIMPL.updateVideo(id, video);
			return new ResponseEntity<>(video, HttpStatus.OK);
		} catch (Exception e) {
			
			return new ResponseEntity<>(video, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
	}

}
