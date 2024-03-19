package com.example.demo.dto;

import org.springframework.beans.BeanUtils;

import com.example.demo.model.User;

public class UserDto {
    private String userId = null;

    private String userName = null;

    private int age = 0;

    private String email = null;

    private String tel = null;

    private String img = null;

    public UserDto() {

    }

    public UserDto(User user) {
        BeanUtils.copyProperties(user, this);
    }

    public User toModel() {
        User user = new User();
        BeanUtils.copyProperties(this, user);
        return user;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @Override
    public String toString() {
        return "UserDto [userId=" + userId + ", userName=" + userName + ", age=" + age + ", email=" + email + ", tel="
                + tel + ", img=" + img + "]";
    }

    
}
