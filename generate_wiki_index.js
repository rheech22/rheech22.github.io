#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');

const target = 'src/wikis/index.md';
const list = [];

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function isMarkdown(fileName) {
  return /\.md$/.test(fileName);
}

function getFiles(path, list) {
  fs.readdirSync(path).forEach((fileName) => {
    const subPath = `${path}/${fileName}`;

    if (isDirectory(subPath)) {
      return getFiles(subPath, list);
    }

    if (isMarkdown(fileName) && subPath !== target) {
      return list.push(subPath);
    }
  });
}

function getVimWikiLinks(paths) {
  return paths
    .map((path) => path.replace('src/wikis/', '').replace('/index.md', ''))
    .sort()
    .map((path) => {
      const segments = path.split('/');
      const depth = segments.length - 1;
      const link = `* [[${segments.join('/')}${isMarkdown(path) ? '' : '/index.md'}]]`;

      return link.padStart(link.length + depth, '\t');
    });
}

const deleteFile = (target) => {
  fs.unlink(target, function (err) {
    if (err) throw err;
  });
};

const createFile = (filename) => {
  fs.open(filename, 'w', function (err) {
    if (err) throw err;
  });
};

const appendFile = (target, value) => {
  fs.appendFileSync(target, value + '\r\n', function (err) {
    if (err) throw err;
  });
};

function appendLinks(target, links) {
  appendFile(target, '== VimWiki Index ==' + '\r\n');

  links.forEach((link) => {
    appendFile(target, link);
  });
}

getFiles('src/wikis', list);

deleteFile(target);

createFile(target);

appendLinks(target, getVimWikiLinks(list));
