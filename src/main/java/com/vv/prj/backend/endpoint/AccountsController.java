package com.vv.prj.backend.endpoint;

import com.vv.prj.backend.model.Account;
import com.vv.prj.backend.service.AccountsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "/api/accounts")
public class AccountsController {

    private AccountsService accountsService;

    public AccountsController(AccountsService accountsService) {
        this.accountsService = accountsService;
    }

    @PostMapping
    public ResponseEntity<Account> saveAccount(@RequestBody Account account) {
        account = accountsService.saveAccount(account);
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Account> updateAccount(@RequestBody Account account) {
        account = accountsService.updateAccount(account);
        return new ResponseEntity<>(account, HttpStatus.OK);
    }

    @GetMapping
    public Collection<Account> getAccounts() {
        return accountsService.getAccounts();
    }

    @GetMapping("/{id}")
    public Account getAccountsById(@PathVariable Long id) {
        return accountsService.getAccountById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteAccount(@PathVariable Long id) {
        accountsService.delete(id);
    }
}
