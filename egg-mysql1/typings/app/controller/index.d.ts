// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCircle = require('../../../app/controller/circle');
import ExportFileUpload = require('../../../app/controller/fileUpload');
import ExportMaikeshop = require('../../../app/controller/maikeshop');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    circle: ExportCircle;
    fileUpload: ExportFileUpload;
    maikeshop: ExportMaikeshop;
    user: ExportUser;
  }
}
