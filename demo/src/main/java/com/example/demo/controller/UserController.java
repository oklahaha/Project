package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/user")
@Api(tags = { "User" }, description = "User Rest Api Controller")
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping("/list")
  public List<User> listUser() {
    return userRepository.findAll();
  }

  @GetMapping("/{id}")
  public User getUserById(@PathVariable String id) {
    return userRepository.findById(id).orElseThrow(RuntimeException::new);
  }

  @PostMapping("/add")
  public ResponseEntity<User> addUser(@RequestBody User user) {
    try {
      User newUser = userRepository.save(user);
      return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User newUser) {
    Optional<User> userData = userRepository.findById(id);

    if (userData.isPresent()) {
      User updateUser = userData.get();
      updateUser.setUserName(newUser.getUserName());
      updateUser.setAge(newUser.getAge());
      updateUser.setPassword(newUser.getPassword());
      updateUser.setEmail(newUser.getEmail());
      return new ResponseEntity<>(userRepository.save(updateUser), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<HttpStatus> deleteUser(@PathVariable String id) {
    try {
      userRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}