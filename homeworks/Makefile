#!/bin/sh

SHELL=/bin/bash
BIN=./bin

FORCE_COLOURS=script -q /dev/null

# color output
NO_COLOR=\033[0m
OK_COLOR=\033[32;01m

OK_STRING=$(OK_COLOR)✅$(NO_COLOR)

AWK_CMD = awk '{ printf "%-30s %-10s\n",$$1, $$2; }'
PRINT_LINE = printf "%0.s*" {1..50} && printf "\n"
PRINT_OK = printf "$(OK_COLOR)$@ $(OK_STRING)\n" | $(AWK_CMD) && $(PRINT_LINE)

application := package-path

BASEDIR = $(PWD)

starter_code=starter-code
solution_code=solution-code
folder=homeworks

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2};'

create-zip: ## create zips for starter and solution code (make create-zip application=<application_folder>)
	@(zip -r ${application}/${application}-${starter_code}.zip ${application}/${starter_code})
	@(zip -r ${application}/${application}-${solution_code}.zip ${application}/${solution_code} || echo "")
	@(printf "ZIP for ${application} have been created 🗜\n")
	@$(PRINT_OK)

delete-all: ## delete all zips for folders
	@(for f in $(shell ls -d */ ${BASEDIR} | cut -f1 -d'/'); do make delete-zip application=$${f}; done)
	@$(PRINT_OK)

delete-zip: ## delete zips for starter and solution code (make delete-zip application=<application_folder>)
	@(rm -rf ${application}/${application}-${starter_code}.zip ${application}/${application}-${solution_code}.zip)
	@(printf "${application} deleted 💥\n")
	@$(PRINT_OK)

get-solution-download-path: ## Copy in clipboard GitHub solution code download path for a given lab (make get-solution-download-path application=node)
	@(echo https://github.com/pataruco/jsd/raw/master/${folder}/${application}/${application}-solution-code.zip | pbcopy)
	@$(PRINT_LINE)
	@$(PRINT_OK)
	@(printf "path copied in the clipboard 📋\n")

get-starter-download-path: ## Copy in clipboard GitHub starter code download path for a given lab (make get-starter-download-path application=node)
	@(echo https://github.com/pataruco/jsd/raw/master/${folder}/${application}/${application}-starter-code.zip | pbcopy)
	@$(PRINT_LINE)
	@$(PRINT_OK)
	@(printf "path copied in the clipboard 📋\n")

zip-all: ## create all zips for folders
	@(for f in $(shell ls -d */ ${BASEDIR} | cut -f1 -d'/'); do make create-zip application=$${f}; done)
	@$(PRINT_OK)

.PHONY: \
				help \
				create-zip \
				delete-all \
				delete-zip \
				get-solution-download-path \
				get-starter-download-path \
				zip-all
