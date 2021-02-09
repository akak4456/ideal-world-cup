package com.ideal.member.persistent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ideal.member.domain.MemberEntity;

@Repository
public interface MemberEntityRepository extends JpaRepository<MemberEntity, String> {

}
