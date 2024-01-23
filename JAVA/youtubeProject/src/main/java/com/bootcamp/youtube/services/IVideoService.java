package com.bootcamp.youtube.services;

import java.util.List;

import com.bootcamp.youtube.entities.Video;


public interface IVideoService {
	
	public List<Video> listVideo();
	
	public Video findVideoById(Integer idVideo) throws Exception;
	
	public Video saveVideo(Video video);
	
	public void deleteVideoById(Integer idVideo);
	
	public Video updateVideo(Integer idVideo, Video video) throws Exception;

}
