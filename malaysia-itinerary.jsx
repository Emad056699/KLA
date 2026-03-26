import { useState } from "react";

const days = [
  {
    day: 1, week: 1,
    title: "الوصول والاستقرار",
    emoji: "🏠",
    category: "إجراءات",
    morning: "الوصول، ترتيب السكن، شراء مستلزمات من Giant Kelana Jaya القريب",
    outing: "تمشية خفيفة حول الحي + Paradigm Mall بجانب الجامعة للتعرف على المنطقة وشراء الاحتياجات (شريحة جوال، أدوات مطبخ، مستلزمات)",
    transport: "مشي 5-10 دقائق",
    tip: "حمّل تطبيق Grab (مثل أوبر) و Touch 'n Go eWallet — ضروريين جداً في ماليزيا",
    highlight: "استقرار"
  },
  {
    day: 2, week: 1,
    title: "🏥 الفحص الطبي + غابة Bukit Gasing",
    emoji: "🏥",
    category: "إجراءات + طبيعة",
    morning: "الفحص الطبي الصباحي (حسب الموعد)",
    outing: "بعد الفحص: Bukit Gasing Forest Reserve — غابة استوائية على بُعد دقائق من بترالينغ جايا! مسارات مشي وسط أشجار عملاقة مع إطلالة بانورامية على أفق كوالالمبور من القمة",
    transport: "Grab (10 دقائق من الجامعة)",
    tip: "Bukit Gasing قريبة جداً من سكنك — مثالية للرياضة الصباحية طوال إقامتك!",
    highlight: "فحص طبي + طبيعة"
  },
  {
    day: 3, week: 1,
    title: "الغابة المعلّقة + أبراج بتروناس",
    emoji: "🌿",
    category: "طبيعة + سياحة",
    morning: "رياضة + قهوة + فطور في المنزل",
    outing: "KL Forest Eco Park — ممر معلّق (Canopy Walk) فوق غابة استوائية عمرها 130 مليون سنة وسط المدينة! ثم Suria KLCC للتسوّق، حديقة KLCC، نافورة الموسيقى المسائية (8-9-10 مساءً)",
    transport: "LRT من Kelana Jaya إلى KLCC (~20 دقيقة)",
    tip: "KL Forest Eco Park بجانب KL Tower — الممر المعلّق تجربة مذهلة فوق أشجار عملاقة وبالمجان!",
    highlight: "غابة معلّقة + أبراج"
  },
  {
    day: 4, week: 1,
    title: "📋 تسليم الجواز + حديقة الطيور",
    emoji: "📋",
    category: "إجراءات + طبيعة",
    morning: "تسليم الجواز في الجامعة لاستخراج فيزة الطالب",
    outing: "KL Bird Park — أكبر حديقة طيور مسقوفة في العالم! أكثر من 3000 طائر حر الطيران. ثم Perdana Botanical Garden + حديقة الفراشات + حديقة الأوركيد",
    transport: "Grab إلى Lake Gardens",
    tip: "حديقة الطيور تجربة فريدة — الطيور تطير حولك بحرية! خصص ساعتين",
    highlight: "تسليم جواز + طيور"
  },
  {
    day: 5, week: 1,
    title: "Pavilion + Jalan Alor الأكل الشعبي",
    emoji: "🛍️",
    category: "تسوّق + أكل",
    morning: "رياضة في Bukit Gasing + قهوة + فطور",
    outing: "Pavilion KL — أفضل مول للتسوّق + Tokyo Street. ثم Lot 10 فوود هول ياباني. مساءً: شارع Jalan Alor — أشهر شارع أكل شعبي في ماليزيا!",
    transport: "LRT إلى Bukit Bintang",
    tip: "Jalan Alor ينشط من 5 مساءً — جرّب الساتيه والمي غورينغ وعصير الفواكه الطازج",
    highlight: "تسوّق + أكل شعبي"
  },
  {
    day: 6, week: 1,
    title: "شلالات كانشينغ + غابة مطيرة",
    emoji: "💧",
    category: "طبيعة ومغامرة",
    morning: "فطور خفيف — انطلاق مبكر",
    outing: "Kanching Rainforest Waterfall & Templer Park — 7 مستويات من الشلالات وسط غابة مطيرة! سباحة في المسابح الطبيعية، مسارات مشي، تلة Bukit Takun الجيرية (مليون سنة!). المكان 30 دقيقة فقط من KL",
    transport: "Grab (~30 دقيقة)",
    tip: "خذ منشفة وملابس سباحة. المستويات 1-3 سهلة، 4-7 تحتاج لياقة. الماء بارد ومنعش!",
    highlight: "شلالات 7 مستويات!"
  },
  {
    day: 7, week: 1,
    title: "يوم راحة + 1 Utama العملاق",
    emoji: "😌",
    category: "راحة + ترفيه",
    morning: "نوم إضافي + فطور هادي",
    outing: "1 Utama — من أكبر المولات في العالم! Secret Garden حديقة استوائية على السطح (30,000 قدم²)، Camp5 أكبر جدار تسلّق داخلي في آسيا، FlowRider تزلّج أمواج، سينما IMAX",
    transport: "Grab (~15 دقيقة)",
    tip: "Secret Garden مجانية ومذهلة. Camp5 لو تحب التحدي — تسلّق صخور حقيقي!",
    highlight: "حديقة سطح + تسلّق"
  },
  {
    day: 8, week: 2,
    title: "كهوف باتو + شلال سونغاي توا",
    emoji: "🐒",
    category: "سياحة + طبيعة",
    morning: "رياضة + قهوة + فطور",
    outing: "Batu Caves — 272 درجة ملوّنة + تمثال ذهبي ضخم (42 متر!). ثم Sungai Tua Waterfall القريب — شلال جميل مع مسابح طبيعية وسط الغابة للسباحة",
    transport: "KTM Komuter أو Grab",
    tip: "روح باتو كيفز قبل 9 الصبح لتجنب الزحام والحر. الشلال قريب — اجمعهم بيوم!",
    highlight: "كهوف ملوّنة + شلال"
  },
  {
    day: 9, week: 2,
    title: "رحلة يومية: ملاكا — تراث عالمي",
    emoji: "🏛️",
    category: "رحلة يومية",
    morning: "فطور خفيف — انطلاق مبكر",
    outing: "Malacca (UNESCO) — الساحة الهولندية الحمراء، حصن A Famosa البرتغالي، شارع Jonker Walk للتسوّق والأكل، كروز نهري، شارع الانسجام (3 دور عبادة متجاورة). مزيج ثقافي مذهل!",
    transport: "باص من TBS Terminal (~2 ساعة، 10-15 رنجت فقط!)",
    tip: "الباصات كل 15 دقيقة. خذ نسخة من الجواز + وصل التسليم معك. جرّب لاكسا ملاكا!",
    highlight: "تراث عالمي UNESCO"
  },
  {
    day: 10, week: 2,
    title: "FRIM Skywalk + الحي الصيني",
    emoji: "🌳",
    category: "طبيعة + ثقافة",
    morning: "انطلاق مبكر — فطور خفيف",
    outing: "FRIM Forest Skywalk — ممر معلّق على ارتفاع 50 متر فوق الغابة! 260 متر من المشي فوق الأشجار مع إطلالة على KL. بعد الظهر: Petaling Street الحي الصيني + Central Market للحرف والهدايا",
    transport: "Grab إلى FRIM (~30 دقيقة)، LRT للحي الصيني",
    tip: "FRIM يفتح 8:30ص — 150 شخص فقط يومياً! احجز أو روح بدري. فاوض في Petaling Street",
    highlight: "50 متر فوق الغابة!"
  },
  {
    day: 11, week: 2,
    title: "TRX الحديث + KL Tower بانوراما",
    emoji: "✨",
    category: "تسوّق + إطلالات",
    morning: "رياضة في Bukit Gasing + قهوة + فطور",
    outing: "The Exchange TRX — أحدث مول فاخر (2024)، TRX City Park أكبر حديقة سطح في ماليزيا (مجانية!). ثم KL Tower — Sky Deck مراقبة 360° + Sky Box صندوق زجاجي معلّق في الهواء!",
    transport: "MRT إلى TRX، Grab إلى KL Tower",
    tip: "Sky Box في KL Tower — صندوق زجاجي معلّق! تجربة مثيرة. حديقة TRX السطحية مجانية ومذهلة",
    highlight: "حديقة سطح + بانوراما"
  },
  {
    day: 12, week: 2,
    title: "بوتراجايا — المسجد الوردي + حدائق",
    emoji: "🌸",
    category: "سياحة + طبيعة",
    morning: "رياضة + قهوة + فطور",
    outing: "Putrajaya — المسجد الوردي (Putra Mosque) على البحيرة (من أجمل المساجد في العالم!)، Putrajaya Botanical Garden حدائق نباتية واسعة، جسر Seri Wawasan، كروز البحيرة بالقارب",
    transport: "KLIA Transit أو Grab (~30 دقيقة)",
    tip: "المسجد الوردي وقت الغروب = أجمل صورة ممكنة. كروز البحيرة ممتع ورخيص (~30 رنجت)",
    highlight: "مسجد وردي + حدائق"
  },
  {
    day: 13, week: 2,
    title: "🦀 جزيرة بولاو كيتام — قرية صيادين",
    emoji: "🦀",
    category: "جزيرة + طبيعة",
    morning: "انطلاق مبكر — فطور خفيف",
    outing: "Pulau Ketam (جزيرة السلطعون) — قرية صيادين صينية تقليدية على أعمدة فوق البحر! لا سيارات — فقط دراجات ومشي. بيوت خشبية ملوّنة، مأكولات بحرية طازجة ورخيصة جداً، أجواء هادئة",
    transport: "قطار KTM إلى Pelabuhan Klang (آخر محطة) ثم قارب سريع 20 دقيقة",
    tip: "لا تحتاج جواز! فقط قطار + قارب. المأكولات البحرية طازجة من البحر مباشرة — أرخص بكثير من المدينة",
    highlight: "جزيرة بدون جواز!"
  },
  {
    day: 14, week: 2,
    title: "يوم راحة + معبد ثيان هاو + بانغسار",
    emoji: "☕",
    category: "راحة + ثقافة",
    morning: "نوم إضافي + فطور هادي",
    outing: "Thean Hou Temple — معبد صيني مذهل بإطلالة بانورامية (مجاني!). ثم Bangsar — حي عصري بكافيهات مميزة ومطاعم عالمية. Bangsar Village للتسوّق الهادي",
    transport: "Grab ثم LRT إلى Bangsar",
    tip: "المعبد أجمل وقت الغروب — ألوان المعبد + أضواء المدينة. بانغسار = أفضل كافيهات في KL",
    highlight: "معبد بانورامي + كافيهات"
  },
  {
    day: 15, week: 3,
    title: "رحلة: مرتفعات جنتنق + تلفريك",
    emoji: "🎢",
    category: "رحلة يومية",
    morning: "فطور خفيف — انطلاق مبكر",
    outing: "Genting Highlands — تلفريك Awana SkyWay فوق غابة 130 مليون سنة! معبد Chin Swee Caves على حافة الجبل، ملاهي Skytropolis، Genting Premium Outlets تسوّق بخصومات 70%، جو بارد ومنعش",
    transport: "Grab إلى محطة التلفريك (~ساعة)",
    tip: "خذ جاكيت! الجو بارد (16-20°). التلفريك يتوقف عند المعبد مجاناً — منظر خيالي!",
    highlight: "تلفريك فوق الغابة"
  },
  {
    day: 16, week: 3,
    title: "🏖️ شاطئ بورت ديكسون — يوم بحري",
    emoji: "🏖️",
    category: "شاطئ",
    morning: "فطور خفيف — انطلاق مبكر",
    outing: "Port Dickson — أقرب شاطئ من KL! رمال بيضاء، سباحة، رياضات مائية (بنانا بوت، جت سكي). Cape Rachado Lighthouse — منارة برتغالية تاريخية فوق تلة بإطلالة بحرية. مأكولات بحرية طازجة",
    transport: "Grab (~1.5 ساعة) — أسهل وأسرع من الباص",
    tip: "خذ واقي شمس ومنشفة! الشاطئ + المنارة + الأكل البحري = يوم مثالي. Pantai Teluk Kemang أفضل شاطئ",
    highlight: "بحر وشاطئ رملي!"
  },
  {
    day: 17, week: 3,
    title: "المسجد الوطني + متحف الفنون الإسلامية",
    emoji: "🕌",
    category: "ثقافة + تاريخ",
    morning: "رياضة + قهوة + فطور",
    outing: "Merdeka Square — ساحة الاستقلال. Masjid Negara المسجد الوطني (تصميم مذهل!). متحف الفنون الإسلامية — مجسمات مساجد، مصاحف نادرة، خطوط عربية، فنون إسلامية من كل العالم",
    transport: "LRT إلى Masjid Jamek",
    tip: "متحف الفنون الإسلامية يستحق 2-3 ساعات — مجموعة استثنائية. المسجد الوطني مفتوح للزوار بين الصلوات",
    highlight: "تراث إسلامي مذهل"
  },
  {
    day: 18, week: 3,
    title: "Sunway Lagoon — ألعاب مائية ضخمة",
    emoji: "💦",
    category: "مغامرة + ترفيه",
    morning: "فطور في المنزل",
    outing: "Sunway Lagoon — مدينة ترفيه ضخمة: زحاليق مائية عملاقة + أمواج صناعية + حديقة حيوانات + ملاهي + Nickelodeon. يوم كامل من المرح! ثم Sunway Pyramid المجاور — مول بتصميم مصري فرعوني مع حلبة تزلّج",
    transport: "Grab أو BRT Sunway (~20 دقيقة)",
    tip: "اشترِ التذكرة أونلاين = أرخص. خذ ملابس سباحة + واقي شمس. يحتاج يوم كامل",
    highlight: "ألعاب مائية ممتعة!"
  },
  {
    day: 19, week: 3,
    title: "Mid Valley + Little India بريكفيلدز",
    emoji: "🛒",
    category: "تسوّق + ثقافة",
    morning: "رياضة + قهوة + فطور",
    outing: "Mid Valley Megamall تسوّق بأسعار ممتازة + The Gardens Mall الفاخر. ثم Brickfields (Little India) — حي هندي ملوّن بمطاعم هندية أصلية ومحلات بهارات. NU Sentral عند KL Sentral",
    transport: "LRT + shuttle أو Grab",
    tip: "البِرياني وماسالا دوسا في Brickfields من أفضل الأكل الهندي في كل ماليزيا!",
    highlight: "تسوّق + أكل هندي"
  },
  {
    day: 20, week: 3,
    title: "هدايا + شلال سونغاي غاباي أو Tadom Hill",
    emoji: "🎁",
    category: "طبيعة + تسوّق",
    morning: "رياضة + قهوة + فطور",
    outing: "خيار 1: Central Market للهدايا (باتيك، شوكولاتة، بهارات) + Sungai Gabai Waterfall (شلال جميل ساعة من KL مع مسار مشي). خيار 2: Tadom Hill Resorts — بحيرات فيروزية + تلال جيرية + أراجيح معلّقة فوق الماء!",
    transport: "LRT أو Grab",
    tip: "Tadom Hill = مكان تصوير مذهل! أو اجمع الهدايا + شلال أخير كذكرى. أو ارجع لأماكنك المفضّلة",
    highlight: "مغامرة أخيرة أو هدايا"
  },
  {
    day: 21, week: 3,
    title: "الوداع — حديقة KLCC + غروب الأبراج",
    emoji: "🌅",
    category: "وداع",
    morning: "نوم + فطور هادي + ترتيب الشنط",
    outing: "صباح في حديقة KLCC — مشي بين الأشجار مع إطلالة على الأبراج. كافيه هادي. تمشية أخيرة في Bukit Bintang. صور تذكارية عند أبراج بتروناس وقت الغروب = أجمل وداع",
    transport: "LRT إلى KLCC",
    tip: "الغروب عند الأبراج (6:30-7:30م) = الإضاءة الذهبية + أضواء الأبراج = أجمل صورة. الله يوفقك في الدكتوراه!",
    highlight: "وداع كوالالمبور 💛"
  }
];

const weekColors = {
  1: { bg: "linear-gradient(135deg, #0D4F4F 0%, #1A6B6B 100%)", accent: "#2DD4A8", card: "#0F3D3D", glow: "rgba(45,212,168,0.12)" },
  2: { bg: "linear-gradient(135deg, #3D1F5C 0%, #5A2D82 100%)", accent: "#C084FC", card: "#2D1647", glow: "rgba(192,132,252,0.12)" },
  3: { bg: "linear-gradient(135deg, #5C3D1F 0%, #8B5E34 100%)", accent: "#FBBF24", card: "#4A3018", glow: "rgba(251,191,36,0.12)" }
};

const weekTitles = {
  1: "استقرار + وسط المدينة + شلالات",
  2: "جزيرة + تراث + ممرات معلّقة",
  3: "شاطئ + جبال + وداع"
};

export default function MalaysiaItinerary() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [expandedDay, setExpandedDay] = useState(null);

  const filteredDays = days.filter(d => d.week === selectedWeek);
  const colors = weekColors[selectedWeek];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060606",
      fontFamily: "'Segoe UI', Tahoma, sans-serif",
      direction: "rtl",
      color: "#fff"
    }}>
      <div style={{
        background: colors.bg,
        padding: "26px 20px 18px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }} />
        <div style={{ fontSize: "28px", marginBottom: "2px" }}>🇲🇾</div>
        <h1 style={{ fontSize: "20px", fontWeight: 800, margin: "0 0 3px", letterSpacing: "-0.5px" }}>
          جدول إجازتك في كوالالمبور
        </h1>
        <p style={{ fontSize: "11px", opacity: 0.7, margin: "2px 0" }}>
          ٣ أسابيع: طبيعة • شلالات • جزيرة • شاطئ • تسوّق • ثقافة
        </p>
        <p style={{ fontSize: "10px", opacity: 0.45, margin: "3px 0 0" }}>
          جامعة لنكن — بترالينغ جايا | الجواز مسلّم للفيزا
        </p>
      </div>

      <div style={{ display: "flex", gap: "6px", padding: "12px 12px 4px", justifyContent: "center" }}>
        {[1, 2, 3].map(w => (
          <button key={w} onClick={() => { setSelectedWeek(w); setExpandedDay(null); }}
            style={{
              flex: 1, padding: "10px 4px",
              border: selectedWeek === w ? `2px solid ${weekColors[w].accent}` : "2px solid #181818",
              borderRadius: "12px",
              background: selectedWeek === w ? weekColors[w].card : "#0D0D0D",
              color: selectedWeek === w ? weekColors[w].accent : "#555",
              fontSize: "12px", fontWeight: 700, cursor: "pointer",
              transition: "all 0.3s", fontFamily: "inherit", direction: "rtl"
            }}>
            <div style={{ fontSize: "15px", marginBottom: "1px" }}>
              {w === 1 ? "🌿" : w === 2 ? "🦀" : "🏖️"}
            </div>
            الأسبوع {w}
            <div style={{ fontSize: "8.5px", fontWeight: 400, opacity: 0.7, marginTop: "2px" }}>
              {weekTitles[w]}
            </div>
          </button>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "3px", padding: "8px 14px 4px" }}>
        {filteredDays.map(d => (
          <div key={d.day} style={{
            flex: 1, height: "3px", borderRadius: "2px",
            background: expandedDay === d.day ? colors.accent : "#1A1A1A",
            transition: "all 0.3s"
          }} />
        ))}
      </div>

      <div style={{ padding: "4px 12px 14px" }}>
        {filteredDays.map((day) => {
          const isExpanded = expandedDay === day.day;
          return (
            <div key={day.day} onClick={() => setExpandedDay(isExpanded ? null : day.day)}
              style={{
                background: isExpanded ? "#121212" : "#0A0A0A",
                borderRadius: "13px", marginBottom: "7px",
                border: isExpanded ? `1px solid ${colors.accent}40` : "1px solid #161616",
                cursor: "pointer", transition: "all 0.3s", overflow: "hidden",
                boxShadow: isExpanded ? `0 4px 20px ${colors.glow}` : "none"
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 12px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: isExpanded ? `${colors.accent}18` : "#141414",
                  border: isExpanded ? `1px solid ${colors.accent}35` : "1px solid #1E1E1E",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "19px", flexShrink: 0
                }}>{day.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                    <span style={{ fontSize: "10px", color: colors.accent, fontWeight: 700 }}>يوم {day.day}</span>
                    <span style={{
                      fontSize: "8.5px", padding: "2px 6px", borderRadius: "5px",
                      background: "#151515", color: "#777"
                    }}>{day.category}</span>
                  </div>
                  <div style={{
                    fontSize: "13px", fontWeight: 600,
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                  }}>{day.title}</div>
                </div>
                <div style={{
                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s", fontSize: "11px", color: "#333"
                }}>▼</div>
              </div>

              {isExpanded && (
                <div style={{ padding: "0 12px 12px" }}>
                  <div style={{
                    display: "inline-block", padding: "3px 10px", borderRadius: "7px",
                    background: `${colors.accent}12`, border: `1px solid ${colors.accent}28`,
                    color: colors.accent, fontSize: "11px", fontWeight: 600, marginBottom: "10px"
                  }}>⭐ {day.highlight}</div>

                  {[
                    { icon: "🌅", label: "الصباح", text: day.morning, color: "#F59E0B" },
                    { icon: "🎯", label: "الوجهة والفعالية", text: day.outing, color: colors.accent },
                    { icon: "🚇", label: "المواصلات", text: day.transport, color: "#60A5FA" },
                  ].map((s, i) => (
                    <div key={i} style={{ padding: "9px 0", borderTop: "1px solid #181818" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                        <span style={{ fontSize: "13px" }}>{s.icon}</span>
                        <span style={{ fontSize: "10.5px", fontWeight: 700, color: s.color }}>{s.label}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: "12px", lineHeight: 1.75, color: "#aaa" }}>{s.text}</p>
                    </div>
                  ))}

                  <div style={{
                    marginTop: "6px", padding: "9px 10px", borderRadius: "9px",
                    background: `${colors.accent}08`, border: `1px dashed ${colors.accent}28`
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
                      <span style={{ fontSize: "12px" }}>💡</span>
                      <span style={{ fontSize: "10px", fontWeight: 700, color: colors.accent }}>نصيحة</span>
                    </div>
                    <p style={{ margin: 0, fontSize: "11px", lineHeight: 1.65, color: "#888" }}>{day.tip}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Info Cards */}
      {[
        {
          icon: "🏝️", title: "الجزر والشواطئ",
          items: [
            "🦀 بولاو كيتام (يوم 13) — جزيرة بالقطار + قارب، بدون جواز!",
            "🏖️ بورت ديكسون (يوم 16) — أقرب شاطئ رملي (~1.5 ساعة)",
            "🏝️ بانغكور — 3.5 ساعات + فيري (تحتاج جواز للفندق)",
            "✈️ لانكاوي/رداق/بيرهنتيان — تحتاج طيران، غير ممكنة حالياً"
          ]
        },
        {
          icon: "🌿", title: "١٠ تجارب طبيعة في الجدول",
          items: [
            "🌳 Bukit Gasing — غابة بجانبك (يوم 2)",
            "🌉 KL Eco Park — ممر معلّق وسط المدينة (يوم 3)",
            "🦜 حديقة الطيور والفراشات (يوم 4)",
            "💧 شلالات كانشينغ 7 مستويات (يوم 6)",
            "🐒 كهوف باتو + شلال سونغاي توا (يوم 8)",
            "🌉 FRIM Skywalk — 50 متر فوق الغابة (يوم 10)",
            "🌸 حدائق بوتراجايا النباتية (يوم 12)",
            "🦀 جزيرة بولاو كيتام (يوم 13)",
            "⛰️ جنتنق — جبال + تلفريك (يوم 15)",
            "🏖️ بورت ديكسون — شاطئ + منارة (يوم 16)"
          ]
        },
        {
          icon: "📌", title: "ملاحظات مهمة",
          items: [
            "الفحص الطبي يوم 2 — تسليم الجواز يوم 4",
            "كل التنقلات برية — قطار LRT/KTM، Grab، باص",
            "احتفظ بنسخة الجواز + وصل التسليم دائماً",
            "Grab + Touch 'n Go = أساسيات التنقل",
            "LRT Kelana Jaya = خط مباشر لوسط المدينة",
            "الأماكن الطبيعية — روح بدري الصبح",
            "الجو حار ورطب — مظلة + مويه + واقي شمس"
          ]
        }
      ].map((card, ci) => (
        <div key={ci} style={{ padding: "0 12px 8px" }}>
          <div style={{
            background: "#0D0D0D", borderRadius: "13px", padding: "12px 14px",
            border: "1px solid #181818"
          }}>
            <h3 style={{
              fontSize: "12.5px", margin: "0 0 8px", color: colors.accent,
              display: "flex", alignItems: "center", gap: "6px"
            }}>
              <span>{card.icon}</span> {card.title}
            </h3>
            <div style={{ fontSize: "11px", color: "#777", lineHeight: 1.85 }}>
              {card.items.map((item, i) => (
                <p key={i} style={{ margin: "0 0 3px" }}>{ci === 2 ? `• ${item}` : item}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div style={{ height: "20px" }} />
    </div>
  );
}
