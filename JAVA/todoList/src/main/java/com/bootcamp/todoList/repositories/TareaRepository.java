package com.bootcamp.todoList.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.todoList.models.TareasModel;

public interface TareaRepository extends JpaRepository<TareasModel, Integer> {

}

//Repository.save(objeto)
//Repository.findAll()
//Repository.finfById()
//Repository.deleteById()
//Repository.updateById()