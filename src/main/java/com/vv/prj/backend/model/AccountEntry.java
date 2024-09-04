package com.vv.prj.backend.model;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class AccountEntry {
        private long id;
        private int month;
    private int year;
    private long value;

    public AccountEntry(int month, int year, long value) {
        this.month = month;
        this.year = year;
        this.value = value;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public long getValue() {
        return value;
    }

    public void setValue(long value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "AccountEntry{" +
                "id=" + id +
                ", month=" + month +
                ", year=" + year +
                ", value=" + value +
                '}';
    }
}
