package com.vv.prj.backend.model;

import java.time.LocalDate;

public class Account {
        private long id;
        private String name;
        private double totalValue;
        private LocalDate createdOn;
        private String status;
        private String currency;
        public Account() {}
        public Account(long id, String name, double totalValue, LocalDate createdOn, String status, String currency) {
            this.id = id;
            this.name = name;
            this.totalValue = totalValue;
            this.createdOn = createdOn;
            this.status = status;
            this.currency = currency;
        }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getTotalValue() {
        return totalValue;
    }

    public void setTotalValue(double totalValue) {
        this.totalValue = totalValue;
    }

    public LocalDate getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(LocalDate createdOn) {
        this.createdOn = createdOn;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", totalValue=" + totalValue +
                ", createdOn=" + createdOn +
                ", status='" + status + '\'' +
                ", currency='" + currency + '\'' +
                '}';
    }
}
