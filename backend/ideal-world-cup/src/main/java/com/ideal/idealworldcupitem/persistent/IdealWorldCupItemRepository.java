package com.ideal.idealworldcupitem.persistent;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ideal.idealworldcupitem.domain.IdealWorldCupItem;

public interface IdealWorldCupItemRepository extends JpaRepository<IdealWorldCupItem,Long> {

}
