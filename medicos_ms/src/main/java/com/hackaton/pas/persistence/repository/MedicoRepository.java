package com.hackaton.pas.persistence.repository;

import com.hackaton.pas.persistence.model.Medico;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "medicos", path = "medicos")
public interface MedicoRepository extends MongoRepository<Medico, String> {

    //Ejemplo para buscar por un parametro de la entidad
    //Provider findByNombre(@Param("nombre") String nombre);
    Medico findByNombre(@Param("nombre") String nombre);

}
