import type { ImageMetadata } from "astro";
import work1 from "~/assets/portfolio/work-1.jpeg";
import work3 from "~/assets/portfolio/work-3.jpeg";
import work6 from "~/assets/portfolio/work-6.jpeg";
import work7 from "~/assets/portfolio/work-7.jpeg";
import work8 from "~/assets/portfolio/work-8.jpeg";
import work11 from "~/assets/portfolio/work-11.jpeg";

export type Service = {
  slug: string;
  title: string;
  breadcrumb: string;
  listDescription: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  image: ImageMetadata;
  imageAlt: string;
  schemaName: string;
  schemaDescription: string;
  benefitsTitle: string;
  benefits: string[];
  scopeTitle: string;
  scope: string[];
  ctaTitle: string;
  ctaDescription: string;
};

export const areaServedText =
  "Studio znajduje się przy ul. Kacza 2 w Ostrowi Mazowieckiej. Klienci dojeżdżają do nas z całego powiatu ostrowskiego — m.in. ze Starego Lubiejewa, Brok, Nur i okolicznych miejscowości.";

export const services: Service[] = [
  {
    slug: "przyciemnianie-szyb",
    title: "Przyciemnianie szyb",
    breadcrumb: "Przyciemnianie szyb",
    listDescription:
      "Profesjonalna aplikacja folii o wysokiej jakości, która zwiększa komfort jazdy, chroni wnętrze przed promieniowaniem UV i nadaje autu elegancki, sportowy charakter. Dobieramy odcień idealnie dopasowany do Twoich potrzeb i przepisów.",
    seoTitle: "Przyciemnianie szyb Ostrów Mazowiecka",
    seoDescription:
      "Przyciemnianie szyb samochodowych w Ostrowi Mazowieckiej — folia premium, zgodność z przepisami. Diamond Touch Studio, ul. Kacza 2. Umów wizytę.",
    h1: "Przyciemnianie szyb",
    lead: "Profesjonalne przyciemnianie szyb w Ostrowi Mazowieckiej. Dobieramy folię do Twojego auta i przepisów — większy komfort, ochrona przed UV i dyskretny, sportowy wygląd.",
    image: work6,
    imageAlt:
      "Przyciemnianie szyb — Mercedes, Diamond Touch Studio, Ostrów Mazowiecka",
    schemaName: "Przyciemnianie szyb samochodowych",
    schemaDescription:
      "Aplikacja folii przyciemniającej na szyby samochodu — komfort jazdy, ochrona UV i zgodność z przepisami.",
    benefitsTitle: "Co daje folia na szyby?",
    benefits: [
      "Mniejsze nagrzewanie się wnętrza latem",
      "Ochrona tapicerki i plastików przed UV",
      "Większa prywatność i komfort jazdy",
      "Sportowy, elegancki wygląd auta",
      "Folia dopasowana do przepisów i Twoich oczekiwań",
    ],
    scopeTitle: "Oklejamy",
    scope: [
      "Szyby boczne — przód i tył",
      "Tylna szyba",
      "Szyby w busach i vanach",
      "Korekta lub wymiana starej folii",
    ],
    ctaTitle: "Umów przyciemnianie szyb",
    ctaDescription:
      "Cena zależy od modelu auta, liczby szyb i wybranej folii. Zadzwoń — doradzimy odcień i termin.",
  },
  {
    slug: "folia-kameleon",
    title: "Folia kameleon",
    breadcrumb: "Folia kameleon",
    listDescription:
      "Zaawansowana folia, która mieni się różnymi kolorami w zależności od kąta padania światła. Efekt zaskakuje i wyróżnia auto z tłumu, zachowując jednocześnie pełną funkcjonalność i ochronę szyb.",
    seoTitle: "Folia kameleon Ostrów Mazowiecka",
    seoDescription:
      "Folia kameleon na szyby i elementy auta w Ostrowi Mazowieckiej — efekt zmieniającego się koloru. Diamond Touch Studio. Umów konsultację.",
    h1: "Folia kameleon",
    lead: "Folia kameleon w Ostrowi Mazowieckiej — kolor i odcień zmieniają się wraz z kątem padania światła. Efekt, który wyróżnia auto i przyciąga spojrzenia.",
    image: work3,
    imageAlt:
      "Folia kameleon na szybie — Diamond Touch Studio, Ostrów Mazowiecka",
    schemaName: "Folia kameleon",
    schemaDescription:
      "Aplikacja folii kameleon zmieniającej kolor w zależności od kąta światła — na szyby lub elementy nadwozia.",
    benefitsTitle: "Dlaczego kameleon?",
    benefits: [
      "Unikalny efekt wizualny — inny kolor z każdej perspektywy",
      "Wyróżnienie auta bez trwałej ingerencji w lakier",
      "Ochrona powierzchni pod folią",
      "Możliwość powrotu do oryginalnego wyglądu",
      "Precyzyjna aplikacja w studio",
    ],
    scopeTitle: "Gdzie stosujemy folię kameleon",
    scope: [
      "Przednia szyba — efekt iryzujący",
      "Szyby boczne i tylna",
      "Elementy nadwozia i detale",
      "Indywidualny dobór folii do auta",
    ],
    ctaTitle: "Umów folię kameleon",
    ctaDescription:
      "Każda realizacja wymaga konsultacji — dobieramy folię i zakres do Twojego auta. Zadzwoń po wycenę.",
  },
  {
    slug: "dechroming",
    title: "Dechroming elementów",
    breadcrumb: "Dechroming",
    listDescription:
      "Eliminacja chromowanych detali poprzez precyzyjne oklejenie folią w wybranym wykończeniu — najczęściej w głębokiej czerni połysk lub mat. Nowoczesny, spójny design bez ingerencji w lakier fabryczny.",
    seoTitle: "Dechroming Ostrów Mazowiecka",
    seoDescription:
      "Dechroming — oklejanie chromów folią w Ostrowi Mazowieckiej. Czarny połysk lub mat bez ingerencji w lakier. Diamond Touch Studio.",
    h1: "Dechroming elementów",
    lead: "Dechroming w Ostrowi Mazowieckiej — chromowane listwy, grille i detale oklejamy folią w czerni połysk lub mat. Nowoczesny wygląd bez malowania i bez uszkodzenia lakieru.",
    image: work8,
    imageAlt:
      "Dechroming — Ford Ranger, Diamond Touch Studio, Ostrów Mazowiecka",
    schemaName: "Dechroming elementów samochodu",
    schemaDescription:
      "Oklejanie chromowanych elementów folią w wybranym wykończeniu — eliminacja chromu bez ingerencji w lakier.",
    benefitsTitle: "Co daje dechroming?",
    benefits: [
      "Spójny, nowoczesny wygląd nadwozia",
      "Brak ingerencji w fabryczny lakier",
      "Możliwość powrotu do oryginału",
      "Wykończenie połysk lub mat do wyboru",
      "Precyzyjne dopasowanie do kształtu elementów",
    ],
    scopeTitle: "Najczęściej dechromujemy",
    scope: [
      "Listwy okien i słupki",
      "Grille i emblematy",
      "Lusterka i obudowy reflektorów",
      "Elementy wnętrza — wybrane detale",
    ],
    ctaTitle: "Umów dechroming",
    ctaDescription:
      "Zakres i cena zależą od liczby elementów i wybranego wykończenia folii. Umów konsultację telefonicznie.",
  },
  {
    slug: "oklejanie-samochodow",
    title: "Oklejanie samochodów — zmiana koloru",
    breadcrumb: "Oklejanie samochodów",
    listDescription:
      "Pełna lub częściowa zmiana koloru auta wysokiej klasy foliami premium. Nowy wygląd, dodatkowa ochrona lakieru i możliwość powrotu do oryginału — wszystko z dbałością o najmniejszy detal.",
    seoTitle: "Oklejanie samochodów Ostrów Mazowiecka",
    seoDescription:
      "Oklejanie samochodów folią — zmiana koloru auta w Ostrowi Mazowieckiej. Folia premium, pełne i częściowe oklejenie. Diamond Touch Studio.",
    h1: "Oklejanie samochodów — zmiana koloru",
    lead: "Oklejanie samochodów folią w Ostrowi Mazowieckiej — pełna lub częściowa zmiana koloru bez malowania. Folia premium chroni lakier i pozwala wrócić do fabrycznego wyglądu.",
    image: work1,
    imageAlt:
      "Oklejanie samochodu folią — Diamond Touch Studio, Ostrów Mazowiecka",
    schemaName: "Oklejanie samochodów folią — zmiana koloru",
    schemaDescription:
      "Pełna lub częściowa zmiana koloru auta folią premium — ochrona lakieru i możliwość odwrócenia zmiany.",
    benefitsTitle: "Co daje oklejanie folią?",
    benefits: [
      "Nowy kolor bez malowania i rejestracji zmiany",
      "Dodatkowa warstwa ochrony lakieru",
      "Możliwość powrotu do oryginalnego koloru",
      "Szeroki wybór kolorów i wykończeń folii",
      "Precyzyjne oklejenie krawędzi i detali",
    ],
    scopeTitle: "Zakres oklejenia",
    scope: [
      "Pełna zmiana koloru nadwozia",
      "Oklejenie dachu, maski lub elementów",
      "Folia matowa, połysk lub satyna",
      "Przygotowanie lakieru przed aplikacją",
    ],
    ctaTitle: "Umów oklejanie auta",
    ctaDescription:
      "Wycena zależy od modelu, powierzchni i wybranej folii. Zadzwoń — omówimy kolor i zakres prac.",
  },
  {
    slug: "ppf",
    title: "Oklejanie samochodów folią ochronną PPF",
    breadcrumb: "Folia PPF",
    listDescription:
      "Bezbarwna folia ochronna PPF (Paint Protection Film), która skutecznie zabezpiecza lakier przed odpryskami, zarysowaniami, owadami i czynnikami atmosferycznymi. Idealna dla osób, którym zależy na zachowaniu fabrycznego wyglądu auta przez długie lata.",
    seoTitle: "Folia PPF Ostrów Mazowiecka",
    seoDescription:
      "Oklejanie folią PPF w Ostrowi Mazowieckiej — zabezpieczenie lakieru przed odpryskami i zarysowaniami. Diamond Touch Studio, ul. Kacza 2. Umów wizytę.",
    h1: "Folia ochronna PPF",
    lead: "Profesjonalne oklejanie folią PPF w Ostrowi Mazowieckiej. Bezbarzna folia chroni lakier przed odpryskami od kamieni, zarysowaniami, owadami i słońcem — bez zmiany wyglądu auta.",
    image: work11,
    imageAlt:
      "Oklejanie folią PPF — Diamond Touch Studio, Ostrów Mazowiecka",
    schemaName: "Oklejanie folią ochronną PPF",
    schemaDescription:
      "Bezbarzna folia PPF chroniąca lakier samochodu przed odpryskami, zarysowaniami i czynnikami atmosferycznymi.",
    benefitsTitle: "Co daje folia PPF?",
    benefits: [
      "Ochrona przed odpryskami od kamieni na drodze",
      "Bariera przed drobnymi zarysowaniami i zabrudzeniami",
      "Odporność na żywice, owady i promieniowanie UV",
      "Zachowanie fabrycznego koloru i połysku lakieru",
      "Możliwość oklejenia całego auta lub wybranych elementów",
    ],
    scopeTitle: "Najczęściej oklejamy",
    scope: [
      "Maska i zderzak przedni",
      "Progi, lusterka i nadkola",
      "Całe auto — pełne zabezpieczenie lakieru",
      "Elementy narażone na uszkodzenia w codziennej jeździe",
    ],
    ctaTitle: "Umów oklejanie PPF",
    ctaDescription:
      "Każda realizacja zaczyna się od konsultacji. Cena zależy od modelu auta, zakresu oklejenia i wybranej folii — ustalamy ją indywidualnie.",
  },
  {
    slug: "sprzatanie-wnetrza",
    title: "Sprzątanie wnętrza samochodu",
    breadcrumb: "Sprzątanie wnętrza",
    listDescription:
      "Kompleksowe czyszczenie wnętrza pojazdu — tapicerka, dywany, plastiki, szyby oraz szczeliny trudnodostępne. Przywracamy oryginalny wygląd i świeżość wnętrza, dbając o każdy detal.",
    seoTitle: "Sprzątanie wnętrza samochodu Ostrów Mazowiecka",
    seoDescription:
      "Detailing wnętrza samochodu w Ostrowi Mazowieckiej — czyszczenie tapicerki, plastików i dywanów. Diamond Touch Studio. Umów wizytę.",
    h1: "Sprzątanie wnętrza samochodu",
    lead: "Kompleksowe sprzątanie wnętrza auta w Ostrowi Mazowieckiej — tapicerka, dywany, plastiki i trudnodostępne szczeliny. Przywracamy świeżość i porządek w kabinie.",
    image: work7,
    imageAlt:
      "Sprzątanie wnętrza samochodu — Range Rover, Diamond Touch Studio, Ostrów Mazowiecka",
    schemaName: "Sprzątanie wnętrza samochodu",
    schemaDescription:
      "Kompleksowe czyszczenie wnętrza pojazdu — tapicerka, dywany, plastiki i szyby.",
    benefitsTitle: "Co obejmuje sprzątanie?",
    benefits: [
      "Dokładne odkurzanie i czyszczenie tapicerki",
      "Mycie i pielęgnacja plastików oraz konsoli",
      "Czyszczenie dywaników i wykładzin",
      "Detale — szczeliny, klimatyzacja, szyby wewnętrzne",
      "Odświeżenie wnętrza bez uszkodzenia materiałów",
    ],
    scopeTitle: "Czyszczymy",
    scope: [
      "Tapicerka materiałowa i skórzana",
      "Sufit i słupki",
      "Bagażnik i wnęki",
      "Plastiki, ekrany dotykowe i listwy",
    ],
    ctaTitle: "Umów sprzątanie wnętrza",
    ctaDescription:
      "Cena zależy od stanu wnętrza i wielkości auta. Zadzwoń — ustalimy zakres i termin.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
