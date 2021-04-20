package com.hackaton.pas.controller;

import java.util.List;

import com.hackaton.pas.persistence.model.Medico;
import com.hackaton.pas.persistence.repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value="/medicos")
class MedicoController {

    @Autowired
    private MedicoRepository repository;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Medico> findAll() {
        return repository.findAll();
    }

    @GetMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Medico> findById(@PathVariable("id") String id) {
        Medico medico = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Medico not found for this id :: " + id));
        return ResponseEntity.ok().body(medico);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public Medico create(@RequestBody Medico resource) {
        return repository.save(resource);
    }

    @PutMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Medico> update(@PathVariable( "id" ) String id, @RequestBody Medico medico) {
        medico.setId(id);
        Medico updatedMedico = repository.save(medico);
        return ResponseEntity.ok(updatedMedico);
    }

    @DeleteMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") String id) {
        repository.deleteById(id);
    }

}
