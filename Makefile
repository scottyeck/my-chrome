NODEBIN ?= ./node_modules/.bin
SRCCSS ?= src/styles.pcss
DISTCSS ?= dist/styles.css
SRCJS ?= src/index.js
DISTJS ?= dist/index.js

dist: dist/styles.css dist/index.js

dist/styles.css: $(SRCCSS)
	mkdir -p dist
	$(NODEBIN)/babel-node ./scripts/build-css.js --out-file=$(DISTCSS)

dist/index.js: $(SRCJS)
	mkdir -p dist
	$(NODEBIN)/babel $(SRCJS) --out-file $(DISTJS)
