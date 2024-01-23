package com.bootcamp.youtube.servicesIMPL;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bootcamp.youtube.entities.Video;
import com.bootcamp.youtube.repositories.VideoRepository;
import com.bootcamp.youtube.services.IVideoService;

@Service
public class VideoServiceIMPL implements IVideoService{
	
	private VideoRepository videoRepository;
	
	public VideoServiceIMPL(VideoRepository videoRepository) {
		this.videoRepository = videoRepository;
	}

	
	@Override
	public List<Video> listVideo() {
		return this.videoRepository.findAll();
	}

	@Override
	public Video findVideoById(Integer idVideo) throws Exception {
		if(idVideo !=null) {
			return this.videoRepository.findById(idVideo).get();
		}else {
			throw new Exception("Video no encontrado");		}
		
	}

	@Override
	public Video saveVideo(Video video) {
		return this.videoRepository.save(video);
		
	}

	@Override
	public void deleteVideoById(Integer idVideo) {
		this.videoRepository.deleteById(idVideo);
	}

	@Override
	public Video updateVideo(Integer idVideo, Video video) throws Exception{
		Video updatedVideo = this.videoRepository.findById(idVideo).get();
		if(idVideo != null) {
			updatedVideo.setTítuloVideo(video.getTítuloVideo());
			updatedVideo.setUrlVideo(video.getUrlVideo());
			updatedVideo.setCategoría(video.getCategoría());
			updatedVideo.setDescripción(video.getDescripción());
			updatedVideo.setCantidadMeGustaInteger(video.getCantidadVistas());
			updatedVideo.setCantidadMeGustaInteger(video.getCantidadMeGustaInteger());
			this.videoRepository.save(updatedVideo);
			return updatedVideo;
			
		}else {
			throw new Exception("Error al actualizar el video");		
		}
	}
	
	
}
