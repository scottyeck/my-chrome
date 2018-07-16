NODEBIN ?= ./node_modules/.bin
SRCJS ?= src/index.js
DISTJS ?= dist/index.js

dist/index.js: $(SRCJS)
	mkdir -p dist
	$(NODEBIN)/babel $(SRCJS) --out-file $(DISTJS)
