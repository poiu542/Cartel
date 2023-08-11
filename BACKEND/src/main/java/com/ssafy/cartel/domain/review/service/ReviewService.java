//package com.ssafy.cartel.review.service;
//
//import com.ssafy.cartel.client.entity.Client;
//import com.ssafy.cartel.client.repository.ClientRepository;
//import com.ssafy.cartel.consulting.entity.Consulting;
//import com.ssafy.cartel.consulting.repository.ConsultingRepository;
//import com.ssafy.cartel.counsel.entity.Counsel;
//import com.ssafy.cartel.counsel.repository.CounselRepository;
//import com.ssafy.cartel.curriculum.repository.CurriculumRepository;
//import com.ssafy.cartel.review.dto.ReviewResDto;
//import com.ssafy.cartel.review.entity.Review;
//import com.ssafy.cartel.review.dto.ReviewDto;
//import com.ssafy.cartel.review.repository.ReviewRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//import java.util.Optional;
//
//@Transactional(readOnly = true)
//@RequiredArgsConstructor //final , @notnull 붙은 필드의 생성자 추가
//@Service //빈으로 등록
//public class ReviewService {
//    private final ReviewRepository reviewRepository;
//    private final ClientRepository clientRepository;
//    private final CurriculumRepository curriculumRepository;
//    private final CounselRepository counselRepository;
//    private final ConsultingRepository consultingRepository;
//
//
//    @Transactional
//    public Review save(ReviewDto reviewDto){
//        Client client = clientRepository.findById(reviewDto.getClientId()).orElseThrow();
//        return reviewRepository.save(reviewDto.toEntity(client));
//    }
//
//    public List<Review> findAll(){
//        return reviewRepository.findAll();
//    }
//
//    public ReviewResDto findById(Integer id){
////        Counsel counsel = counselRepository.findById(id).orElseThrow();
//        Consulting consulting = consultingRepository.findById(id).orElseThrow();
//        ReviewResDto reviewResDto = ReviewResDto.builder()
//                .counselId(counsel.getId())
//                .counselTitle(counsel.getTitle())
//                .consulting(consulting.getConsulting())
//                .consultingDate(consulting.getDate())
//                .
//                .build();
//        return reviewResDto;
//    }
//
//
//    @Transactional
//    public void delete(Integer id){
//        reviewRepository.deleteById(id);
//    }
//
//    @Transactional
//    public Review update(Integer id, ReviewDto reviewDto){
//        Review review = reviewRepository.findById(id)
//                .orElseThrow(()-> new IllegalArgumentException("not found:" + id));
//
//        review.update(reviewDto.getClientId(),reviewDto.getCurriculumId(),reviewDto.getState(),reviewDto.getDate());
//        return review;
//    }
//
//
//}