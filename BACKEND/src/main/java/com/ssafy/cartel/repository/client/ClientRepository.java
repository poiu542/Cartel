package com.ssafy.cartel.repository.client;

import com.ssafy.cartel.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {
}
