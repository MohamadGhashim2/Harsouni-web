import type { LandingContent } from '../types'

export const landingContentTr: LandingContent = {
  header: {
    descriptor: 'Türkiye Üniversite Rehberliği',
    primaryCta: 'Ön Görüşme Planla',
    navigationLabel: 'Ana navigasyon',
    openMenuLabel: 'Menüyü aç',
    closeMenuLabel: 'Menüyü kapat',
    languageSwitcherLabel: 'Dil seçimi',
  },
  navigation: {
    services: 'Hizmetler',
    trust: 'Neden Biz',
    process: 'Süreç',
    faq: 'SSS',
    contact: 'İletişim',
  },
  hero: {
    eyebrow: 'Öğrenci odaklı, net ve güvenilir rehberlik',
    title: 'Türkiye’de doğru üniversite yolunu birlikte planlayalım.',
    description:
      'Harsouni Services; bölüm seçimi, başvuru dosyası, kabul süreci ve kayıt adımlarını ailelerle birlikte yöneten iki dilli bir eğitim danışmanlık merkezidir.',
    primaryCta: 'WhatsApp ile Danışın',
    secondaryCta: 'Hizmetleri İnceleyin',
    highlights: [
      {
        title: 'Stratejik bölüm eşleştirmesi',
        description:
          'Akademik geçmişinize, bütçenize ve hedeflediğiniz kariyere göre gerçekçi seçenekler sunarız.',
      },
      {
        title: 'Belge ve takvim kontrolü',
        description:
          'Eksiksiz başvuru için gerekli evrakları, tarihlerle birlikte adım adım düzenleriz.',
      },
      {
        title: 'Türkiye’ye geçiş desteği',
        description:
          'Kabulden kayıt gününe kadar iletişimi sürdürür, süreci aileler için görünür kılarız.',
      },
    ],
    stats: [
      {
        value: '1:1',
        label: 'kişisel danışmanlık akışı',
      },
      {
        value: 'TR + AR',
        label: 'iki dilli iletişim desteği',
      },
      {
        value: '48 saat',
        label: 'içinde ilk yol haritası',
      },
    ],
    note: 'Her öğrencinin dosyası, hedefi ve iletişim planı baştan yapılandırılır.',
    visualTitle: 'Marka odağı',
  },
  statistics: {
    eyebrow: 'İstatistiklerimiz',
    title: 'Dosya ve danışmanlık hacmimizi gösteren rakamlar',
    description:
      'Öğrenci dosyaları, üniversite kayıt süreçleri ve ön danışmanlık görüşmeleri düzenli ve kontrollü bir akışla yürütülür.',
    items: [
      {
        value: 600,
        label: 'öğrenci ikamet dosyası',
        prefix: '+',
      },
      {
        value: 200,
        label: 'üniversite kayıt dosyası',
        prefix: '+',
      },
      {
        value: 1000,
        label: 'ücretsiz danışmanlık',
        prefix: '+',
      },
    ],
  },
  services: {
    eyebrow: 'Odaklı hizmet yapısı',
    title: 'Başvurudan kayda kadar tek merkezden yürütülen destek',
    description:
      'İhtiyacınız olan her adımı bağımsız değil, birbirini tamamlayan bir süreç olarak planlıyoruz.',
    aside:
      'Her hizmet başlığı daha sonra kolayca güncellenebilsin diye içerik dosyalarında merkezi olarak tutulur.',
    carousel: {
      regionLabel: 'Hizmet görsel galerisi',
      previousLabel: 'Önceki slayt',
      nextLabel: 'Sonraki slayt',
      slideButtonLabel: 'Slayda git',
      items: [
        {
          imageKey: 'universityRegistrationGuide',
          alt: 'Türkiye’de özel üniversite kaydını anlatan, bavul ve Türk bayrağı içeren tanıtım görseli',
        },
        {
          imageKey: 'preRegistrationConsultation',
          alt: 'Kayıt öncesi danışmanlığın önemini anlatan, öğrenci ve İstanbul silueti içeren tanıtım görseli',
        },
        {
          imageKey: 'residenceContractSupport',
          alt: 'Öğrenci ikameti için konut sözleşmesi hizmetini anlatan tanıtım görseli',
        },
        {
          imageKey: 'oneYearStudentResidence',
          alt: 'Bir yıllık öğrenci ikameti hizmetini fiyat ve kapsamla anlatan tanıtım görseli',
        },
        {
          imageKey: 'twoYearStudentResidence',
          alt: 'İki yıllık öğrenci ikameti hizmetini fiyat ve kapsamla anlatan tanıtım görseli',
        },
      ],
    },
    items: [
      {
        icon: 'compass',
        title: 'Üniversite ve bölüm stratejisi',
        description:
          'Öğrencinin hedeflerine, diploma durumuna ve şehir tercihine göre dengeli bir tercih listesi oluştururuz.',
      },
      {
        icon: 'document',
        title: 'Başvuru dosyası hazırlığı',
        description:
          'Gerekli belgeleri toplar, tercüme ve düzen kontrolü yapar, eksik kalabilecek noktaları önceden kapatırız.',
      },
      {
        icon: 'scholarship',
        title: 'Bütçe ve burs yönlendirmesi',
        description:
          'Ücret, ödeme planı ve olası indirim seçeneklerini öğrenci profiline göre sade bir tabloda netleştiririz.',
      },
      {
        icon: 'campus',
        title: 'Kabul ve kayıt koordinasyonu',
        description:
          'Kabul sonrası yazışmalar, kayıt belgeleri ve üniversiteyle ilerleyen tüm onay akışlarını takip ederiz.',
      },
      {
        icon: 'support',
        title: 'Aile iletişimi ve geçiş desteği',
        description:
          'Süreç boyunca düzenli durum güncellemesi sunar, öğrencinin Türkiye’ye uyum planını önceden hazırlarız.',
      },
    ],
  },
  trust: {
    eyebrow: 'Güven oluşturan yaklaşım',
    title: 'Sadece başvuru yapan değil, süreci görünür yöneten bir ekip',
    description:
      'Danışmanlık kalitesini, açık iletişim ve doğru beklenti yönetimi ile ölçüyoruz. Böylece aileler neyin ne zaman olacağını net şekilde bilir.',
    quote:
      'Karar anlarını sadeleştiriyor, öğrencinin dosyasını karmaşık değil izlenebilir bir plana dönüştürüyoruz.',
    pillars: [
      {
        icon: 'shield',
        title: 'Şeffaf yol haritası',
        description:
          'Her aşama takvimlenir; hangi belgenin neden istendiği ve sonraki adımın ne olduğu açık biçimde paylaşılır.',
      },
      {
        icon: 'path',
        title: 'Tek akışta koordinasyon',
        description:
          'Başvuru, kabul, kayıt ve iletişim başlıkları birbirinden kopuk ilerlemez; tek dosya mantığıyla yönetilir.',
      },
      {
        icon: 'support',
        title: 'Hızlı geri dönüş',
        description:
          'Öğrenciler ve aileler, özellikle kritik tarihlerde kısa sürede net yanıt alır ve belirsizlik yaşamaz.',
      },
    ],
  },
  process: {
    eyebrow: 'Nasıl çalışıyoruz?',
    title: 'Dört net adımda ilerleyen danışmanlık modeli',
    description:
      'İlk görüşmeden kayıt gününe kadar süreci küçük ama kontrollü aşamalara ayırıyoruz.',
    steps: [
      {
        title: 'İhtiyaç analizi',
        description:
          'Akademik geçmiş, hedef program, bütçe ve şehir tercihlerini analiz ederek gerçekçi bir başlangıç çerçevesi belirliyoruz.',
      },
      {
        title: 'Kişisel yol haritası',
        description:
          'Üniversite listesi, gerekli belgeler, kritik tarihler ve iletişim planı tek bir çatı altında toparlanıyor.',
      },
      {
        title: 'Başvuru uygulaması',
        description:
          'Belgeler hazırlanıyor, başvurular yürütülüyor ve süreç içinde üniversiteyle gerekli yazışmalar koordine ediliyor.',
      },
      {
        title: 'Kabul ve kayıt takibi',
        description:
          'Kabul sonrasında ödeme, kayıt ve Türkiye’ye geçiş adımları için uygulanabilir bir son kontrol planı sunuyoruz.',
      },
    ],
  },
  faq: {
    eyebrow: 'Sık sorulanlar',
    title: 'İlk görüşmede en çok gelen sorular',
    description:
      'Daha ayrıntılı durumlar için ekip, öğrencinin dosyasına göre özel bir ön değerlendirme paylaşır.',
    items: [
      {
        question: 'Hangi öğrenciler için danışmanlık veriyorsunuz?',
        answer:
          'Lise mezunları, yatay geçiş düşünen adaylar ve Türkiye’de lisans eğitimi planlayan uluslararası öğrenciler için danışmanlık sunuyoruz.',
      },
      {
        question: 'Başvuru için tüm belgeler hazır olmalı mı?',
        answer:
          'Hayır. İlk aşamada mevcut evrakları değerlendiriyor, eksik belgeleri tamamlamak için size bir hazırlık planı çıkarıyoruz.',
      },
      {
        question: 'Aileler süreç boyunca bilgilendiriliyor mu?',
        answer:
          'Evet. Özellikle kritik tarihler, belge durumu ve kayıt aşamaları ailelerle düzenli olarak paylaşılır.',
      },
      {
        question: 'Sadece üniversite seçimi için destek alabilir miyim?',
        answer:
          'Evet. Tam süreç danışmanlığının yanında yalnızca üniversite ve bölüm stratejisi için ayrı bir danışmanlık akışı da planlanabilir.',
      },
    ],
  },
  contact: {
    eyebrow: 'Son adım',
    title: 'Dosyanızı birlikte düzenlemeye bugün başlayın',
    description:
      'İlk görüşmede öğrencinin hedefini, mevcut durumunu ve en uygun ilerleme biçimini netleştirelim.',
    primaryCta: 'WhatsApp Üzerinden Yazın',
    secondaryCta: 'E-posta Gönderin',
    phoneLabel: 'Telefon',
    emailLabel: 'E-posta',
    hoursLabel: 'Çalışma saatleri',
    socialLabel: 'Sosyal bağlantılar',
    whatsappLabel: 'WhatsApp hattı',
    finalNote:
      'Kısa bir ön görüşme ile hangi üniversitelerin ve hangi başvuru takviminin sizin için daha doğru olduğunu netleştirebiliriz.',
  },
  footer: {
    summary:
      'Türkiye’de üniversite planlamasını daha açık, daha sakin ve daha profesyonel hale getiren danışmanlık merkezi.',
    quickLinksLabel: 'Hızlı bağlantılar',
    contactLabel: 'İletişim',
    rightsSuffix: 'Tüm hakları saklıdır.',
  },
  stickyWhatsappLabel: 'Şimdi Ara',
  accessibility: {
    logoAlt: 'Harsouni Services logosu',
    heroVisualAlt: 'Harsouni Services markasını gösteren turuncu logo görseli',
    whatsappAriaLabel: 'WhatsApp üzerinden hemen iletişime geçin',
  },
}
