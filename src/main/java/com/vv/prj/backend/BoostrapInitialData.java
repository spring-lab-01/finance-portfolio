package com.vv.prj.backend;

import java.util.ArrayList;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.github.javafaker.Faker;
import com.vv.prj.backend.model.User;
import com.vv.prj.backend.repository.UserRepository;

@Component
public class BoostrapInitialData implements CommandLineRunner {

    private final UserRepository userRepository;
    private final Faker faker = new Faker(Locale.getDefault());

    @Autowired
    PasswordEncoder passwordEncoder;

    public BoostrapInitialData(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        for (int i = 0; i < 10; i++) {
            String email = faker.internet().emailAddress();
            System.out.println(email);
            userRepository.save(new User(faker.name().fullName(),email, passwordEncoder.encode(faker.internet().password())));
        }
        userRepository.save(new User("admin","admin@email.com", passwordEncoder.encode("password")));
    }
}
