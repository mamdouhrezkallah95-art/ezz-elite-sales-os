# لوحة قيادة د. ممدوح رزق الله — عز النخبة

نظام تشغيل مبيعات B2B لعز النخبة: لوحة قيادة، خطط ومهام، CRM، زيارات، فرص و Forecast، طلبات، منتجات ومخزون، نشاط يومي، إنجازات، وتقارير جاهزة للإدارة.

- **الاستضافة:** GitHub Pages (ملف `index.html` واحد، من غير build).
- **البيانات والتزامن:** Firebase Firestore، والتحديث لحظي بين كل الأجهزة.
- **الدخول:** بحساب Google. المالك بيحدد مين يعدّل ومين يطّلع بس من صفحة الإعدادات.

## الملفات

| الملف | الوظيفة |
|---|---|
| `index.html` | النظام كامل |
| `config.js` | إعدادات Firebase وإيميل المالك |
| `firestore.rules` | قواعد الأمان، بتتنسخ في Firebase Console |
| `seed-data.json` | بيانات التأسيس: خطة الـ30 يوم، الـ17 منتج، والمستهدفات |

## الإعداد (مرة واحدة)

1. **إنشاء مشروع Firebase:** من [console.firebase.google.com](https://console.firebase.google.com) اضغط Add project. مش محتاج Google Analytics.
2. **تفعيل تسجيل الدخول:** Build ← Authentication ← Get started ← Sign-in method ← فعّل **Google**. بعدها من Settings ← Authorized domains ضيف `USERNAME.github.io`.
3. **قاعدة البيانات:** Build ← Firestore Database ← Create database (Production mode). بعدها من تبويب **Rules** الصق محتوى `firestore.rules` بعد ما تغيّر `OWNER_EMAIL` لإيميلك، واضغط Publish.
4. **ربط الموقع:** Project settings ← Your apps ← أيقونة الويب `</>` ← سجّل التطبيق. انسخ `firebaseConfig` وحطه في `config.js`، واكتب إيميلك في `ownerEmail`.
5. **أول تشغيل:** افتح رابط GitHub Pages وسجّل الدخول. من **الإعدادات والدليل** اضغط "تحميل بيانات التأسيس"، وبعدها ضيف إيميلات المسؤولين.

## الصلاحيات

- **المالك:** كل الصلاحيات وإدارة المستخدمين.
- **صلاحية تعديل:** إضافة وتعديل كل البيانات.
- **اطلاع فقط:** يشوف اللوحة والتقارير والتقدم لحظيًا من غير تعديل.
- أي حد تاني بيشوف صفحة تسجيل الدخول بس، حتى لو معاه الرابط.

> مفاتيح `config.js` بتاعة Firebase Web مش أسرار. الحماية الفعلية للبيانات جاية من `firestore.rules`.
