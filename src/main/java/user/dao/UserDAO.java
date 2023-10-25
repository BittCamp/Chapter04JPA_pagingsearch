package user.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import user.bean.UserDTO;

public interface UserDAO extends JpaRepository<UserDTO,String> {

	List<UserDTO> findByNameContaining(String value);//<엔티티로 잡은애, 프라이머리키로 잡은애 자료형>

	List<UserDTO> findByIdContaining(String value);
	//검색 대상이 테이블이 아니라 영속성 컨텍스트에 등록된 엔티티이다.
	@Query("select userDTO from UserDTO userDTO where userDTO.name like concat('%', ?1 ,'%') ") // 대문자 클래스명. 이런형식으로 쓴다./ 
 	List<UserDTO> getUserSearchName(String value ); //String value  를 첫번째 파라메터라고 함. 뒤에 , 있으면 두번째 파라메터
	
	@Query("select userDTO from UserDTO userDTO where userDTO.id like concat('%',?1 ,'%' ) ") 
	List<UserDTO> getUserSearchId(String value);
	/*
	@Query("select userDTO from UserDTO userDTO where userDTO.name like concat('%', :value ,'%') ") // 대문자 클래스명. 이런형식으로 쓴다./ 
 	List<UserDTO> getUserSearchName(@Param("value") String value ); //String value  를 첫번째 파라메터라고 함. 뒤에 , 있으면 두번째 파라메터
	
	@Query("select userDTO from UserDTO userDTO where userDTO.id like concat('%',:value ,'%' ) ") 
	List<UserDTO> getUserSearchId(@Param("value") String value );
	*/
	
}