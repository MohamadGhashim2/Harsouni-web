import serviceSlide1 from '../assets/images/services-carousel/service-slide-1.jpg'
import serviceSlide2 from '../assets/images/services-carousel/service-slide-2.jpg'
import serviceSlide3 from '../assets/images/services-carousel/service-slide-3.jpg'
import serviceSlide4 from '../assets/images/services-carousel/service-slide-4.jpg'
import serviceSlide5 from '../assets/images/services-carousel/service-slide-5.jpg'

export const serviceCarouselMedia = {
  universityRegistrationGuide: serviceSlide1,
  preRegistrationConsultation: serviceSlide2,
  residenceContractSupport: serviceSlide3,
  oneYearStudentResidence: serviceSlide4,
  twoYearStudentResidence: serviceSlide5,
} as const

export type ServiceCarouselMediaKey = keyof typeof serviceCarouselMedia
