package com.ssafy.cartel.client.repository;

import com.ssafy.cartel.client.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}
