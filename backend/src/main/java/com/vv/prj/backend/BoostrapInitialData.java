package com.vv.prj.backend;

import java.util.Locale;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.github.javafaker.Faker;
import com.vv.prj.backend.model.User;
import com.vv.prj.backend.repository.UserRepository;

@Component
public class BoostrapInitialData implements CommandLineRunner {

    private final UserRepository userRepository;
    private final Faker faker = new Faker(Locale.getDefault());

    public BoostrapInitialData(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        for (int i = 0; i < 10; i++) {
            userRepository.save(new User(faker.name().fullName(), faker.internet().emailAddress()));
        }
    }
}
