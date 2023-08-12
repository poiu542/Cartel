package com.ssafy.cartel.domain.client.repository;

import com.ssafy.cartel.domain.client.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}
