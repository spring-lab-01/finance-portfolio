package com.vv.prj.backend.endpoint;

import com.vv.prj.backend.model.Account;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/api/accounts")
public class AccountsController {

    @PostMapping
    public void saveAccount(@RequestBody Account account){
        System.out.println(account);
    }

    @GetMapping
    public List<Account> getAccounts(){
        return List.of(new Account(1L, "account 1", 40000, LocalDate.now(),"Active", "INR"));
    }
}
