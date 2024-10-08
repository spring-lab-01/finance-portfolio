package com.vv.prj.backend.endpoint;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import com.vv.prj.backend.security.UserDetailsImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vv.prj.backend.exception.ResourceNotFoundException;
import com.vv.prj.backend.model.User;
import com.vv.prj.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@PreAuthorize(value = "ADMIN")
public class UserController {
    
    private final UserRepository userRepository;

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public User getUsersById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) throws URISyntaxException {
        User savedUser = userRepository.save(user);
        return ResponseEntity.created(new URI("/users/" + savedUser.getId())).body(savedUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) throws URISyntaxException {
        User existingUser = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser = userRepository.save(existingUser);
        return ResponseEntity.ok(existingUser);
    }



    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        User existingUser = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        userRepository.delete(existingUser);  
    }

    @GetMapping("/me")
    public String me() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetailsImpl) {
           return ((UserDetailsImpl) authentication.getPrincipal()).getUsername();
        }
        return null;
    }

    
}
