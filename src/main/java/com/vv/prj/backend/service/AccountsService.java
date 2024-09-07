package com.vv.prj.backend.service;

import com.vv.prj.backend.exception.ResourceNotFoundException;
import com.vv.prj.backend.model.Account;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AccountsService {

    private final Map<Long, Account> accountsMap = new HashMap<>();

    private Long maxId = 0L;

    public Collection<Account> getAccounts() {
        return accountsMap.values();
    }

    public Account saveAccount(Account account) {
        maxId ++ ;
        account.setId(maxId);
        accountsMap.put(maxId, account);
        return account;
    }

    public Account updateAccount(Account account) {
        if(accountsMap.containsKey(account.getId())) {
            accountsMap.put(account.getId(), account);
        }
        else
            throw new ResourceNotFoundException("Account not found with this id"+account.getId());
        return account;
    }

    public void delete(long id) {
        if(accountsMap.containsKey(id)) {
            accountsMap.remove(id);
        }
        else
            throw new ResourceNotFoundException("Account not found with this id"+id);
    }

    public Account getAccountById(Long id) {
        if(accountsMap.containsKey(id)) {
            return accountsMap.get(id);
        }
        throw new ResourceNotFoundException("Account not found with this id"+id);
    }
}
