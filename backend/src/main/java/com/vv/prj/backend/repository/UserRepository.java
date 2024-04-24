package com.vv.prj.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vv.prj.backend.model.User;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<User, Long>{

    User findByEmailIgnoreCase(String username);
}
