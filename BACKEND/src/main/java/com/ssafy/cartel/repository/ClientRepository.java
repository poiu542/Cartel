package com.ssafy.cartel.repository;


import com.ssafy.cartel.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}
