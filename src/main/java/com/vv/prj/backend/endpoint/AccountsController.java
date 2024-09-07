package com.vv.prj.backend.endpoint;

import com.vv.prj.backend.model.Account;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/api/accounts")
public class AccountsController {

    private Account account = new Account(1L, "account 1", 40000, LocalDate.now(),"Active", "INR");

    @PostMapping
    public ResponseEntity<Account> saveAccount(@RequestBody Account account){
        this.account = account;
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Account> updateAccount(@RequestBody Account account){
        this.account = account;
        return new ResponseEntity<>(account, HttpStatus.OK);
    }

    @GetMapping
    public List<Account> getAccounts(){
        return List.of(account);
    }

    @GetMapping("/{id}")
    public Account getAccountsById(@PathVariable Long id){
        return account;
    }
}
