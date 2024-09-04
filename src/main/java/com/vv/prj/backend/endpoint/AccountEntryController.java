package com.vv.prj.backend.endpoint;

import com.vv.prj.backend.model.Account;
import com.vv.prj.backend.model.AccountEntry;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/api/entries")
public class AccountEntryController {

    @PostMapping
    public void saveAccount(@RequestBody AccountEntry accountEntry){
        System.out.println(accountEntry);
    }

    @GetMapping
    public List<AccountEntry> getAccountEntries(){
        return List.of(new AccountEntry( 6, 2024, 10000), new AccountEntry( 7, 2024, 20000));
    }
}
