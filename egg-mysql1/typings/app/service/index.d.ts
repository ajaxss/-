// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCircle = require('../../../app/service/circle');
import ExportMaikeshop = require('../../../app/service/maikeshop');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    circle: AutoInstanceType<typeof ExportCircle>;
    maikeshop: AutoInstanceType<typeof ExportMaikeshop>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
