import { BookOpen, Zap, Key, Lock, Shield } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import ContentCard from '@/components/ContentCard';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-lg overflow-hidden shadow-xl">
            <div className="relative p-12 text-white">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
              <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-4">معيار التشفير المتقدم</h1>
                <h2 className="text-3xl font-bold text-accent mb-6">Advanced Encryption Standard (AES)</h2>
                <p className="text-lg text-white/90 max-w-2xl">
                  شرح مفصل وشامل لخوارزمية AES، من الأساسيات إلى التفاصيل الرياضية المعقدة.
                  تعلم كيف تعمل واحدة من أقوى خوارزميات التشفير في العالم.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow Image */}
        <section className="mb-12">
          <img
            src="/images/aes-process-flow.png"
            alt="AES Encryption Process"
            className="w-full rounded-lg shadow-lg border border-border"
          />
        </section>

        {/* Introduction Section */}
        <ContentCard
          id="intro"
          title="المقدمة: معيار التشفير المتقدم"
          icon={<BookOpen size={24} />}
        >
          <div className="space-y-4">
            <p>
              تُعد خوارزمية <strong>معيار التشفير المتقدم (Advanced Encryption Standard - AES)</strong>، والمعروفة أيضاً باسم <strong>Rijndael</strong>، حجر الزاوية في أمن المعلومات الحديث. تم اختيارها واعتمادها من قبل المعهد الوطني للمعايير والتكنولوجيا (NIST) في عام 2001 لتحل محل خوارزمية تشفير البيانات (DES).
            </p>
            <p>
              تندرج AES ضمن فئة <strong>تشفير الكتل المتماثل (Symmetric Block Cipher)</strong>، مما يعني أنها تستخدم نفس المفتاح لتشفير البيانات وفك تشفيرها، وتعمل على معالجة البيانات في كتل ذات حجم ثابت.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded mt-6">
              <h4 className="font-bold text-primary mb-2">الخصائص الأساسية:</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ <strong>حجم الكتلة:</strong> 128 بت (16 بايت) ثابت</li>
                <li>✓ <strong>أطوال المفاتيح:</strong> 128، 192، أو 256 بت</li>
                <li>✓ <strong>عدد الجولات:</strong> 10، 12، أو 14 جولة حسب طول المفتاح</li>
                <li>✓ <strong>النوع:</strong> تشفير متماثل (نفس المفتاح للتشفير وفك التشفير)</li>
              </ul>
            </div>
          </div>
        </ContentCard>

        {/* Initialization Section */}
        <ContentCard
          id="initialization"
          title="مرحلة التهيئة (Initialization)"
          icon={<Zap size={24} />}
        >
          <div className="space-y-4">
            <p>
              تبدأ عملية التشفير بتحويل النص الأصلي (Plaintext) إلى مصفوفة الحالة (State Matrix) وتطبيق أول مفتاح جولة.
            </p>

            <h4 className="font-bold text-primary mt-6">1. تحويل النص الأصلي إلى مصفوفة الحالة</h4>
            <p>
              <strong>المدخل:</strong> كتلة من النص الأصلي بحجم 128 بت (16 بايت).
            </p>
            <p>
              <strong>العملية:</strong> يتم ترتيب البايتات الـ 16 في مصفوفة 4×4، حيث يتم وضع البايتات عمودياً (من الأعلى إلى الأسفل، ثم العمود التالي).
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>البايتات من 0 إلى 3 تشكل العمود الأول</li>
              <li>البايتات من 4 إلى 7 تشكل العمود الثاني، وهكذا</li>
            </ul>

            <h4 className="font-bold text-primary mt-6">2. AddRoundKey الأولي</h4>
            <p>
              <strong>المدخلات:</strong> مصفوفة الحالة الأولية، ومفتاح الجولة الصفري (K₀) الذي هو المفتاح الأصلي (128 بت).
            </p>
            <p>
              <strong>العملية:</strong> يتم تطبيق عملية <strong>XOR</strong> البسيطة (Exclusive OR) بين كل بايت في مصفوفة الحالة والبايت المقابل له في مفتاح الجولة K₀.
            </p>
            <p>
              <strong>الناتج:</strong> مصفوفة حالة جديدة تدخل الجولة الأولى.
            </p>
          </div>
        </ContentCard>

        {/* SubBytes Section */}
        <ContentCard
          id="subbytes"
          title="الخطوة الأولى: SubBytes (استبدال البايتات)"
          icon={<Lock size={24} />}
        >
          <div className="space-y-4">
            <p>
              هذه الخطوة هي عملية استبدال غير خطية (Non-linear Substitution) تستخدم جدول ثابت يُسمى <strong>S-Box</strong>، وهو جدول 16×16 يحتوي على 256 قيمة بايت فريدة.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded mt-4">
              <h4 className="font-bold text-primary mb-3">آلية العملية:</h4>
              <ol className="space-y-2 text-sm">
                <li><strong>1.</strong> يُستخدم النصف الأعلى من البايت (مثلاً A من A5) كـ <strong>مؤشر للصف</strong> في جدول S-Box</li>
                <li><strong>2.</strong> يُستخدم النصف الأدنى من البايت (مثلاً 5 من A5) كـ <strong>مؤشر للعمود</strong> في جدول S-Box</li>
                <li><strong>3.</strong> يتم استبدال البايت الأصلي بالقيمة الموجودة في تقاطع الصف والعمود المشار إليهما</li>
              </ol>
            </div>

            {/* SubBytes Visualization */}
            <div className="mt-6">
              <img
                src="/images/subbytes-sbox.png"
                alt="SubBytes S-Box Operation"
                className="w-full rounded-lg shadow-md border border-border"
              />
            </div>

            <p className="mt-4">
              <strong>الهدف:</strong> توفير خاصية <strong>الإخفاء (Confusion)</strong>، مما يجعل العلاقة بين المفتاح والنص المشفر معقدة وغير خطية.
            </p>
          </div>
        </ContentCard>

        {/* ShiftRows Section */}
        <ContentCard
          id="shiftrows"
          title="الخطوة الثانية: ShiftRows (إزاحة الصفوف)"
          icon={<Lock size={24} />}
        >
          <div className="space-y-4">
            <p>
              هذه الخطوة هي عملية تدوير دوري (Cyclic Shift) للبايتات داخل صفوف مصفوفة الحالة.
            </p>

            <div className="bg-green-50 border border-green-200 p-4 rounded mt-4">
              <h4 className="font-bold text-primary mb-3">تفاصيل الإزاحة:</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>الصف 0 (العلوي):</strong> لا يتم إزاحته (إزاحة 0 بايت)</li>
                <li><strong>الصف 1:</strong> يتم إزاحته دورياً بمقدار <strong>1 بايت</strong> إلى اليسار</li>
                <li><strong>الصف 2:</strong> يتم إزاحته دورياً بمقدار <strong>2 بايت</strong> إلى اليسار</li>
                <li><strong>الصف 3 (السفلي):</strong> يتم إزاحته دورياً بمقدار <strong>3 بايتات</strong> إلى اليسار</li>
              </ul>
            </div>

            {/* ShiftRows Visualization */}
            <div className="mt-6">
              <img
                src="/images/shiftrows-visualization.png"
                alt="ShiftRows Operation"
                className="w-full rounded-lg shadow-md border border-border"
              />
            </div>

            <p className="mt-4">
              <strong>الهدف:</strong> توفير خاصية <strong>الانتشار (Diffusion)</strong>، حيث تنتشر البايتات عبر الأعمدة، مما يضمن أن تغيير بايت واحد يؤثر على عدة أعمدة.
            </p>
          </div>
        </ContentCard>

        {/* MixColumns Section */}
        <ContentCard
          id="mixcolumns"
          title="الخطوة الثالثة: MixColumns (خلط الأعمدة)"
          icon={<Lock size={24} />}
        >
          <div className="space-y-4">
            <p>
              هذه هي الخطوة الأكثر تعقيداً رياضياً، وتتم عبر ضرب مصفوفي على حقل غالوا (Galois Field).
            </p>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded mt-4">
              <h4 className="font-bold text-primary mb-3">المصفوفة الثابتة (Fixed Matrix):</h4>
              <div className="font-mono text-sm bg-white p-3 rounded border border-purple-200 overflow-x-auto">
                <pre>{`[02  03  01  01]
[01  02  03  01]
[01  01  02  03]
[03  01  01  02]`}</pre>
              </div>
            </div>

            <p className="mt-4">
              <strong>الرياضيات في حقل غالوا GF(2⁸):</strong> لا يتم استخدام الجمع والضرب العاديين.
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>الجمع:</strong> يتم استبداله بعملية <strong>XOR</strong> البسيطة</li>
              <li><strong>الضرب:</strong> يتم استبداله بعملية <strong>ضرب متعدد الحدود (Polynomial Multiplication)</strong> مع معامل اختزال (Reduction Modulo) هو x⁸ + x⁴ + x³ + x + 1</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded mt-4">
              <h4 className="font-bold text-primary mb-2">مثال على الضرب:</h4>
              <p className="text-sm">
                ضرب بايت في 02 يعني إزاحة البايت إلى اليسار بمقدار بت واحد (Left Shift)، وإذا نتج عن الإزاحة تجاوز للبت الثامن (أي أن البت السابع كان 1)، يتم تطبيق عملية XOR مع القيمة 1B (التي تمثل معامل الاختزال).
              </p>
            </div>

            <p className="mt-4">
              <strong>الهدف:</strong> زيادة خاصية <strong>الانتشار (Diffusion)</strong> بشكل كبير، حيث يؤثر كل بايت في العمود على جميع البايتات الأربعة الناتجة في العمود الجديد.
            </p>
          </div>
        </ContentCard>

        {/* AddRoundKey Section */}
        <ContentCard
          id="addroundkey"
          title="الخطوة الرابعة: AddRoundKey (إضافة مفتاح الجولة)"
          icon={<Key size={24} />}
        >
          <div className="space-y-4">
            <p>
              <strong>المدخلات:</strong> مصفوفة الحالة بعد عملية MixColumns، ومفتاح الجولة الحالي (Kᵢ) الذي تم توليده مسبقاً.
            </p>
            <p>
              <strong>العملية:</strong> تطبيق عملية <strong>XOR</strong> بين مصفوفة الحالة ومفتاح الجولة Kᵢ.
            </p>
            <p>
              <strong>الناتج:</strong> مصفوفة حالة جديدة تدخل الجولة التالية.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 p-4 rounded mt-4">
              <h4 className="font-bold text-primary mb-2">ملاحظة مهمة:</h4>
              <p className="text-sm">
                هذه الخطوة تُطبق في جميع الجولات (الأولية والرئيسية والنهائية)، وهي تُضمن أن كل جولة تستخدم مفتاح فريد، مما يزيد من قوة التشفير بشكل كبير.
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Final Round Section */}
        <ContentCard
          id="finalround"
          title="الجولة النهائية (The Final Round)"
          icon={<Shield size={24} />}
        >
          <div className="space-y-4">
            <p>
              الجولة الأخيرة (الجولة 10 في AES-128) هي مطابقة للجولات الرئيسية باستثناء خطوة واحدة:
            </p>

            <div className="bg-red-50 border border-red-200 p-4 rounded mt-4">
              <h4 className="font-bold text-primary mb-3">العمليات:</h4>
              <p className="text-sm font-mono bg-white p-3 rounded border border-red-200">
                SubBytes → ShiftRows → <strong>AddRoundKey</strong>
              </p>
            </div>

            <p className="mt-4">
              <strong>الاستثناء:</strong> يتم <strong>حذف خطوة MixColumns</strong> من الجولة النهائية.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded mt-4">
              <h4 className="font-bold text-primary mb-2">السبب:</h4>
              <p className="text-sm">
                حذف MixColumns من الجولة النهائية يسمح بتحسين كفاءة فك التشفير (Decryption)، حيث يمكن استخدام نفس البنية الرياضية في الاتجاه العكسي.
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Key Expansion Section */}
        <ContentCard
          id="keyexpansion"
          title="توسيع المفتاح (Key Expansion)"
          icon={<Key size={24} />}
        >
          <div className="space-y-4">
            <p>
              تُعد هذه العملية ضرورية لتوليد مفاتيح الجولات الـ 11 (من K₀ إلى K₁₀) المطلوبة لـ AES-128. يتم توليد المفاتيح على شكل كلمات (Words)، حيث كل كلمة هي 4 بايتات.
            </p>

            <h4 className="font-bold text-primary mt-6">توليد الكلمة الأولى من كل مفتاح جولة</h4>
            <p>
              هذه هي الخطوة المعقدة التي تضمن عدم تكرار المفاتيح. لتوليد الكلمة Wᵢ (حيث i هو مؤشر الكلمة، مثل W₄، W₈، إلخ)، يتم تطبيق العمليات التالية على الكلمة السابقة مباشرة (Wᵢ₋₁):
            </p>

            <ol className="space-y-3 text-sm mt-4">
              <li>
                <strong>1. RotWord (تدوير الكلمة):</strong> يتم تدوير بايتات الكلمة Wᵢ₋₁ دورياً بمقدار بايت واحد إلى اليسار.
                <div className="font-mono bg-gray-100 p-2 rounded mt-1 text-xs">
                  مثال: (B₀, B₁, B₂, B₃) → (B₁, B₂, B₃, B₀)
                </div>
              </li>
              <li>
                <strong>2. SubWord (استبدال الكلمة):</strong> يتم تطبيق عملية SubBytes (باستخدام S-Box) على كل بايت من البايتات الأربعة الناتجة عن التدوير.
              </li>
              <li>
                <strong>3. XOR مع ثابت الجولة (Rcon):</strong> يتم تطبيق عملية XOR على النتيجة مع ثابت الجولة (Round Constant - Rcon)، وهو متجه 4 بايتات يتم تحديده لكل جولة.
              </li>
              <li>
                <strong>4. XOR مع الكلمة المقابلة القديمة:</strong> يتم تطبيق عملية XOR على النتيجة النهائية مع الكلمة المقابلة من المفتاح الأصلي (Wᵢ₋₄).
              </li>
            </ol>

            <div className="bg-gray-100 border border-gray-300 p-4 rounded mt-6 font-mono text-sm">
              <p className="font-bold mb-2">الصيغة النهائية للكلمة الأولى:</p>
              <p>Wᵢ = Wᵢ₋₄ ⊕ SubWord(RotWord(Wᵢ₋₁)) ⊕ Rconⱼ</p>
            </div>

            <h4 className="font-bold text-primary mt-6">توليد الكلمات اللاحقة</h4>
            <p>
              لتوليد الكلمات الثلاث التالية في نفس مفتاح الجولة، يتم استخدام عملية XOR بسيطة:
            </p>

            <div className="bg-gray-100 border border-gray-300 p-4 rounded mt-4 font-mono text-sm">
              <p className="font-bold mb-2">الصيغة النهائية للكلمات اللاحقة:</p>
              <p>Wᵢ = Wᵢ₋₄ ⊕ Wᵢ₋₁</p>
            </div>

            <p className="mt-4">
              بهذه الطريقة، يتم توليد 44 كلمة (11 مفتاح جولة × 4 كلمات لكل مفتاح) لتغطية جميع جولات التشفير.
            </p>
          </div>
        </ContentCard>

        {/* Conclusion */}
        <section className="mb-12 bg-gradient-to-r from-accent to-accent/80 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">الخلاصة</h3>
          <p className="mb-4">
            تُظهر البنية المعيارية لخوارزمية AES، التي تعتمد على التكرار المنظم للتحويلات الأربعة الأساسية وعملية توسيع المفتاح المعقدة، سبب كونها الخيار المفضل عالمياً لتشفير البيانات الحساسة.
          </p>
          <p>
            إن الجمع بين عمليات الاستبدال غير الخطية (SubBytes) والإزاحة والخلط الخطية (ShiftRows و MixColumns) يضمن تحقيق خصائص <strong>الانتشار (Diffusion)</strong> و<strong>الإخفاء (Confusion)</strong>، وهما الركيزتان الأساسيتان لأي نظام تشفير قوي.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 pb-4 text-center text-muted-foreground text-sm">
          <p>© 2025 AES Educational Site | شرح مفصل لخوارزمية معيار التشفير المتقدم</p>
        </footer>
      </main>
    </div>
  );
}
