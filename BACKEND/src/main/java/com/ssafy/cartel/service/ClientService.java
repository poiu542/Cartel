package com.ssafy.cartel.service;

import com.ssafy.cartel.domain.Client;
import com.ssafy.cartel.dto.ClientDto;
import com.ssafy.cartel.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ClientService {

    private final ClientRepository clientRepository;

    @Transactional
    public Client save(ClientDto clientDto){
        return clientRepository.save(clientDto.toEntity());
    }

    public List<Client> findAll(){
        return clientRepository.findAll();
    }

    public Optional<Client> findById(Integer id){
        return Optional.ofNullable(clientRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found:" + id)));
    }

    @Transactional
    public void delete(Integer id){
        clientRepository.deleteById(id);
    }

    @Transactional
    public Client update(Integer id, ClientDto clientDto){
        Client client = clientRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));

        client.update(clientDto.getAttendance(), clientDto.getState());

        return client;
    }

}
