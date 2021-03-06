#!/usr/bin/env node
'use strict';

/**
 * Run example-app unit tests.
 */

const config = require('./config.js');
const sh = require('shelljs');
const tools = require('@singpath/tools');

// exit on error
sh.set('-e');

// setup
tools.clean(config.coverage.root, {message: 'Removing coverage data'});
sh.echo(`Setting up "${config.coverage.root}/"...`);
sh.mkdir('-p', config.coverage.root);

tools.instanbul(config.test.main, {coverage: config.coverage.root});
