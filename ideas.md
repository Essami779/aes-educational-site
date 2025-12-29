# تصميم موقع شرح خوارزمية AES - أفكار التصميم

## الفكرة المختارة: **Modern Minimalist Academic**

### Design Movement
**Bauhaus + Contemporary Minimalism**: تصميم يجمع بين الدقة الأكاديمية والبساطة الحديثة، مع التركيز على الوضوح والقراءة السلسة.

### Core Principles
1. **Clarity Over Decoration**: كل عنصر بصري له غرض وظيفي واضح.
2. **Hierarchical Information**: ترتيب المعلومات بناءً على الأهمية والتسلسل المنطقي.
3. **Accessible Typography**: استخدام نوعي خطوط متناسقة مع حجم ممتاز للقراءة.
4. **Subtle Motion**: حركات ناعمة عند التفاعل، لا تشتت الانتباه عن المحتوى.

### Color Philosophy
- **Primary**: Deep Indigo (`#1F2937` / `#2D3748`) - يعكس الجدية والأكاديمية
- **Accent**: Vibrant Cyan (`#06B6D4` / `#0EA5E9`) - يمثل التكنولوجيا والتشفير
- **Background**: Off-white/Light Gray (`#F9FAFB` / `#F3F4F6`) - راحة العين
- **Text**: Dark Charcoal (`#111827`) - قراءة مريحة
- **Borders**: Subtle Gray (`#E5E7EB`) - فصل بسيط بين الأقسام

### Layout Paradigm
- **Asymmetric Grid**: استخدام شبكة 12 عمود مع أقسام غير متساوية
- **Sidebar Navigation**: قائمة جانبية ثابتة لسهولة التنقل بين الأقسام
- **Card-Based Content**: تنظيم المحتوى في بطاقات منفصلة مع ظلال ناعمة
- **Vertical Rhythm**: مسافات منتظمة بين العناصر (8px grid system)

### Signature Elements
1. **Code Block Styling**: صناديق كود بخلفية داكنة مع تمييز الكلمات المفتاحية
2. **Mathematical Notation**: عرض الصيغ الرياضية بخط واضح مع إطار خفيف
3. **Step-by-Step Visualization**: رسوم توضيحية تفاعلية تظهر خطوات العملية

### Interaction Philosophy
- **Smooth Transitions**: انتقالات 300ms عند التفاعل مع العناصر
- **Hover States**: تغيير لون خفيف وظهور ظل إضافي عند الـ Hover
- **Active States**: تمييز واضح للقسم النشط في الشريط الجانبي
- **Scroll Behavior**: تحديث الملاح الجانبي تلقائياً عند التمرير

### Animation
- **Entrance Animations**: ظهور الأقسام بتلاشي سلس (fade-in) عند التحميل
- **Micro-interactions**: ارتفاع بسيط للبطاقات عند الـ Hover
- **Scroll Indicators**: شريط تقدم يظهر موضع القراءة الحالي

### Typography System
- **Display Font**: `Playfair Display` (Google Fonts) - للعناوين الرئيسية (h1, h2)
  - Weight: 700 (Bold)
  - Size: 32px (h1), 24px (h2)
- **Body Font**: `Inter` (Google Fonts) - للنصوص الأساسية
  - Weight: 400 (Regular) للفقرات، 500 (Medium) للتأكيد
  - Size: 16px للفقرات، 14px للملاحظات
- **Code Font**: `JetBrains Mono` - للأكواد والصيغ الرياضية
  - Size: 13px

---

## تفاصيل التنفيذ

### الألوان الدقيقة
```
Primary: #1F2937 (Dark Slate)
Secondary: #6B7280 (Medium Gray)
Accent: #06B6D4 (Cyan)
Success: #10B981 (Green)
Warning: #F59E0B (Amber)
Error: #EF4444 (Red)
Background: #F9FAFB (Off-white)
Card: #FFFFFF (White)
Border: #E5E7EB (Light Gray)
```

### Spacing System
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
```

### Border Radius
```
sm: 4px
md: 8px
lg: 12px
```

### Shadows
```
sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```
