all: build

.PHONY: clean all install build startjss installnpm setupport release

clean:
	cd android && $(MAKE) clean

build: setupport
	react-native run-android

release: setupport
	react-native run-android --configuration=release

start: setupport
	react-native start

install:
	npm install

installDebug: uninstall
	cd android && $(MAKE) installDebug

installRelease: uninstall
	cd android && $(MAKE) installRelease

uninstall:
	cd android && $(MAKE) uninstall

setupport:
	cd %ANDROID_HOME%\platform-tools && adb reverse tcp:8081 tcp:8081

log:
	react-native log-android
