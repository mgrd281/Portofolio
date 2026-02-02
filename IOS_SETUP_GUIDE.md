# 📱 دليل تحويل البورتفوليو إلى تطبيق iOS

## ✅ ما تم إنجازه:

1. ✅ بناء المشروع (`npm run build`)
2. ✅ تثبيت Capacitor
3. ✅ تهيئة Capacitor
4. ✅ إنشاء مجلد iOS (`/ios`)

---

## 📋 الخطوات المتبقية:

### **المرحلة 1: تثبيت المتطلبات الأساسية**

#### **1. تثبيت Xcode (إجباري)**

```bash
# طريقة 1: من App Store (الأفضل)
# افتح App Store وابحث عن "Xcode" وثبّته
# الحجم: حوالي 13 GB
# المدة: 30-60 دقيقة حسب سرعة الإنترنت
```

**أو**

```bash
# طريقة 2: من موقع Apple Developer
# الرابط: https://developer.apple.com/download/
```

#### **2. تفعيل Xcode Command Line Tools**

```bash
# بعد تثبيت Xcode، نفّذ:
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept
```

#### **3. تثبيت CocoaPods**

```bash
# CocoaPods هو مدير الحزم لمشاريع iOS
sudo gem install cocoapods

# إذا واجهت مشاكل، جرب:
brew install cocoapods
```

---

### **المرحلة 2: إكمال إعداد المشروع**

#### **4. تحديث مكتبات iOS**

```bash
cd /Users/m/Desktop/Portofolio_V5-main
npx cap sync ios
```

هذا الأمر سيقوم بـ:
- ✅ نسخ ملفات الويب إلى مجلد iOS
- ✅ تحديث المكتبات باستخدام CocoaPods
- ✅ تجهيز المشروع للفتح في Xcode

---

### **المرحلة 3: فتح المشروع في Xcode**

#### **5. فتح Xcode**

```bash
npx cap open ios
```

**أو يدوياً:**
```bash
open ios/App/App.xcworkspace
```

⚠️ **مهم جداً:** افتح ملف `.xcworkspace` وليس `.xcodeproj`

---

### **المرحلة 4: إعداد التطبيق للاختبار**

#### **6. في Xcode:**

**أ) اختيار Team:**
1. اضغط على اسم المشروع في الجانب الأيسر
2. اذهب إلى تبويب "Signing & Capabilities"
3. اختر Apple ID الخاص بك من قائمة "Team"
4. إذا لم يكن لديك، اضغط "Add Account..."

**ب) تغيير Bundle Identifier (اختياري):**
```
com.ekizulfar.portfolio
```

**ج) تعيين اسم التطبيق:**
- **Display Name:** Portfolio
- **Bundle Name:** Portfolio
- **Version:** 1.0.0

---

### **المرحلة 5: اختبار التطبيق**

#### **7. اختبار على المحاكي (Simulator):**

**في Xcode:**
1. من القائمة العلوية، اختر أي جهاز iOS (مثل iPhone 15 Pro)
2. اضغط على زر ▶️ Play
3. انتظر تشغيل المحاكي
4. التطبيق سيظهر تلقائياً

#### **8. اختبار على جهاز حقيقي:**

**الإعداد:**
1. صل iPhone/iPad بالماك عبر USB
2. على الآيفون: **Settings → General → VPN & Device Management**
3. ثق بـ Apple ID الخاص بك
4. في Xcode: اختر جهازك من القائمة
5. اضغط ▶️ Play

---

### **المرحلة 6: النشر على App Store**

#### **9. متطلبات النشر:**

**أ) حساب Apple Developer (99$ سنوياً):**
```
https://developer.apple.com/programs/
```

**ب) إعداد App Store Connect:**
1. اذهب إلى https://appstoreconnect.apple.com
2. أنشئ تطبيقاً جديداً
3. املأ المعلومات المطلوبة:
   - اسم التطبيق
   - الوصف
   - الفئة
   - لقطات الشاشة
   - أيقونة التطبيق (1024x1024)

**ج) إضافة الأيقونة:**
```bash
# ضع أيقونة 1024x1024 في:
ios/App/App/Assets.xcassets/AppIcon.appiconset/
```

**د) الرفع على App Store:**

في Xcode:
1. اختر "Any iOS Device (arm64)" من قائمة الأجهزة
2. اذهب إلى: **Product → Archive**
3. بعد انتهاء الأرشفة: **Distribute App**
4. اختر: **App Store Connect**
5. اتبع التعليمات

---

## 🔄 أوامر مفيدة للصيانة:

### **تحديث المشروع:**

```bash
# عند تعديل كود الويب
npm run build
npx cap copy ios
```

### **مزامنة كاملة:**

```bash
# عند إضافة plugins جديدة
npx cap sync ios
```

### **تحديث Capacitor:**

```bash
npm install @capacitor/core@latest @capacitor/cli@latest @capacitor/ios@latest
npx cap sync ios
```

---

## 🎨 تخصيص التطبيق:

### **1. تغيير اسم التطبيق:**

في ملف `capacitor.config.ts`:
```typescript
const config: CapacitorConfig = {
  appId: 'com.yourcompany.portfolio',
  appName: 'اسمك الجديد',
  webDir: 'dist'
};
```

### **2. إضافة Splash Screen:**

```bash
npm install @capacitor/splash-screen
npx cap sync ios
```

في `capacitor.config.ts`:
```typescript
plugins: {
  SplashScreen: {
    launchShowDuration: 2000,
    backgroundColor: "#000000",
    showSpinner: false
  }
}
```

### **3. إضافة أيقونات:**

استخدم أداة لتوليد جميع الأحجام:
```
https://www.appicon.co/
```

---

## ⚠️ مشاكل شائعة وحلولها:

### **مشكلة 1: "xcode-select: error"**

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

### **مشكلة 2: "pod install failed"**

```bash
cd ios/App
pod repo update
pod install
```

### **مشكلة 3: "No such module"**

```bash
npx cap sync ios
cd ios/App
pod install --repo-update
```

### **مشكلة 4: "Failed to register bundle identifier"**

- غيّر `appId` في `capacitor.config.ts` إلى شيء فريد

---

## 📱 معلومات المشروع الحالي:

- **App ID:** com.ekizulfar.portfolio
- **App Name:** Portfolio
- **Web Directory:** dist
- **iOS Project:** /Users/m/Desktop/Portofolio_V5-main/ios

---

## 🚀 الخطوة التالية:

**إذا كان Xcode مثبتاً:**
```bash
cd /Users/m/Desktop/Portofolio_V5-main
npx cap sync ios
npx cap open ios
```

**إذا لم يكن Xcode مثبتاً:**
1. ثبّت Xcode من App Store
2. ثبّت CocoaPods: `sudo gem install cocoapods`
3. نفذ الأوامر أعلاه

---

## 📚 مصادر إضافية:

- **Capacitor Docs:** https://capacitorjs.com/docs/ios
- **Xcode Guide:** https://developer.apple.com/xcode/
- **App Store Guidelines:** https://developer.apple.com/app-store/review/guidelines/

---

**حظاً موفقاً! 🍎📱**
