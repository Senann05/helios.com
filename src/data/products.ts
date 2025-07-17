import interstaller3 from "../manual database/id1-2.png"
import shimmerfly from "../manual database/id2-2.png"
import independence1 from "../manual database/id3-2.png"
import swanlight1 from "../manual database/id4-5.png"
import elegance1 from "../manual database/id5.png"
import luck from "../manual database/id6.png"
import light from "../manual database/id7.png"
import eleganceduo2 from "../manual database/id8.png"
import wings1 from "../manual database/id9-3.png"
import serenity1 from "../manual database/id10.jpg"
import luckandlight from "../manual database/id11-2.png"

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
    description: "🌟 Ulduzların parlaqlığını biləyinizdə daşıyın!/Zərif qızıl tonlu zəncir və parlaq ulduz fiqurları ilə hazırlanmış bu bilərzik gündəlik tərzinizə romantik və incə bir toxunuş qatacaq ✨/💫 Parlaq ulduz fiqurlu daşlar/💫 Qızıl tonlu, allergiya yaratmayan material/💫 Tənzimlənə bilən uzunluq – istənilən biləyə uyğun/📦 Sifariş üçün DM 📩/📍📍 Çatdırılma: Metrolara 🚚",
    images: [luck]
  },
    {
    id: 7,
    name: "Light",
    price: 10,
    fake: 12,
    description: "🌟 Ulduzların parlaqlığını biləyinizdə daşıyın!/Zərif qızıl tonlu zəncir və parlaq ulduz fiqurları ilə hazırlanmış bu bilərzik gündəlik tərzinizə romantik və incə bir toxunuş qatacaq ✨/💫 Parlaq ulduz fiqurlu daşlar/💫 Qızıl tonlu, allergiya yaratmayan material/💫 Tənzimlənə bilən uzunluq – istənilən biləyə uyğun/📦 Sifariş üçün DM 📩/📍 📍 Çatdırılma: Metrolara 🚚",
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
    description: "🦋 Qanadlı zəriflik – barmaqlarınızda!/Parlaq daşlarla bəzədilmiş bu kəpənək qanadlı üzük romantikanın və azadlığın simvoludur. Tənzimlənə bilən ölçüsü ilə hər kəs üçün uyğundur ✨/💍 Parlaq daşlı kəpənək dizaynı/💍 Gümüş tonlu, paslanmayan və allergiya yaratmayan material/💍 Tənzimlənən ölçü – hədiyyə üçün də ideal seçim/📦 Sifariş üçün DM 📩/📍 Çatdırılma: Metrolara",
    images: [wings1]
  },
    {
    id: 10,
    name: "Serenity",
    price: 8,
    fake: 10,
    description: "💍 Zərifliyin qızılı və incə harmoniyası!/İki tonlu, incə və zərif bu açıq dizaynlı üzük – sadəliyin modern parıltısıdır. Qızılı detallarla çərçivələnmiş incə ağ xətt dizaynı ilə gündəlik stilinizə fərqli bir elegans qatacaq./✨ Minimalist ruh, maksimal təsir!/💫 Qızılı və inci-ağ tonların zərif kombinasiyası/💫 Dəriyə uyğun, allergiya yaratmayan material/💫 Ayarlanabilir ölçü – rahat və universal istifadə üçün/💖 Özünüzə və ya sevdiklərinizə hədiyyə etmək üçün mükəmməl bir seçimdir./📦 Sifariş üçün DM 📩/📍 Çatdırılma: Metrolara",
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
