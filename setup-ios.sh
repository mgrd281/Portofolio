#!/bin/bash

echo "🚀 Setting up iOS Project..."
echo ""

# الألوان
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# التحقق من Xcode
echo "${BLUE}📱 Checking Xcode...${NC}"
if ! command -v xcodebuild &> /dev/null; then
    echo "${RED}❌ Xcode is not installed!${NC}"
    echo "Please install Xcode from App Store first."
    exit 1
fi
echo "${GREEN}✅ Xcode found${NC}"
echo ""

# التحقق من CocoaPods
echo "${BLUE}📦 Checking CocoaPods...${NC}"
if ! command -v pod &> /dev/null; then
    echo "${YELLOW}⚠️  CocoaPods not found. Installing...${NC}"
    echo "This requires sudo password..."
    sudo gem install cocoapods
    if [ $? -eq 0 ]; then
        echo "${GREEN}✅ CocoaPods installed successfully${NC}"
    else
        echo "${RED}❌ Failed to install CocoaPods${NC}"
        echo "Try manually: sudo gem install cocoapods"
        exit 1
    fi
else
    echo "${GREEN}✅ CocoaPods found${NC}"
fi
echo ""

# الانتقال إلى مجلد iOS
echo "${BLUE}📂 Navigating to iOS project...${NC}"
cd ios/App
echo "${GREEN}✅ In iOS project directory${NC}"
echo ""

# تثبيت Pods
echo "${BLUE}🔧 Installing CocoaPods dependencies...${NC}"
echo "This may take a few minutes..."
pod install

if [ $? -eq 0 ]; then
    echo "${GREEN}✅ Pods installed successfully${NC}"
else
    echo "${RED}❌ Pod install failed${NC}"
    echo "Try manually: cd ios/App && pod install"
    exit 1
fi
echo ""

# العودة للمجلد الرئيسي
cd ../..

# بناء المشروع
echo "${BLUE}🏗️  Building web project...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo "${GREEN}✅ Build successful${NC}"
else
    echo "${RED}❌ Build failed${NC}"
    exit 1
fi
echo ""

# مزامنة مع iOS
echo "${BLUE}🔄 Syncing with iOS...${NC}"
npx cap sync ios

if [ $? -eq 0 ]; then
    echo "${GREEN}✅ Sync successful${NC}"
else
    echo "${RED}❌ Sync failed${NC}"
    exit 1
fi
echo ""

# فتح Xcode
echo "${BLUE}🎉 Opening Xcode...${NC}"
open ios/App/App.xcworkspace

echo ""
echo "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo "${GREEN}✅ Setup Complete!${NC}"
echo "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "${YELLOW}📝 Next steps in Xcode:${NC}"
echo "1. Select 'App' in the left sidebar"
echo "2. Go to 'Signing & Capabilities' tab"
echo "3. Select your Team (Apple ID)"
echo "4. Choose an iPhone simulator from the top"
echo "5. Press ▶️ Play button"
echo ""
echo "${BLUE}Happy coding! 🚀${NC}"
