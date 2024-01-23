package com.bootcamp.youtube.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.youtube.entities.Video;

public interface VideoRepository extends JpaRepository<Video, Integer>{

}
