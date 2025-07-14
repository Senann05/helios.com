import interstaller3 from "../data assets/interstaller5.png"
import shimmerfly from "../data assets/shimmerfly1.png"
import independence1 from "../data assets/independence1.png"
import swanlight1 from "../data assets/swanlight3.png"
import elegance1 from "../data assets/elegance1.jpg"
import luck from "../data assets/luck2.png"
import light from "../data assets/light2.png"
import eleganceduo2 from "../data assets/eleganceduo2.jpg"
import wings1 from "../data assets/wings1.jpg"
import serenity1 from "../data assets/serenity1.png"
import luckandlight from "../data assets/luckandlight.png"

export interface Product {
  id: number
  name: string
  fake: number
  price: number
  description: string
  images: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Interstaller",
    price: 7,
    fake: 11,
     description:
      "✨ Gecənin ulduzları artıq sizinlə ✨ /Sadə və zərif dizaynı ilə bu boyunbağı istənilən kombinə sehr qatacaq. /Təmiz ulduz enerjisi, incə zəncir və parlaq detallarla — sadəliyin ən cazibədar halı💎 /💫 Paslanmaz material/ 💫 Allergiya yaratmır/ 💫 Gündəlik və xüsusi günlər üçün uyğundur/ 📦 Sifariş üçün Instagram və yaxud whatsapp-dan yazın /📍 Çatdırılma: Metrolara ",
    images: [interstaller3]
  },
  {
    id: 2,
    name: "Shimmerfly",
    price: 10,
    fake: 12,
    description: "🦋 Zərifliyin simvolu: Kəpənək Boyunbağı/Bu incə qızıl tonlu boyunbağı parlaq daşlarla bəzədilmiş kəpənək figuru ilə göz oxşayır. Həm gündəlik, həm də xüsusi gecələr üçün mükəmməl seçimdir. Sadə bir libası belə fərqli göstərəcək gücdədir 💎/💫 Allergiya yaratmayan material/💫 Parlaq və dayanıqlı daşlar/💫 Minimalist və romantik dizayn/📦 Sifariş üçün Instagram və yaxud whatsapp-dan yazın/📍 Çatdırılma: Metrolara",
    images: [shimmerfly]
  },
  {
    id: 3,
    name: "Independence",
    price: 5,
    fake: 8,
    description: "💎 Minimal parıltı, maksimal təsir!/Zərif qızıl tonlu zəncir və tək daşdan ibarət klassik dizayn — bu boyunbağı ilə sadəlik heç vaxt bu qədər zərif görünməmişdi./Hər gün taxmaq üçün ideal, istənilən tərzə uyğunlaşan nadir parça ✨/✨ Parlaq tək daş/✨ Qızıl tonlu allergiya yaratmayan material/✨ Gündəlik və xüsusi kombinlər üçün universal/📦 Sifariş üçün Instagram və yaxud whatsapp-dan yazın/📍 Çatdırılma: Metrolara",
    images: [independence1]
  },
    {
    id: 4,
    name: "Swanlight",
    price: 10,
    fake: 12,
    description: "🦢 Sadəliyin ən zərif forması!/Kristallarla bəzədilmiş qu quşu formasında boyunbağı – incə zənciri və parıltılı detalları ilə minimalizmi dəbdə saxlayır./Göz oxşayan bu aksesuarla hər geyiminizə zərif toxunuş əlavə edin ✨/💫 Parlaq mikro kristallar/💫 Gümüşü tonlu allergiya yaratmayan material//🎁 Özünüzə və ya sevdiklərinizə hədiyyə üçün ideal 💖/📦 Sifariş üçün Instagram və yaxud whatsapp-dan yazın/📍 Çatdırılma: Metrolara",
    images: [swanlight1]
  },
    {
    id: 5,
    name: "Elegance",
    price: 5,
    fake: 7,
    description: "💫 Zəriflik heç vaxt bu qədər fərqli olmamışdı!/Bükümlü forması və qızıl parıltısı ilə bu minimal bilərzik sadəliyin sənətə çevrilmiş halıdır./Təkcə aksesuar deyil, gündəlik tərzinizin vazkeçilməz tamamlayıcısı olacaq ✨/💫 Yüngül və rahat dizayn/💫Qızıl tonlu, allergiya yaratmayan material/💫Həm gündəlik, həm də şık kombinlər üçün ideal seçim/📦 Sifariş üçün Instagram və yaxud whatsapp-dan yazın 📩/📍 Çatdırılma: Metrolara",
    images: [elegance1]
  },
    {
    id: 6,
    name: "Luck",
    price: 10,
    fake: 12,
    description: "🌟 Ulduzların parlaqlığını biləyinizdə daşıyın!/Zərif qızıl tonlu zəncir və parlaq ulduz fiqurları ilə hazırlanmış bu bilərzik gündəlik tərzinizə romantik və incə bir toxunuş qatacaq ✨/💫 Parlaq ulduz fiqurlu daşlar/💫 Qızıl tonlu, allergiya yaratmayan material/💫 Tənzimlənə bilən uzunluq – istənilən biləyə uyğun/📦 Sifariş üçün DM 📩/📍 Bakı və bölgələrə çatdırılma mövcuddur 🚚",
    images: [luck]
  },
    {
    id: 7,
    name: "Light",
    price: 10,
    fake: 12,
    description: "🌟 Ulduzların parlaqlığını biləyinizdə daşıyın!/Zərif qızıl tonlu zəncir və parlaq ulduz fiqurları ilə hazırlanmış bu bilərzik gündəlik tərzinizə romantik və incə bir toxunuş qatacaq ✨/💫 Parlaq ulduz fiqurlu daşlar/💫 Qızıl tonlu, allergiya yaratmayan material/💫 Tənzimlənə bilən uzunluq – istənilən biləyə uyğun/📦 Sifariş üçün DM 📩/📍 Bakı və bölgələrə çatdırılma mövcuddur 🚚",
    images: [light]
  },
    {
    id: 8,
    name: "Elegance Duo",
    price: 7,
    fake: 10,
    description: "💫 Zəriflik heç vaxt bu qədər fərqli olmamışdı!/Bükümlü forması və qızıl parıltısı ilə bu minimal bilərzik sadəliyin sənətə çevrilmiş halıdır./Təkcə aksesuar deyil, gündəlik tərzinizin vazkeçilməz tamamlayıcısı olacaq ✨/💫 Yüngül və rahat dizayn/💫Qızıl tonlu, allergiya yaratmayan material/💫Həm gündəlik, həm də şık kombinlər üçün ideal seçim/📦 Sifariş üçün Instagram və yaxud whatsapp-dan yazın 📩/📍 Çatdırılma: Metrolara",
    images: [eleganceduo2]
  },
    {
    id: 9,
    name: "Twinkle Wings",
    price: 8,
    fake: 10,
    description: "🦋 Qanadlı zəriflik – barmaqlarınızda!/Parlaq daşlarla bəzədilmiş bu kəpənək qanadlı üzük romantikanın və azadlığın simvoludur. Tənzimlənə bilən ölçüsü ilə hər kəs üçün uyğundur ✨/💍 Parlaq daşlı kəpənək dizaynı/💍 Gümüş tonlu, paslanmayan və allergiya yaratmayan material/💍 Tənzimlənən ölçü – hədiyyə üçün də ideal seçim/📦 Sifariş üçün DM 📩/📍 Bakı və bölgələrə çatdırılma mövcuddur 🚚",
    images: [wings1]
  },
    {
    id: 10,
    name: "Serenity",
    price: 8,
    fake: 10,
    description: "Minimalist gümüş rəngli üzük, gündəlik istifadə üçün ideal.",
    images: [serenity1]
  },
    {
    id: 11,
    name: "Luck & Light",
    price: 18,
    fake: 24,
    description: "🌟 Ulduzların parlaqlığını biləyinizdə daşıyın!/Zərif qızıl tonlu zəncir və parlaq ulduz fiqurları ilə hazırlanmış bu bilərzik gündəlik tərzinizə romantik və incə bir toxunuş qatacaq ✨/💫 Parlaq ulduz fiqurlu daşlar/💫 Qızıl tonlu, allergiya yaratmayan material/💫 Tənzimlənə bilən uzunluq – istənilən biləyə uyğun/📦 Sifariş üçün DM 📩/📍 Bakı və bölgələrə çatdırılma mövcuddur 🚚",
    images: [luckandlight]
  },
  
]
