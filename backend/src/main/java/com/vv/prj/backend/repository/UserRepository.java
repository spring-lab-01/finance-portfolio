package com.vv.prj.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vv.prj.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
